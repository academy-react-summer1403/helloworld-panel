// ** React Imports
import { useState, Fragment } from "react";
import { faNumber } from "../../../utility/FaNumber";



// ** Reactstrap Imports
import {
  Progress,
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
import xdLabel from "@src/assets/images/icons/brands/xd-label.png";
import vueLabel from "@src/assets/images/icons/brands/vue-label.png";
import htmlLabel from "@src/assets/images/icons/brands/html-label.png";
import reactLabel from "@src/assets/images/icons/brands/react-label.png";
import sketchLabel from "@src/assets/images/icons/brands/sketch-label.png";

// ** Utils
import { selectThemeColors } from "@utils";
import { convertDateToPersian } from "../../../utility/date-helper.utils";

// ** Styles
import "@styles/react/libs/react-select/_react-select.scss";
// import UserAddRole from "./UserAddRole";

const projectsArr = [
  {
    progress: 60,
    hours: "210:30h",
    progressColor: "info",
    totalTasks: "233/240",
    subtitle: "React Project",
    title: "BGC eCommerce App",
    img: reactLabel,
  },
  {
    hours: "89h",
    progress: 15,
    totalTasks: "9/50",
    progressColor: "danger",
    subtitle: "UI/UX Project",
    title: "Falcon Logo Design",
    img: xdLabel,
  },
  {
    progress: 90,
    hours: "129:45h",
    totalTasks: "100/190",
    progressColor: "success",
    subtitle: "Vuejs Project",
    title: "Dashboard Design",
    img: vueLabel,
  },
  {
    hours: "45h",
    progress: 49,
    totalTasks: "12/86",
    progressColor: "warning",
    subtitle: "iPhone Project",
    title: "Foodista mobile app",
    img: sketchLabel,
  },

  {
    progress: 73,
    hours: "67:10h",
    totalTasks: "234/378",
    progressColor: "info",
    subtitle: "React Project",
    title: "Dojo React Project",
    img: reactLabel,
  },
  {
    progress: 81,
    hours: "108:39h",
    totalTasks: "264/537",
    title: "HTML Project",
    progressColor: "success",
    subtitle: "Crypto Website",
    img: htmlLabel,
  },
  {
    progress: 78,
    hours: "88:19h",
    totalTasks: "214/627",
    progressColor: "success",
    subtitle: "Vuejs Project",
    title: "Vue Admin template",
    img: vueLabel,
  },
];
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

const UserInfoCard = ({ data, setdata }) => {
  console.log("userinfocard:", data);
  // const MySwal = withReactContent(Swal);
  // const handleConfirmCancel = () => {
  //   return MySwal.fire({
  //     title: "آیا از تغییرات خود مطمئن هستید؟",
  //     // text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonText: " Yes",
  //     customClass: {
  //       confirmButton: "btn btn-primary",
  //       cancelButton: "btn btn-danger ms-1",
  //     },
  //     buttonsStyling: false,
  //   }).then(async function (result) {
  //     if (result.value) {
  //       MySwal.fire({
  //         icon: "success",
  //         title: "پاک شد",
  //         // text: 'Your file has been deleted.',
  //         customClass: {
  //           confirmButton: "btn btn-success",
  //         },
  //       });
  //     } else if (result.dismiss === MySwal.DismissReason.cancel) {
  //       MySwal.fire({
  //         title: "لغو گردید",
  //         // text: 'Your imaginary file is safe :)',
  //         icon: "error",
  //         customClass: {
  //           confirmButton: "btn btn-success",
  //         },
  //       });
  //     }
  //   });
  // };

  // const handleConfirmText = () => {
  //   return MySwal.fire({
  //     title: "آیا از ثبت ویرایش مطمئن هستید؟",
  //     // text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonText: "Yes",
  //     customClass: {
  //       confirmButton: "btn btn-primary",
  //       cancelButton: "btn btn-outline-danger ms-1",
  //     },
  //     buttonsStyling: false,
  //   }).then(function (result) {
  //     if (result.value) {
  //       MySwal.fire({
  //         icon: "success",
  //         title: "با موفقیت ثبت شد.",
  //         // text: 'Your file has been deleted.',
  //         customClass: {
  //           confirmButton: "btn btn-success",
  //         },
  //       });
  //     }
  //   });
  // };
  // ** State
  const [showModal, setShowModal] = useState(false);

  // const toggleModal = (id) => {
  //   if (modal !== id) {
  //     setModal(id);
  //   } else {
  //     setModal(null);
  //   }
  // };
  // const handleAddRoleClick = () => {
  //   toggleModal(data?.data?.id);
  // };

  const [show, setShow] = useState(false);

  const renderUserImage = () => {
    if (data !== null && data?.data?.currentPictureAddress !== "Not-set") {
      return (
        <img
          height="110"
          width="110"
          alt="user-avatar"
          src={data?.data?.currentPictureAddress}
          className="img-fluid rounded mt-3 mb-2"
        />
      );
    } else {
      return (
        <Avatar
          initials
          color="light-success"
          className="rounded mt-3 mb-2"
          content={`${data?.fName || "کاربر"} ${data?.lName || ""}`}
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

  const renderRoleName = (roleName) => {
    if (roleName === " Teacher  ") {
      return "استاد";
    } else if (roleName === "Student") {
      return "دانشجو";
    } else if (roleName === "Admin") {
      return "ادمین";
    } else if (roleName === "Administrator") {
      return "مدیر";
    }
  };

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

  return (
    <Fragment>
      <Card>
        <CardBody>
          <div className="user-avatar-section">
            <div className="d-flex align-items-center flex-column">
              {renderUserImage()}
              <div className="d-flex flex-column align-items-center text-center">
                <div className="user-info">
                  <h4>{`${data?.data?.fName || "کاربر"} ${
                    data?.data?.lName || ""
                  }`}</h4>
                  <div class="d-flex flex-wrap justify-content-center gap-1 mt-1 ">
                    <Button
                      type="submit"
                      className="me-1"
                      color="primary"
                      onClick={() => setShowModal(true)}
                    >
                      دسترسی
                    </Button>
                    {showModal && (
                      <UserAddRole
                        // modal={modal}
                        setShowModal={setShowModal}
                        showModal={showModal}
                        id={data?.data?.id}
                        userName={data?.data?.fname + " " + data?.data?.lname}
                        // toggleModal={toggleModal}
                        userRoles={data?.data?.roleName}
                        setdata={setdata}
                      />
                    )}

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
              <div className="ms-75">
                <h4 className="mb-2">چند درصد از پروفایل شما کامل شد؟</h4>
                {/* <Label
                          className="position-absolute top-50 start-10 translate-middle"
                          for="chart"
                        >
                          {data?.data?.profileCompletionPercentage}%
                        </Label> */}
                <small className="d-flex justify-content-center  ">{`${
                  data?.data?.profileCompletionPercentage &&
                  faNumber(
                    data?.data?.profileCompletionPercentage.toString(),
                    ","
                  )
                }%`}</small>
                <Progress
                  value={data?.data?.profileCompletionPercentage}
                  style={{ height: "6px" }}
                  className={` w-100 progress-bar-${data?.data?.progressColor}`}
                />
                {/* <Chart
        id="chart"
        options={options.options}
        series={[data?.data?.profileCompletionPercentage]}
        type={options.type}
        height={options.height}
        width={options.width}
      />                */}
                {/* <small>{data?.data?.profileCompletionPercentage}%</small> */}
              </div>
            </div>
          </div>
          <h4 className="fw-bolder border-bottom pb-50 mb-1">جزئیات کاربر</h4>
          <div className="info-container">
            {data !== null ? (
              <ul className="list-unstyled">
                <li className="mb-75">
                  <span className="fw-bolder me-25">نام کاربر:</span>
                  <span>{data?.data?.userName}</span>
                </li>
                <li className="mb-75">
                  <span className="fw-bolder me-25">ایمیل:</span>
                  <span>{data?.data?.gmail}</span>
                </li>
                <li className="mb-75">
                  <span className="fw-bolder me-25">تاریخ تولد:</span>
                  <span>
                    {data?.data?.birthDay &&
                      convertDateToPersian(data?.data?.birthDay)}
                  </span>
                </li>
                <li className="mb-75">
                  <span className="fw-bolder me-25">وضعیت:</span>
                  <Badge
                    className="text-capitalize"
                    color={statusColors[data?.data?.active]}
                  >
                    {data?.data?.active ? "فعال" : "غیر فعال"}
                  </Badge>
                </li>
                <li className="mb-75">
                  <span className="fw-bolder me-25">تایید دو مرحله‌ایی :</span>
                  <Badge
                    className="text-capitalize"
                    color={statusColors[data?.data?.twoStepAuth]}
                  >
                    {data?.data?.twoStepAuth ? "فعال" : "غیر فعال"}
                  </Badge>
                </li>
                <li className="mb-75">
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
                </li>
                <li className="mb-75">
                  <span className="fw-bolder me-25">شماره همراه:</span>
                  <span>
                    {data?.data?.phoneNumber &&
                      faNumber(data?.data?.phoneNumber.toString())}
                  </span>
                </li>
                <li className="mb-75">
                  {/* <span className='fw-bolder me-25'>Contact:</span> */}
                  {/* <span>{selectedUser.contact}</span> */}
                </li>
                <li className="mb-75">
                  <span className="fw-bolder me-25">زبان:</span>
                  <span>فارسی</span>
                </li>
                {/* <li className='mb-75'>
                  <span className='fw-bolder me-25'>Country:</span>
                  <span>England</span>
                </li> */}
              </ul>
            ) : null}
          </div>
          <div className="d-flex justify-content-center pt-2">
           
            <Button
              className="ms-1"
              color="danger"
              outline
              onClick={handleConfirmCancel}
            >
              حذف کاربر
            </Button>
          </div>        
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
