import { MoreVertical, Edit, Delete } from "react-feather";
import {
  Table,
  Badge,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";

// ** React Imports
import { Fragment, useEffect, useState } from "react";
import { Card } from "reactstrap";

import { acceptComment } from "../../../../core/services/api/Coueses/getCourseDeatil";
import { rejectComment } from "../../../../core/services/api/Coueses/getCourseDeatil";
import { deletComment } from "../../../../core/services/api/Coueses/getCourseDeatil";

const Courses = ({ dataComment }) => {
  const accptCmnt = async (CommentCourseId) => {
    try {
      const responses = await acceptComment(CommentCourseId);
    } catch (error) {
      throw new Error("ERROR: ", error);
    }
  };

  const rejCmnt = async (CommentCourseId) => {
    try {
      const responses = await rejectComment(CommentCourseId);
    } catch (error) {
      throw new Error("ERROR: ", error);
    }
  };

  const delCmnt = async (CommentCourseId) => {
    try {
      const responses = await deletComment(CommentCourseId);
    } catch (error) {
      // toast.error(error.message);
      throw new Error("ERROR: ", error);
    }
  };

  useEffect(() => {
    accptCmnt();
  }, []);

  useEffect(() => {
    rejCmnt();
  }, []);

  return (
    <Fragment>
      <Card className="">
        <div className="react-dataTable">
          <Table hover>
            <thead>
              <tr>
                <th className=" px-0">نام کاربر</th>
                <th className=" px-0">عنوان کامنت</th>
                <th className=" px-0"> متن کامنت</th>
                <th className=" px-0"> وضعیت</th>
                <th className=" px-0"> اقدام</th>
              </tr>
            </thead>
            {dataComment?.data &&
              dataComment?.data.map((item, index) => {
                return (
                  <tbody key={index}>
                    <tr>
                      <td style={{ maxWidth: "160px" }} className=" px-1">
                        {item.author ? item.author : item.courseTitle}
                      </td>
                      <td
                        className=" px-0"
                        style={{
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          maxWidth: "130px",
                        }}
                        //   onClick={()=>{navigate('/users/view')}}
                      >
                        {item.title ? item.title : item.commentTitle}
                      </td>
                      <td style={{ maxWidth: "220px" }} className=" p-0">
                        {item.describe}
                      </td>
                      <td
                        className=" p-0"
                        onClick={
                          item.accept === true
                            ? () => rejCmnt(item.id ? item.id : item.commentId)
                            : () =>
                                accptCmnt(item.id ? item.id : item.commentId)
                        }
                      >
                        <Badge
                          pill
                          color={item.accept ? "light-success" : "light-danger"}
                          className="me-1"
                        >
                          {item.accept === true ? "تایید شده" : " تایید نشده"}
                        </Badge>
                      </td>
                      <td className=" p-0">
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
                            {item.accept ? (
                              <DropdownItem onClick={() => rejCmnt(item.id)}>
                                <Delete className="me-50" size={15} />{" "}
                                <span className="align-middle"> عدم تایید</span>
                              </DropdownItem>
                            ) : (
                              <DropdownItem onClick={() => accptCmnt(item.id)}>
                                <Edit className="me-50" size={15} />{" "}
                                <span className="align-middle">تایید</span>
                              </DropdownItem>
                            )}
                            <DropdownItem divider className="p-0 m-0" />

                            <DropdownItem onClick={() => delCmnt(item.id)}>
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

export default Courses;
