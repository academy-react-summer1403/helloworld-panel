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
} from "reactstrap";
import { Link } from "react-router-dom";
import { convertDateToPersian } from "../../utility/date-helper.utils";

function CourseMap({
  categoryName,
  image,
  googleDescribe,
  googleTitle,
  insertDate,
  
}) {

  

  return (
    <tr>
      <td>
        <img
          className="me-75 rounded-circle"
          src={image && image.includes("classapi.sepehracademy.ir") ? image : noImage}
          
          alt="angular"
          height="26"
          width="26"
        />
        <span className="align-middle fw-bold">{categoryName}</span>
      </td>
      <td>
        <span className="align-middle fw-bold">{googleDescribe}</span>
      </td>
      <td>
        <span className="align-middle fw-bold">{googleTitle}</span>
      </td>
      <td>{insertDate && convertDateToPersian(insertDate) }</td>
     
    
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
            <DropdownItem tag={Link} >
              <Edit className="me-50" size={15} />{" "}
              <span >ویرایش</span>
            </DropdownItem>
           
          </DropdownMenu>
        </UncontrolledDropdown>
      </td>
    </tr>
  );
}

export default CourseMap;
