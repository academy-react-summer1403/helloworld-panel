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

function CourseMap({
  courseName,
  inserDate,
  workDate,
  assistanceName,
  workDescribe,
}) {
  return (
    <tr>
      <td>
        <span className="align-middle fw-bold">{courseName}</span>
      </td>
      <td>
        <td>{inserDate && convertDateToPersian(inserDate)}</td>
      </td>
      <td>
        <td>{workDate && convertDateToPersian(workDate)}</td>
      </td>
      <td>
        <td>{assistanceName}</td>
      </td>

      <td>
        <td>{workDescribe}</td>
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
