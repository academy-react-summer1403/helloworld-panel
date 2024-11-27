import React from "react";

import angular from "../../../../assets/images/Courses/angular.svg";
import noImage from "../../../../assets/images/Courses/noImage.png";
import { MoreVertical, Edit, Trash } from "react-feather";
import {
  Badge,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  // pictureAddress
} from "reactstrap";
import { Link } from "react-router-dom";

function CourseMap({ title, describe, accept, author }) {
  return (
    <tr>
      <td>
        {/* <img
          className="me-75 rounded-circle"
          src={pictureAddress && pictureAddress.includes("classapi.sepehracademy.ir") ? pictureAddress : noImage}
          
          alt="angular"
          height="26"
          width="26"
        /> */}
        <span className="align-middle fw-bold">{author}</span>
      </td>
      <td>
        <span className="align-middle fw-bold">{title}</span>
      </td>
      <td>{describe}</td>
      <td>
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
          <DropdownMenu>
            <DropdownItem href="/" onClick={(e) => e.preventDefault()}>
              <Edit className="me-50" size={15} />{" "}
              <span className="align-middle">تایید</span>
            </DropdownItem>
            <DropdownItem href="/" onClick={(e) => e.preventDefault()}>
              <Trash className="me-50" size={15} />{" "}
              <span className="align-middle">حذف</span>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </td>
    </tr>
  );
}

export default CourseMap;
