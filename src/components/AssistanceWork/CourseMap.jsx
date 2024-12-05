import React from "react";
import { Link } from "react-router-dom";



import {
  Database,
  Edit2,
  Settings,
  Slack,
  User,
  Eye,
  Send,
  Copy,
  Save,
  Info,
  PieChart,
  Download,
  TrendingUp,
  CheckCircle,
  ArrowDownCircle,
  MoreVertical, Edit,
} from "react-feather";

// import angular from "../../../../assets/images/Courses/angular.svg";
import noImage from "../../assets/images/Courses/noImage.png";
import {
  Badge,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Button,
} from "reactstrap";
import { convertDateToPersian } from "../../utility/date-helper.utils";

function CourseMap({
  id,
  courseName,
  inserDate,
  workDate,
  assistanceName,
  workDescribe,
}) {
  return (
    <tr>
      <td>
        <span className="align-middle fw-bold">{courseName}</span>
      </td>
      <td>
        <td>{inserDate && convertDateToPersian(inserDate)}</td>
      </td>
      <td>
        <td>{workDate && convertDateToPersian(workDate)}</td>
      </td>
      <td>
        <td>{assistanceName}</td>
      </td>

      <td>
        <td>{workDescribe}</td>
      </td>

      <td>
      {/* <UncontrolledDropdown>
          <DropdownToggle tag="span">
            <MoreVertical size={17} className="cursor-pointer" />
          </DropdownToggle>
          <DropdownMenu end>
            <DropdownItem tag={Link} to={`/assistancework/${id}`} className="w-100">
              <Info size={14} className="me-50" />
              <span className="align-middle">جزئیات</span>
            </DropdownItem>
            <DropdownItem
              tag={Link}
              to={`/user/edit/${id}`}
              className="w-100"
            >
              <Edit size={14} className="me-50" />
              <span className="align-middle"> ویرایش</span>
            </DropdownItem>

            <DropdownItem className="w-100 d-block">
              <Trash size={14} className="me-50" />

              <span className="align-middle "> حذف</span>
              <DeleteModal id={row.id} />
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown> */}
        <UncontrolledDropdown>
          <Button  tag={Link}
              to={`/assistancework/edit/${id}`}  >ویرایش</Button>
        </UncontrolledDropdown>
      </td>
    </tr>
  );
}

export default CourseMap;
