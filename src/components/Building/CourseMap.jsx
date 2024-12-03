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
  buildingName,
  workDate,
  floor,
  active,
}) {
  return (
    <tr>
      <td>
        <span className="align-middle fw-bold">{buildingName}</span>
      </td>
      <td>
        <td>{workDate && convertDateToPersian(workDate)}</td>
      </td>
     
      <td>
        <td>{floor && faNumber(floor)}</td>
      </td>

      <td>
        {active ? (
          <Badge pill color="light-success" className="me-1 m-0.5">
            فعال
          </Badge>
        ) : (
            <Badge pill color="light-danger" className="me-1 m-0.5">
            غیر فعال
          </Badge>        )}
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
