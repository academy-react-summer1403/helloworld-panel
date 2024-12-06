import avatar1 from "../../assets/images/Courses/avatar-s-5.jpg";
import avatar2 from "../../assets/images/Courses/avatar-s-6.jpg";
import avatar3 from "../../assets/images/Courses/avatar-s-7.jpg";
import { Link } from "react-router-dom";

import CourseMap from "./CourseMap";

// ** Reactstrap Imports
import {
  Table,
  Badge,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Button,
} from "reactstrap";

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

const Courses = ({ data }) => {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>نام </th>
          <th> توضیحات</th>
          <th> آدرس آیکون</th>
          <th> اقدام</th>
        </tr>
      </thead>
      <tbody>
        <>
          {data?.data &&
            data?.data.map((item, index) => {
              return (
                <CourseMap
                  key={index}
                  techName={item.techName}
                  describe={item.describe}
                  iconAddress={item.iconAddress}
                  id={item.id}
                />
              );
            })}
          
        </>
      </tbody>
    </Table>
  );
};

export default Courses;
