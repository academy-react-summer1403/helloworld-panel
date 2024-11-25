// ** React Imports
import { useState, Fragment } from "react";

// ** Reactstrap Imports
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

import noImage from "../../../assets/images/Courses/noImage.png";

// ** Third Party Components
import Swal from "sweetalert2";
import Select from "react-select";
import { Check, Briefcase, X } from "react-feather";
import { useForm, Controller } from "react-hook-form";
import withReactContent from "sweetalert2-react-content";
import toast from "react-hot-toast";
import Chart from "react-apexcharts";

// ** Custom Components
import Avatar from "@components/common/avatar";

// ** Utils
import { selectThemeColors } from "@utils";

// ** Styles
import "@styles/react/libs/react-select/_react-select.scss";
// ** Chart Options

const options = {
  type: "radialBar",
  series: [54.4],
  height: 30,
  width: 50,
  options: {
    grid: {
      show: false,
      padding: {
        left: -15,
        right: -15,
        top: -12,
        bottom: -15,
      },
    },
    colors: ["#e01010"],
    plotOptions: {
      radialBar: {
        hollow: {
          size: "35%",
        },
        track: {
          background: "#ebe9f1",
          strokeWidth: "50%",
        },
        dataLabels: {
          showOn: "always",
          name: {
            show: false,
          },
          value: {
            show: false,
            fontSize: "10px",
          },
        },
      },
    },
    stroke: {
      lineCap: "round",
    },
  },
};

const roleColors = {
  editor: "light-info",
  admin: "light-danger",
  author: "light-warning",
  maintainer: "light-success",
  subscriber: "light-primary",
};

const statusColors = {
  active: "light-success",
  pending: "light-warning",
  inactive: "light-secondary",
};

const statusOptions = [
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" },
  { value: "suspended", label: "Suspended" },
];

const countryOptions = [
  { value: "uk", label: "UK" },
  { value: "usa", label: "USA" },
  { value: "france", label: "France" },
  { value: "russia", label: "Russia" },
  { value: "canada", label: "Canada" },
];

const languageOptions = [
  { value: "english", label: "English" },
  { value: "spanish", label: "Spanish" },
  { value: "french", label: "French" },
  { value: "german", label: "German" },
  { value: "dutch", label: "Dutch" },
];

