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

function CourseMap({ statusName, describe, statusNumber, id }) {
  return (
    <tr>
      <td>
        <span className="align-middle fw-bold">{statusName}</span>
      </td>
      <td>
        <td>{describe}</td>
      </td>

      <td>
        <td>{statusNumber && faNumber(statusNumber)}</td>
      </td>

      <td>
        <UncontrolledDropdown>
          <Button tag={Link} to={`/status/edit/${id}`}>
            ویرایش
          </Button>
        </UncontrolledDropdown>
      </td>
    </tr>
  );
}

export default CourseMap;
