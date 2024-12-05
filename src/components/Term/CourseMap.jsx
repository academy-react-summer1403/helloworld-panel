import React from "react";

// import angular from "../../../../assets/images/Courses/angular.svg";
import noImage from "../../assets/images/Courses/noImage.png";
import { MoreVertical, Edit, Trash } from "react-feather";
import {
  Badge,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import { convertDateToPersian } from "../../utility/date-helper.utils";
import { faNumber } from "../../utility/FaNumber";

function CourseMap({
  termName,
  startDate,
  endDate,
  expire,
  departmentName,
}) {
  return (
    <tr>
      <td>
        <span className="align-middle fw-bold">{termName}</span>
      </td>
      <td>
        <td>{startDate && convertDateToPersian(startDate) }</td>
      </td>

      <td>
        <td>{endDate && convertDateToPersian(endDate) }</td>
      </td>
     
      <td> 
                  {expire ? (
          <Badge pill color="light-danger" className="me-1 m-0.5">
            منقضی شده
          </Badge>
        ) : (
            <Badge pill color="light-success" className="me-1 m-0.5">
              منقضی نشده
          </Badge>        )}
                  </td>

     

      <td>
        <td>{departmentName }</td>
      </td>

    

      <td>
        <UncontrolledDropdown>
          <Button>ویرایش</Button>
        </UncontrolledDropdown>
      </td>
    </tr>
  );
}

export default CourseMap;
