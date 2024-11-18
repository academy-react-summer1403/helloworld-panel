import { Fragment } from "react";
import { Link } from "react-router-dom";
// import Avatar from "@components/common/avatar";
import noImage from "../../assets/images/blogs/news.png"
// ** Custom Components

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
import { convertDateToPersian } from "../../utility/date-helper.utils";

// ** Vars
const invoiceStatusObj = {
  Sent: { color: "light-secondary", icon: Send },
  Paid: { color: "light-success", icon: CheckCircle },
  Draft: { color: "light-primary", icon: Save },
  Downloaded: { color: "light-info", icon: ArrowDownCircle },
  "Past Due": { color: "light-danger", icon: Info },
  "Partial Payment": { color: "light-warning", icon: PieChart },
};

// ** Table columns
export const columns = [
  {
    name: " نویسنده",
    sortable: true,
    width: "350px",
    sortField: "title",
    cell: (row) => (
      <div className="d-flex justify-content-left align-items-center gap-1">
        <img
          src={
            row.tumbImageAddress ? row.tumbImageAddress : noImage
          }
          className="course-column-image"
        />
        <div className="d-flex flex-column">
          <Link
            to={`/Blogs/${row.id}`}
            className="course-column-truncate blog-column-truncate text-body"
          >
            <span className="fw-bolder text-primary">{row.addUserFullName}</span>
          </Link>
        </div>
      </div>
    ),
  },

  {
    sortable: true,
    name: "  عنوان",
    sortable: true,
    minWidth: "250px",
    sortField: "teacherName",
    sortName: "teacherName",
    cell: (row) => <span>{row.title}</span>,
  },

  {
    sortable: true,
    name: " تعداد بازدید",
    sortable: true,
    minWidth: "150px",
    sortField: "teacherName",
    sortName: "teacherName",
    cell: (row) => <span>{row.currentView}</span>,
  },
  {
    sortable: true,
    name: "  دسته‌بندی",
    sortable: true,
    minWidth: "200px",
    sortField: "teacherName",
    sortName: "teacherName",
    cell: (row) => <span>{row.newsCatregoryName}</span>,
  },

  {
    sortable: true,
    name: "وضعیت",
    width: "120px",
    sortField: "isActive",
    cell: (row) => (
      <Badge
        color={
          row.isActive === true
            ? "light-success"
            : row.isActive === false
            ? "light-danger"
            : "light-warning"
        }
      >
        {row.isActive ? "فعال" : "غیر فعال"}
      </Badge>
    ),
  },
  // {
  //   name: " تاریخ درج",
  //   sortable: true,
  //   width: "160px",
  //   sortField: "insertDate",
  //   cell: (row) => {
  //     const formattedUpdateDate = convertDateToPersian(row.insertDate);

  //     return (
  //       <div className="d-flex justify-content-left align-items-center gap-1">
  //         <div className="d-flex flex-column">
  //           <span>{formattedUpdateDate}</span>
  //         </div>
  //       </div>
  //     );
  //   },
  // },

  // {
  //   name: "آخرین آپدیت",
  //   sortable: true,
  //   width: "160px",
  //   sortField: "updateDate",
  //   cell: (row) => {
  //     const formattedUpdateDate = convertDateToPersian(row.updateDate);

  //     return (
  //       <div className="d-flex justify-content-left align-items-center gap-1">
  //         <div className="d-flex flex-column">
  //           <span>{formattedUpdateDate}</span>
  //         </div>
  //       </div>
  //     );
  //   },
  // },
  {
    name: " جزئیات",
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
              <span className="align-middle">ویرایش</span>
            </DropdownItem>
            <DropdownItem
              tag="a"
              href="/"
              className="w-100"
              onClick={(e) => e.preventDefault()}
            >
              <Trash size={14} className="me-50" />
              <span className="align-middle">حذف</span>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    ),
  },
];
