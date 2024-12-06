// ** Custom Components

// console.log("ress",getAllCoursesAdmin)

// ** Images

import avatar1 from "../../../assets/images/Courses/avatar-s-5.jpg";
import avatar2 from "../../../assets/images/Courses/avatar-s-6.jpg";
import avatar3 from "../../../assets/images/Courses/avatar-s-7.jpg";
import noImage from "../../../assets/images/Courses/noImage.png";
// ** Icons Imports
import { MoreVertical, Edit, Trash } from "react-feather";

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

const UserComments = ({ dataComment }) => {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>نام دوره</th>
          <th> عنوان </th>
          <th> متن کامنت</th>
          <th> وضعیت</th>
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
                  <td
                    className=" p-0"
                    onClick={
                      item.accept === true
                        ? () => rejCmnt(item.id ? item.id : item.commentId)
                        : () => accptCmnt(item.id ? item.id : item.commentId)
                    }
                  >
                    <Badge
                      pill
                      color={item.accept ? "light-primary" : "light-danger"}
                      className="me-1"
                    >
                      {item.accept === true ? "تایید شده" : " تایید نشده"}
                    </Badge>
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
                          href="/"
                          onClick={(e) => e.preventDefault()}
                        >
                          <Edit className="me-50" size={15} />{" "}
                          <span className="align-middle">Edit</span>
                        </DropdownItem>
                        <DropdownItem
                          href="/"
                          onClick={(e) => e.preventDefault()}
                        >
                          <Trash className="me-50" size={15} />{" "}
                          <span className="align-middle">Delete</span>
                        </DropdownItem>
                      </DropdownMenu>
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
  );
};

export default UserComments;
