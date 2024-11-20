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
} from "reactstrap";
import { Link } from "react-router-dom";

function CourseMap({
  title,
  typeName,
  levelName,
  tumbImageAddress,
  fullName,
  isActive,
  isExpire,
  courseId
}) {

  return (
    <tr>
      <td>
        <img
          className="me-75 rounded-circle"
          src={tumbImageAddress && tumbImageAddress.includes("classapi.sepehracademy.ir") ? tumbImageAddress : noImage}
          
          alt="angular"
          height="26"
          width="26"
        />
        <span className="align-middle fw-bold">{title}</span>
      </td>
      <td>
        <span className="align-middle fw-bold">{fullName}</span>
      </td>
      <td>
        <span className="align-middle fw-bold">{typeName}</span>
      </td>
      <td>{levelName}</td>
      <td>
        {isActive ? (
          <Badge pill color="light-success" className="me-1 m-0.5">
            فعال
          </Badge>
        ) : (
            <Badge pill color="light-danger" className="me-1 m-0.5">
            غیر فعال
          </Badge>        )}
      </td>
      <td>
        {isExpire ? (
          <Badge pill color="light-danger" className="me-1 m-0.5">
            منقضی شده
          </Badge>
        ) : (
            <Badge pill color="light-success" className="me-1 m-0.5">
             مجاز
          </Badge>        )}
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
            <DropdownItem tag={Link} to={`/course/${courseId}`}>
              <Edit className="me-50" size={15} />{" "}
              <span className="align-middle">جزئیات</span>
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
