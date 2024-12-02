import angular from "../../../assets/images/Courses/angular.svg";

// ** Icons Imports
import { MoreVertical, Edit, Trash, FileText, Eye } from "react-feather";
import CommntModal from "./comModal";

// ** Reactstrap Imports
import {
  Table,
  Badge,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";

import { getCommentList } from "../../../core/services/api/AllComment";
import { decComment } from "../../../core/services/api/AllComment";
import { accComment } from "../../../core/services/api/AllComment";
import { delComment } from "../../../core/services/api/AllComment";
import { getRepComnt } from "../../../core/services/api/AllComment";
import { useState } from "react";
import { useEffect } from "react";
import { Fragment } from "react";

const Courses = ({ acceptB,Rows }) => {
  const [allComment, setAllComment] = useState([]);
  const [comModal, setComModal] = useState(false);
  const [repCom, setRepCom] = useState([]);
  const [crsid, setCrsid] = useState(null);
  const [cmntid, setCmntid] = useState(null);
  const [describe, setDescribe] = useState("");

  console.log("repCom",repCom)

  const accept = acceptB;

  const getAllCommentReport = async () => {
    const params = {
      RowsOfPage: Rows,
    };
    const report = await getCommentList(params);
    setAllComment(report.data.comments);
  };

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
  }, [crsid, cmntid]);

  const handleReplyComment = async (crsid, cmntid) => {
    try {
      const res = await getRepComnt(crsid, cmntid);
      setRepCom(res.data);
    } catch (error) {
      console.error("ERROR: ", error);
    }
  };

  useEffect(() => {
    getAllCommentReport(accept, allComment,Rows);
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

  console.log("object", allComment);


  return (
    <Fragment>
      <Table responsive>
        <thead>
          <tr>
            <th>نام کاربر</th>
            <th>عنوان کامنت</th>
            <th>نمایش کامنت</th>
            <th>دوره</th>
            <th>وضعیت</th>
            <th>پاسخ</th>
            <th>اقدام</th>
          </tr>
        </thead>

        {allComment.map((item, index) => {
          return (
            <tbody key={index}>
              <tr>
                <td
                  style={{
                    maxWidth: "140px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  <span className="align-middle fw-bold">
                    {item.userFullName}
                  </span>
                </td>
                <td style={{ maxWidth: "140px" }}>
                  <span className="align-middle fw-bold">
                    {item.commentTitle}
                  </span>
                </td>
                <td style={{ maxWidth: "200px" }}>{item.describe}</td>
                <td>
                  <td style={{ maxWidth: "160px" }}>{item.courseTitle}</td>
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
                        <DropdownItem
                          onClick={(e) => {
                            handleDeleteComment(item.commentId);
                          }}
                        >
                          <Trash className="me-50" size={15} />{" "}
                          <span className="align-middle">حذف</span>
                        </DropdownItem>
                        <DropdownItem
                          onClick={() => {
                            // setRepShow(!repShow);
                            // addReplyComment();
                            // setCrsid(item.courseId);
                            // setCmntid(item.commentId);
                          }}
                        >
                          <Trash className="me-50" size={15} />{" "}
                          <span className="align-middle">پاسخ</span>
                        </DropdownItem>
                      </DropdownMenu>
                    )}
                  </UncontrolledDropdown>
                </td>
              </tr>
            </tbody>
          );
        })}
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

export default Courses;
