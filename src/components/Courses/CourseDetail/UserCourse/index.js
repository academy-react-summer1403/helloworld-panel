import { MoreVertical, Delete, CheckCircle } from "react-feather";
import {
  Table,
  Badge,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";

// ** React Imports
import { Fragment } from "react";

import { Card } from "reactstrap";

import { getResList } from "../../../../core/services/api/Coueses/getCourseDeatil";
import { deletReserve } from "../../../../core/services/api/Coueses/getCourseDeatil";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const UsersCourses = ({ getCourseG, setUserResSelect }) => {
  const [userRes, setUserRes] = useState([]);
  const { id } = useParams();

  const CourseResById = async () => {
    try {
      const responses = await getResList(id);
      setUserRes(responses.data);
      // console.log("responcee",responses);
    } catch (error) {
      throw new Error("ERROR: ", error);
    }
  };

  useEffect(() => {
    CourseResById();
  }, []);

  const delRes = async (reserveId) => {
    try {
      const id = { id: reserveId };
      console.log("sas",id);
      const responses = await deletReserve(id);
    } catch (error) {
      throw new Error("ERROR: ", error);
    }
  };

  return (
    <Fragment>
      <Card>
        <div className="react-dataTable">
          <Table hover style={{ overflow: "visible" }}>
            <thead className="text-center">
              <tr>
                <th>نام کاربر</th>
                <th> نام دوره</th>
                <th>وضعیت</th>
                <th>اقدام</th>
              </tr>
            </thead>
            {userRes &&
              userRes.map((item, index) => {
                return (
                  <tbody key={index}>
                    <tr className="text-center ">
                      <td
                        className=" px-0"
                        onClick={() => {
                          navigate("/users/view");
                        }}
                      >
                        {item.studentName}
                      </td>
                      <td className=" px-0">{item.courseName}</td>
                      <td className=" px-0">
                        <Badge
                          pill
                          color={item.accept ? "light-primary" : "light-danger"}
                          className="me-1"
                        >
                          {item.accept ? "تایید شده" : "تایید نشده"}
                        </Badge>
                      </td>
                      <td>
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="icon-btn hide-arrow"
                            color="transparent"
                            size="sm"
                            caret
                          >
                            <MoreVertical size={15} />
                          </DropdownToggle>

                          <DropdownMenu className="d-flex flex-column p-0">
                            {item.accept ? (
                              <DropdownItem onClick={() => rejCmnt(id)}>
                                <Delete className="me-50" size={15} />{" "}
                                <span className="align-middle"> عدم تایید</span>
                              </DropdownItem>
                            ) : (
                              <DropdownItem onClick={() => accptCmnt(id)}>
                                <Edit className="me-50" size={15} />{" "}
                                <span className="align-middle">تایید</span>
                              </DropdownItem>
                            )}
                            <DropdownItem divider className="p-0 m-0" />

                            <DropdownItem
                              onClick={() => delRes(item.reserveId)}
                            >
                              <Delete className="me-50" size={15} />{" "}
                              <span className="align-middle"> حذف </span>
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
          </Table>
        </div>
      </Card>
    </Fragment>
  );
};

export default UsersCourses;
