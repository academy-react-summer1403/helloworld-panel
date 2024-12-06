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
import EditTechnology from "./EditTechnology/EditTechnology";

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
  
        <EditTechnology id={id}/>
        </UncontrolledDropdown>
      </td>
    </tr>
  );
}

export default CourseMap;
