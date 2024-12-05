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
  classRoomName,
  capacity,
  buildingName,
  insertDate,
}) {
  return (
    <tr>
      <td>
        <span className="align-middle fw-bold">{classRoomName}</span>
      </td>
      <td>
        <td>{capacity && faNumber(capacity)}</td>
      </td>
     
      <td>
        <td>{buildingName }</td>
      </td>

      <td>
        <td>{insertDate && convertDateToPersian(insertDate) }</td>
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
