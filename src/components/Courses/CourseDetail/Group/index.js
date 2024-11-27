import { MoreVertical, Edit, Delete } from "react-feather";
import {
  Table,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";

// ** React Imports
import { Fragment } from "react";

// ** Reactstrap Imports
import { Card, Button } from "reactstrap";

import { getCourseGroupe } from "../../../../core/services/api/Coueses/getCourseDeatil";
import { getCourseById } from "../../../../core/services/api/Coueses/getCourseDeatil";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const CoursesGroups = ({ setModalGr, delGroup }) => {
  const [courseGr, setCourseGr] = useState([]);
  const [courseD, setCourseD] = useState({});
  const { id } = useParams();

  console.log("courseD", courseGr);

  const getListG = async (id) => {
    try {
      const CoursesId = await getCourseById(id);
      // console.log("userssssssssssssssssssssssss:", CoursesId.data);
      setCourseD(CoursesId.data);
    } catch (error) {
      throw new Error("ERROR: ", error);
    }
  };
  useEffect(() => {
    getListG(id);
  }, []);

  const getCourseG = async (courseD) => {
    try {
      const responses = await getCourseGroupe(
        courseD.teacherId,
        courseD.courseId
      );
      console.log("userssssssssssssssssssssssss:", responses);
      setCourseGr(responses);
    } catch (error) {
      throw new Error("ERROR: ", error);
    }
  };

  useEffect(() => {
    getCourseG(courseD);
  }, []);

  return (
    <Fragment>
      <div className="d-flex flex-row-reverse mb-1">
        <Button
          className=" p-0 py-1 text-right"
          style={{ width: "15%", direction: "ltr" }}
          color="primary"
          onClick={() => setModalGr((old) => !old)}
        >
          افزودن گروه
        </Button>
      </div>
      <Card className="">
        <div className="react-dataTable">
          <Table hover style={{ overflow: "visible" }}>
            <thead className="text-center">
              <tr>
                {/* <th>کاربر</th> */}
                <th>نام گروه</th>
                <th> ظرفیت دوره</th>
                <th>نام استاد</th>
                <th>اقدام</th>
              </tr>
            </thead>
            {courseGr?.map((item, index) => {
              // console.log("gg", item);
              return (
                <tbody key={index}>
                  <tr className="text-center">
                    <td
                      className=" p-0"
                      // onClick={() => {
                      //   navigate("/users/view");
                      // }}
                    >
                      {item.groupName}
                    </td>
                    <td className=" p-0">{item.groupCapacity}</td>
                    <td className=" p-0">{item.teacherName}</td>

                    <td>
                      <UncontrolledDropdown direction="start">
                        <DropdownToggle
                          className="icon-btn hide-arrow"
                          color="transparent"
                          size="sm"
                          caret
                        >
                          <MoreVertical size={15} />
                        </DropdownToggle>
                        <DropdownMenu className="d-flex flex-column p-0">
                          <DropdownItem>
                            <Edit className="me-50" size={15} />{" "}
                            <span className="align-middle">ویرایش</span>
                          </DropdownItem>
                          <DropdownItem divider className="p-0 m-0" />
                          <DropdownItem onClick={() => delGroup(item.groupId)}>
                            <Delete className="me-50" size={15} />{" "}
                            <span className="align-middle">حذف</span>
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

export default CoursesGroups;
