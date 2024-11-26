import React from 'react'

import { useState, Fragment } from "react";

import {
  Row,
  Col,
  Card,
  Form,
  CardBody,
  Button,
  Badge,
  Modal,
  Input,
  Label,
  ModalBody,
  ModalHeader,
} from "reactstrap";
import Swal from "sweetalert2";
import Select from "react-select";
import withReactContent from "sweetalert2-react-content";


const DeleteUser = ({setShowModal}) => {
        const MySwal = withReactContent(Swal);
  const handleConfirmCancel = () => {
    return MySwal.fire({
      title: "آیا از تغییرات خود مطمئن هستید؟",
      // text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: " Yes",
      customClass: {
        confirmButton: "btn btn-primary",
        cancelButton: "btn btn-danger ms-1",
      },
      buttonsStyling: false,
    }).then(async function (result) {
      if (result.value) {
        MySwal.fire({
          icon: "success",
          title: "پاک شد",
          // text: 'Your file has been deleted.',
          customClass: {
            confirmButton: "btn btn-success",
          },
        });
      } else if (result.dismiss === MySwal.DismissReason.cancel) {
        MySwal.fire({
          title: "لغو گردید",
          // text: 'Your imaginary file is safe :)',
          icon: "error",
          customClass: {
            confirmButton: "btn btn-success",
          },
        });
      }
    });
  };

  <Button
  className="ms-1"
  color="danger"
  outline
  onClick={handleConfirmCancel}
>
  حذف کاربر
</Button>
}

export default DeleteUser
