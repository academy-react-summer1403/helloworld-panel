import React from "react";

import angular from "../../../../assets/images/Courses/angular.svg";
import noImage from "../../../../assets/images/Courses/noImage.png";
import { MoreVertical, Edit, Trash, CheckCircle } from "react-feather";
import {
  Badge,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";
import { Link } from "react-router-dom";
import { delCourse } from "../../../../core/services/api/Coueses/getAllCoursesAdmin";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function CourseMap({
  title,
  typeName,
  levelName,
  tumbImageAddress,
  fullName,
  isActive,
  isExpire,
  isdelete,
  courseId,
}) {
  const [reFechGetCrs, setReFechGetCrs] = useState(1);

  const MySwal = withReactContent(Swal);

  const handleDeleteCourses = (A, I) => {
    // console.log("object", A , I);
    return MySwal.fire({
      title: "آیا مطمعن هستید؟",
      text: "البته امکان بازگشت نیز وجود دارد ",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: " بله ",
      cancelButtonText: " لغو ",

      customClass: {
        confirmButton: "btn btn-primary",
        cancelButton: "btn btn-outline-danger ms-1",
      },
      buttonsStyling: false,
    }).then(function (result) {
      if (result.value) {
        const deleteCourses = async () => {
          const data = {
            active: A,
            id: I,
          };
          const res = await delCourse(data);
          res.success;
          MySwal.fire({
            icon: "success",
            title: "موفقیت ",
            text: "عملیات با موفقیت انجام گردید",
            confirmButtonText: " باشه ",

            customClass: {
              confirmButton: "btn btn-success",
            },
          });
        };
        deleteCourses();
      } else if (result.dismiss === MySwal.DismissReason.cancel) {
        MySwal.fire({
          title: "لغو",
          text: "عملیات لغو شد :)",
          icon: "error",
          confirmButtonText: " باشه ",

          customClass: {
            confirmButton: "btn btn-success",
          },
        });
      }
    });
  };
  return (
    <tr>
      <td>
        <img
          className="me-75 rounded-circle"
          src={
            tumbImageAddress &&
            tumbImageAddress.includes("classapi.sepehracademy.ir")
              ? tumbImageAddress
              : noImage
          }
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
          </Badge>
        )}
      </td>
      <td>
        {isdelete ? (
          <Badge pill color="light-danger" className="me-1 m-0.5">
            منقضی شده
          </Badge>
        ) : (
          <Badge pill color="light-success" className="me-1 m-0.5">
            موجود
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
            <DropdownItem
              onClick={() =>
                handleDeleteCourses(isdelete ? false : true, courseId)
              }
            >
              <CheckCircle className="me-50" size={15} />{" "}
              <span className="align-middle">
                {isdelete ? "موجود کردن " : " حذف کردن "}
              </span>
            </DropdownItem>
            <DropdownItem tag={Link} to={`/course/${courseId}`}>
              <Edit className="me-50" size={15} /> <span>جزئیات</span>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </td>
    </tr>
  );
}

export default CourseMap;
