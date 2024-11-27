
import CourseMap from "./CourseMap";

// ** Reactstrap Imports
import {
  Table,
} from "reactstrap";

const Courses = ({ dataComment }) => {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>نام کاربر</th>
          <th>عنوان کامنت</th>
          <th>متن کامنت</th>
          <th>وضعیت تایید</th>
          <th>اقدام</th>
        </tr>
      </thead>
      <tbody>
        <>
          {dataComment?.data.map((item, index) => {
            return (
              <CourseMap
                key={index}
                describe={item.describe}
                accept={item.accept}
                title={item.title}
                author={item.author}
                pictureAddress={item.pictureAddress}
              />
            );
          })}
        </>
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
