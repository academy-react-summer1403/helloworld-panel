import { Fragment } from "react";
import { Link } from "react-router-dom";

// ** Custom Components
import Avatar from "@components/common/avatar";

// ** Reactstrap Imports
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledTooltip,
  UncontrolledDropdown,
} from "reactstrap";

// ** Third Party Components
import {
  Database,
  Edit2,
  Settings,
  Slack,
  User,
  Eye,
  Send,
  Edit,
  Copy,
  Save,
  Info,
  Trash,
  PieChart,
  Download,
  TrendingUp,
  CheckCircle,
  MoreVertical,
  ArrowDownCircle,
} from "react-feather";


// ** Vars
const invoiceStatusObj = {
  Sent: { color: "light-secondary", icon: Send },
  Paid: { color: "light-success", icon: CheckCircle },
  Draft: { color: "light-primary", icon: Save },
  Downloaded: { color: "light-info", icon: ArrowDownCircle },
  "Past Due": { color: "light-danger", icon: Info },
  "Partial Payment": { color: "light-warning", icon: PieChart },
};

const renderUser = (row) => {
  if (row.pictureAddress) {
    return (
      <Avatar
        className="me-1"
        img={row.pictureAddress}
        width="32"
        height="32"
      />
    );
  } else {
    return (
      <Avatar
        initials
        className="me-1"
        color={"light-success"}
        content={row.fname + " " + row.lname || " "}
      />
    );
  }
};
const renderRole = (row) => {
  const roleObj = {
    Administrator: {
      class: "text-success",
      icon: Edit2,
    },
    Teacher: {
      class: "text-info",
      icon: Database,
    },
    Student: {
      class: "text-primary",
      icon: User,
    },
    auther: {
      class: "text-warning",
      icon: Settings,
    },
    admin: {
      class: "text-danger",
      icon: Slack,
    },
  };

  const Icon = roleObj[row.userRoles] ? roleObj[row.userRoles].icon : Edit2;

  const renderRoleName = () => {
    if (row.userRoles?.includes("Administrator")) {
      return "مدیر";
    } else if (row.userRoles?.includes("Teacher")) {
      return "استاد";
    } else if (row.userRoles?.includes("Student")) {
      return "دانشجو";
    } else {
      return " ...";
    }
  };

  return (
    <span className="text-truncate text-capitalize align-middle">
      <Icon
        size={18}
        className={`${
          roleObj[row.userRoles] ? roleObj[row.userRoles].class : ""
        } me-50`}
      />
      {renderRoleName()}
    </span>
  );
};

const statusObj = {
  True: "light-success",
  False: "light-warning",
};
// ** Table columns
export const columns = [
  {
    name: "کاربر",
    sortable: true,
    width: "450px",
    sortField: "fname",
    selector: (row) => row.fullName,
    cell: (row) => (
      <div className="d-flex justify-content-left align-items-center">
        {renderUser(row)}
        <div className="d-flex flex-column">
          <Link
            to={`/users/${row.id}`}
            className="user_name text-truncate text-body"
          >
            <span className="fw-bolder">
              {row.fname && row.lname ? row.fname + " " + row.lname : " کاربر"}
            </span>
          </Link>
          <small className="text-truncate text-muted mb-0">{row.gmail}</small>
        </div>
      </div>
    ),
  },
  {
    name: " تلفن همراه",
    width: "250px",
    sortable: true,
    sortField: "phoneNumber",
    cell: (row) => <span className="text-capitalize">{row.phoneNumber}</span>,
  },
  {
    name: "نقش",
    sortable: true,
    width: "155px",
    sortField: "role",
    selector: (row) => row.role,
    cell: (row) => renderRole(row),
  },
  {
    name: "وضعیت",
    width: "120px",
    sortable: true,
    sortField: "active",
    selector: (row) => row.active,
    cell: (row) => (
      <Badge className="text-capitalize" color={statusObj[row.active]} pill>
        {row.active ? "فعال" : "غیرفعال"}
      </Badge>
    ),
  },

  {
    name: " سایر",
    minWidth: "110px",
    cell: (row) => (
      <div className="column-action d-flex align-items-center">
        <UncontrolledDropdown>
          <DropdownToggle tag="span">
            <MoreVertical size={17} className="cursor-pointer" />
          </DropdownToggle>
          <DropdownMenu end>
            <DropdownItem tag={Link}  className="w-100">
              <Info size={14} className="me-50" />
              <span className="align-middle">جزئیات</span>
            </DropdownItem>
            <DropdownItem tag={Link}  className="w-100">
              <Edit size={14} className="me-50" />
              <span className="align-middle"> ویرایش</span>
            </DropdownItem>
            <DropdownItem className="w-100" onClick={(e) => e.preventDefault()}>
              <Trash size={14} className="me-50" />
              <span className="align-middle"> حذف</span>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    ),
  },
];
