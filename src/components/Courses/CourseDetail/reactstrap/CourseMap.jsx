import React from "react";

import angular from "../../../../assets/images/Courses/angular.svg";
import noImage from "../../../../assets/images/Courses/noImage.png";
import { MoreVertical, Edit, Trash, Delete } from "react-feather";
import {
  Badge,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  // pictureAddress
} from "reactstrap";
import { Link } from "react-router-dom";

import { acceptComment } from "../../../../core/services/api/Coueses/getCourseDeatil";
import { rejectComment } from "../../../../core/services/api/Coueses/getCourseDeatil";
import { deletComment } from "../../../../core/services/api/Coueses/getCourseDeatil";
import { useEffect } from "react";

function CourseMap({ title, describe, accept, author, id }) {
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
    <tr className="text-center">
      <td className=" px-0">
        {/* <img
          className="me-75 rounded-circle"
          src={pictureAddress && pictureAddress.includes("classapi.sepehracademy.ir") ? pictureAddress : noImage}
          
          alt="angular"
          height="26"
          width="26"
        /> */}
        <span className="align-middle fw-bold">{author}</span>
      </td>
      <td className=" px-0">
        <span className="align-middle fw-bold">{title}</span>
      </td>
      <td className="w-50 border">
        <span className="align-middle fw-bold">{describe}</span>
      </td>

      <td className=" px-0">
        {!accept ? (
          <Badge pill color="light-danger" className="me-1 m-0.5">
            در انتظار تایید
          </Badge>
        ) : (
          <Badge pill color="light-success" className="me-1 m-0.5">
            تایید شده
          </Badge>
        )}
      </td>
      <td className=" px-0">
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
            {accept ? (
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

            <DropdownItem onClick={() => delCmnt(id)}>
              <Delete className="me-50" size={15} />{" "}
              <span className="align-middle"> حذف </span>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </td>
    </tr>
  );
}

export default CourseMap;
