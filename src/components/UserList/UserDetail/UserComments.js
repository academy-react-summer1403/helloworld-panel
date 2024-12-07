// ** Custom Components

// console.log("ress",getAllCoursesAdmin)

// ** Images

import avatar1 from "../../../assets/images/Courses/avatar-s-5.jpg";
import avatar2 from "../../../assets/images/Courses/avatar-s-6.jpg";
import avatar3 from "../../../assets/images/Courses/avatar-s-7.jpg";
import noImage from "../../../assets/images/Courses/noImage.png";
// ** Icons Imports
import { MoreVertical, Edit, Trash , FileText, Eye } from "react-feather";

import { useState } from "react";
import { useEffect } from "react";

// ** Reactstrap Imports
import {
  Table,
  Badge,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";
import CourseMap from "./CourseMap";
import { convertDateToPersian } from "../../../utility/date-helper.utils";
import { Fragment } from "react";
import { getComments } from "../../../core/services/api/User";
import { decComment } from "../../../core/services/api/AllComment";
import { accComment } from "../../../core/services/api/AllComment";
import { delComment } from "../../../core/services/api/AllComment";
import { getRepComnt } from "../../../core/services/api/AllComment";
import CommntModal from "./comModal";

const avatarGroupData1 = [
  {
    title: "Lilian",
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26,
  },
  {
    title: "Alberto",
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26,
  },
  {
    title: "Bruce",
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26,
  },
];

const avatarGroupData2 = [
  {
    title: "Diana",
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26,
  },
  {
    title: "Rey",
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26,
  },
  {
    title: "James",
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26,
  },
];

const avatarGroupData3 = [
  {
    title: "Lee",
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26,
  },
  {
    title: "Mario",
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26,
  },
  {
    title: "Oswald",
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26,
  },
];

const avatarGroupData4 = [
  {
    title: "Christie",
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26,
  },
  {
    title: "Barnes",
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26,
  },
  {
    title: "Arthur",
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26,
  },
];

const UserComments = ({ id }) => {
  const [allComment, setAllComment] = useState([]);
  const [comModal, setComModal] = useState(false);
  const [repCom, setRepCom] = useState([]);
  const [crsid, setCrsid] = useState(null);
  const [cmntid, setCmntid] = useState(null);
  const [describe, setDescribe] = useState("");
  const [dataComment, setdataComment] = useState();


  const getComeent = async (id) => {
    try {
      const userComent = await getComments(id);
      console.log("comenttttttt:", userComent);
      setdataComment(userComent);
    } catch (error) {
      throw new Error("ERROR: ", error);
    }
  };
  useEffect(() => {
    getComeent(id);
  }, []);



  // const accept = acceptB;

  

  const handleDeclineComment = async (e) => {
    try {
      const res = await decComment(e);
    } catch (error) {
      console.error("ERROR: ", error);
    }
  };

  const handleAcceptComment = async (e) => {
    try {
      const res = await accComment(e);
    } catch (error) {
      console.error("ERROR: ", error);
    }
  };

  const handleDeleteComment = async (e) => {
    try {
      const res = await delComment(e);
    } catch (error) {
      console.error("ERROR: ", error);
    }
  };

  useEffect(() => {
    if (crsid && cmntid) {
      handleReplyComment(crsid, cmntid);
    }
  }, [crsid, cmntid,repCom]);

  const handleReplyComment = async (crsid, cmntid) => {
    try {
      const res = await getRepComnt(crsid, cmntid);
      setRepCom(res.data);
    } catch (error) {
      console.error("ERROR: ", error);
    }
  };

  useEffect(() => {
    getComments( dataComment);
  }, []);

  useEffect(() => {
    handleAcceptComment();
  }, []);

  useEffect(() => {
    handleDeleteComment();
  }, []);

  useEffect(() => {
    handleDeclineComment();
  }, []);

  return (
    <Fragment>
    <Table responsive>
      <thead>
        <tr>
          <th>نام دوره</th>
          <th> عنوان </th>
          <th> متن کامنت</th>
          <th> وضعیت</th>
          <th> پاسخ</th>
          <th> اقدام</th>
        </tr>
      </thead>
      <tbody>
        <>
          {dataComment?.data?.comments &&
            dataComment?.data?.comments.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    {/* <img
                      className="me-75 rounded-circle"
                      src={item?.tumbImageAddress ? item?.tumbImageAddress : noImage}
                      alt="angular"
                      height="26"
                      width="26"
                    /> */}
                    <span className="align-middle fw-bold">
                      {item?.courseTitle}
                    </span>
                  </td>
                  <td>
                    <span className="align-middle fw-bold">
                      {item?.commentTitle}
                    </span>
                  </td>
                  <td>
                    <span className="align-middle fw-bold">
                      {item?.describe}
                    </span>
                  </td>
                  <td className="px-0 text-center">
                  {item.accept === true ? (
                    <Badge pill color="light-success" className="me-1">
                      تایید شده
                    </Badge>
                  ) : (
                    <Badge pill color="light-warning" className="me-1">
                      تایید نشده
                    </Badge>
                  )}
                </td>

                <td
                  style={{
                    maxWidth: "20px",
                    minWidth: "20px",
                  }}
                >
                  {item.replyCount > 0 ? (
                    <Eye
                    style={{ width: "18px", height: "16px" }}
                    onClick={() => {
                      setComModal(!comModal);
                      setCrsid(item.courseId);
                      setCmntid(item.commentId);
                      // handleReplyComment(item.courseId, item.commentId);
                      setDescribe(item.describe);
                    }}
                  />
                  ) : (
                    "-"
                  )}
                </td>

                <td>
                  <UncontrolledDropdown direction="start">
                    <DropdownToggle
                      className="icon-btn hide-arrow"
                      color="transparent"
                      size="sm"
                      caret
                    >
                      <MoreVertical size={15} />
                    </DropdownToggle>
                    {item.accept === false ? (
                      <DropdownMenu className="d-flex flex-column p-0  ">
                        <DropdownItem
                          onClick={(e) => {
                            handleAcceptComment(item.commentId);
                          }}
                        >
                          <FileText className="me-50" size={15} />{" "}
                          <span className="align-middle">تایید</span>
                        </DropdownItem>

                        <DropdownItem
                          onClick={(e) => {
                            // handleDeleteComment(item.commentId);
                          }}
                        >
                          <Trash className="me-50" size={15} />{" "}
                          <span className="align-middle">حذف</span>
                        </DropdownItem>
                      </DropdownMenu>
                    ) : (
                      <DropdownMenu className="d-flex flex-column p-0 ">
                        <DropdownItem
                          onClick={(e) => {
                            handleDeclineComment(item.commentId);
                          }}
                        >
                          <Edit className="me-50" size={15} />{" "}
                          <span className="align-middle">رد کردن</span>
                        </DropdownItem>
                        {/* <DropdownItem
                          onClick={(e) => {
                            handleDeleteComment(item.commentId);
                          }}
                        >
                          <Trash className="me-50" size={15} />{" "}
                          <span className="align-middle">حذف</span>
                        </DropdownItem> */}
                        {/* <DropdownItem
                          onClick={() => {
                            // setRepShow(!repShow);
                            // addReplyComment();
                            // setCrsid(item.courseId);
                            // setCmntid(item.commentId);
                          }}
                        >
                          <Trash className="me-50" size={15} />{" "}
                          <span className="align-middle">پاسخ</span>
                        </DropdownItem> */}
                      </DropdownMenu>
                    )}
                  </UncontrolledDropdown>
                </td>
                </tr>

                //   <CourseMap
                //     key={index}
                //     tumbImageAddress={item.tumbImageAddress}
                //     title={item.title}
                //     describe={item.describe}
                //     courseId={item.courseId}
                //     fName={item.fName}
                //     lName={item.lName}
                //     id={item.id}

                //     isActive={item.isActive}
                //     isExpire={item.isExpire}
                //     levelName={item.levelName}
                //     typeName={item.typeName}

                //   />
              );
            })}
        </>
      </tbody>
    </Table>
     <CommntModal
     setComModal={setComModal}
     comModal={comModal}
     repCom={repCom}
     handleAcceptComment={handleAcceptComment}
     handleDeclineComment={handleDeclineComment}
     handleDeleteComment={handleDeleteComment}
     describe={describe}
   />
   </Fragment>
  );
};

export default UserComments;
