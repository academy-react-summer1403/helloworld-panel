import React from "react";
import { Link } from "react-router-dom";


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
import { convertDateToPersian } from "../../utility/date-helper.utils";
import { faNumber } from "../../utility/FaNumber";

function CourseMap({ techName, describe, iconAddress, insertDate , id }) {
  return (
    <tr>
      <td>
        <span className="align-middle fw-bold">{techName}</span>
      </td>
      <td >
        <td >{describe}</td>
      </td>

      <td>
        <td>{iconAddress}</td>
      </td>

      <td>
        <UncontrolledDropdown>
       <Button  tag={Link} to={`/technology/edit/${id}`} >ویرایش</Button>
        </UncontrolledDropdown>
      </td>
    </tr>
  );
}

export default CourseMap;
