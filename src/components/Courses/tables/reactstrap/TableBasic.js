// ** Custom Components
import AvatarGroup from "../../../common/avatar-group";

// console.log("ress",getAllCoursesAdmin)

// ** Images
import react from "../../../../assets/images/Courses/react.svg";
import vuejs from "../../../../assets/images/Courses/vuejs.svg";
import angular from "../../../../assets/images/Courses/angular.svg";
import bootstrap from "../../../../assets/images/Courses/bootstrap.svg";
import avatar1 from "../../../../assets/images/Courses/avatar-s-5.jpg";
import avatar2 from "../../../../assets/images/Courses/avatar-s-6.jpg";
import avatar3 from "../../../../assets/images/Courses/avatar-s-7.jpg";

// ** Icons Imports
import { MoreVertical, Edit, Trash } from "react-feather";

import CourseMap from "./CourseMap";

// ** Reactstrap Imports
import {
  Table,
  Badge,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";
import ReactPaginate from "react-paginate";

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

const Courses = ({ allCourses }) => {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>نام دوره</th>
          <th>مدرس دوره</th>
          <th>نوع دوره</th>
          <th>سطح دوره</th>
          <th>وضعیت فعال بودن</th>
          <th>وضعیت ثبت نام</th>
          <th>اقدام</th>
        </tr>
      </thead>
      <tbody>
        <>
          {allCourses?.map((item, index) => {
            return (
              <CourseMap
                key={index}
                courseId={item.courseId}
                isActive={item.isActive}
                fullName={item.fullName}
                isExpire={item.isExpire}
                isdelete={item.isdelete}
                levelName={item.levelName}
                typeName={item.typeName}
                tumbImageAddress={item.tumbImageAddress}
                title={item.title}
              />
            );
          })}
        </>
      </tbody>

    </Table>
  );
};

export default Courses;
