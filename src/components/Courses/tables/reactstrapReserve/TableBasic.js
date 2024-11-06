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

// ** Reactstrap Imports
import {
  Table,
  Badge,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
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

const Courses = () => {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>نام دوره</th>
          <th>نوع دوره</th>
          <th>سطح دوره</th>
          <th>وضعیت فعال بودن</th>
          <th>وضعیت موجود بودن</th>
          <th>اقدام</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img
              className="me-75"
              src={angular}
              alt="angular"
              height="20"
              width="20"
            />
            <span className="align-middle fw-bold">Angular Project</span>
          </td>
          <td>
            <span className="align-middle fw-bold">Angular Project</span>
          </td>
          <td>Peter Charles</td>
          <td>
            <Badge pill color="light-primary" className="me-1">
              Active
            </Badge>{" "}
          </td>
          <td>
            <Badge pill color="light-primary" className="me-1">
              Active
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
                <DropdownItem href="/" onClick={(e) => e.preventDefault()}>
                  <Edit className="me-50" size={15} />{" "}
                  <span className="align-middle">Edit</span>
                </DropdownItem>
                <DropdownItem href="/" onClick={(e) => e.preventDefault()}>
                  <Trash className="me-50" size={15} />{" "}
                  <span className="align-middle">Delete</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </td>
        </tr>

        {/* <tr>
          <td>
            <img
              className="me-75"
              src={vuejs}
              alt="vuejs"
              height="20"
              width="20"
            />
            <span className="align-middle fw-bold">Vuejs Project</span>
          </td>
          <td>Jack Obes</td>
          <td>
            <AvatarGroup data={avatarGroupData3} />
          </td>
          <td>
            <Badge pill color="light-info" className="me-1">
              Scheduled
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
                <DropdownItem href="/" onClick={(e) => e.preventDefault()}>
                  <Edit className="me-50" size={15} />{" "}
                  <span className="align-middle">Edit</span>
                </DropdownItem>
                <DropdownItem href="/" onClick={(e) => e.preventDefault()}>
                  <Trash className="me-50" size={15} />{" "}
                  <span className="align-middle">Delete</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </td>
        </tr>
        <tr>
          <td>
            <img
              className="me-75"
              src={bootstrap}
              alt="bootstrap"
              height="20"
              width="20"
            />
            <span className="align-middle fw-bold">Bootstrap Project</span>
          </td>
          <td>Jerry Milton</td>
          <td>
            <AvatarGroup data={avatarGroupData4} />
          </td>
          <td>
            <Badge pill color="light-warning" className="me-1">
              Pending
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
                <DropdownItem href="/" onClick={(e) => e.preventDefault()}>
                  <Edit className="me-50" size={15} />{" "}
                  <span className="align-middle">Edit</span>
                </DropdownItem>
                <DropdownItem href="/" onClick={(e) => e.preventDefault()}>
                  <Trash className="me-50" size={15} />{" "}
                  <span className="align-middle">Delete</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </td>
        </tr> */}
      </tbody>
    </Table>
  );
};

export default Courses;