const UserInfoCard = ({ data }) => {
  console.log("dataaaaaaaaaaaaaaa", data);

  const [show, setShow] = useState(false);

  const renderUserImage = () => {
    if (!!data && data?.data?.imageAddress.includes("classapi.sepehracademy.ir")) {
      return (
        // <div>aloo</div>
        <img
          height="150"
          width="150"
          alt="user-avatar"
          src={data?.data?.imageAddress ? data?.data?.imageAddress : noImage}
          className="img-fluid rounded mt-3 mb-2"
          style={{width:"100px",height:"100px"}}
        />
      );
    } else {
      return (
      // <div>aloo222</div>
        <Avatar
          initials
          color="light-success"
          className="rounded mt-3 mb-2"
          content={`${data?.teacherName || "teacherName"}`}
          contentStyles={{
            borderRadius: 0,
            fontSize: "calc(48px)",
            width: "100%",
            height: "100%",
          }}
          style={{
            height: "110px",
            width: "110px",
          }}
        />
      );
    }
  };

  // const renderRoleName = (roleName) => {
  //   if (roleName === " Teacher  ") {
  //     return "استاد";
  //   } else if (roleName === "Student") {
  //     return "دانشجو";
  //   } else if (roleName === "Admin") {
  //     return "ادمین";
  //   } else if (roleName === "Administrator") {
  //     return "مدیر";
  //   }
  // };

  const onSubmit = (data) => {
    if (Object.values(data).every((field) => field.length > 0)) {
      setShow(false);
    } else {
      for (const key in data) {
        if (data[key].length === 0) {
          setError(key, {
            type: "manual",
          });
        }
      }
    }
  };

  return (
    <Fragment>
      <Card>
        <CardBody>
          <div className="user-avatar-section">
            <div className="d-flex align-items-center flex-column">
              {renderUserImage()}
              <div className="d-flex flex-column align-items-center text-center">
                <div className="user-info  ">
                  <h3 className="fw-bolder">{data?.data?.title}</h3>
                  <div className="d-flex flex-wrap justify-content-center gap-1 mt-1">
                    {/* {data?.roles.map((role) => (
                      <Badge
                        key={role.id}
                        color="light-secondary"
                        className="text-capitalize"
                      >
                        {renderRoleName(role.roleName)}
                      </Badge>
                    ))} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-around my-2 pt-75">
            <div className="d-flex align-items-start">
              {/* <Badge color="light-primary" className="rounded p-75">
                <Briefcase className="font-medium-2" />
              </Badge> */}
            </div>
          </div>
          <h4 className="fw-bolder border-bottom pb-50 mb-1">جزئیات دوره</h4>
          <div className="info-container">
            {data !== null ? (
              <ul className="list-unstyled">
                <li className="mb-75 mt-75">
                  <span className="fw-bolder me-25">نام مدرس:</span>
                  <span>{data?.data?.teacherName}</span>
                </li>
                <li className="mb-75 mt-75">
                  <span className="fw-bolder me-25">سطح:</span>
                  <span>{data?.data?.courseLevelName}</span>
                </li>
                {/* <li className="mb-75 mt-75">
                  <span className="fw-bolder me-25">قیمت:</span>
                  <span>{data?.data?.cost}</span>
                </li> */}

                <li className="mb-75">
                  <span className="fw-bolder me-25">وضعیت:</span>
                  <span>{data?.data?.courseStatusName}</span>
                </li>

                {/* <li className="mb-75">
                  <span className="fw-bolder me-25">تایید دو مرحله‌ایی :</span>
                  <Badge
                    className="text-capitalize"
                    color={statusColors[data?.data?.twoStepAuth]}
                  >
                    {data?.data?.twoStepAuth ? "فعال" : "غیر فعال"}
                  </Badge>
                </li> */}
                {/* <li className="mb-75">
                  <span className="fw-bolder me-25">نقش:</span>
                  <div className="d-flex flex-wrap user-details-roles-wrapper">
                    {data?.data?.roles.map((role) => (
                      <Badge
                        key={role.id}
                        color="light-secondary"
                        className="text-capitalize"
                      >
                        {renderRoleName(role.roleName)}
                      </Badge>
                    ))}
                  </div>
                </li> */}

                <li className="mb-75">
                  {/* <span className='fw-bolder me-25'>Contact:</span> */}
                  {/* <span>{selectedUser.contact}</span> */}
                </li>
                <li className="mb-75">
                  <span className="fw-bolder me-25">زبان:</span>
                  <span>فارسی</span>
                </li>

                <li className="mb-75">
                  <span className="fw-bolder me-25"> توضیحات:</span>
                  <div className="fw-bolder w-100 me-25"> </div>
                  <span>{data?.data?.describe}</span>
                </li>

                <li className="mb-75">
                  <span className="fw-bolder me-25">تعداد لایک ها:</span>
                  <span>{data?.data?.likeCount}</span>
                </li>
                <li className="mb-75">
                  <span className="fw-bolder me-25">تعداد کامنت های ثبت شده:</span>
                  <span>{data?.data?.commentCount}</span>
                </li>
                <li className="mb-75">
                  <span className="fw-bolder me-25">قیمت:</span>
                  <Badge
                    className="bg-success"
                    color={statusColors[data?.data?.courseStatusName]}
                  >
                    <span>{data?.data?.cost}</span>
                  </Badge>
                </li>
                {/* <li className='mb-75'>
                  <span className='fw-bolder me-25'>Country:</span>
                  <span>England</span>
                </li> */}
              </ul>
            ) : null}
          </div>
          {/* <div className="d-flex justify-content-center pt-2">
           
            <Button
              className="ms-1"
              color="danger"
              outline
              onClick={handleConfirmText}
            >
              حذف کاربر
            </Button>
          </div>         */}
        </CardBody>
      </Card>
      {/* <Modal
        isOpen={show}
        toggle={() => setShow(!show)}
        className="modal-dialog-centered modal-lg"
      >
        <ModalHeader
          className="bg-transparent"
          toggle={() => setShow(!show)}
        ></ModalHeader>
        <ModalBody className="px-sm-5 pt-50 pb-5">
          <div className="text-center mb-2">
            <h1 className="mb-1">Edit User Information</h1>
            <p>Updating user details will receive a privacy audit.</p>
          </div>
        </ModalBody>
      </Modal> */}
    </Fragment>
  );
};

export default UserInfoCard;
