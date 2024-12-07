// ** React Imports
import { Fragment, useState, useEffect } from "react";

// ** Invoice List Sidebar
import Sidebar from "./Sidebar";

// ** Table Columns
import { columns } from "./columns";

// ** Store & Actions
import { useDispatch, useSelector } from "react-redux";

// ** Third Party Components
import Select from "react-select";
import ReactPaginate from "react-paginate";
import DataTable from "react-data-table-component";
import {
  ChevronDown,
  Share,
  Printer,
  FileText,
  File,
  Grid,
  Copy,
} from "react-feather";
import prism from "prismjs";

// ** Utils
import { selectThemeColors } from "@utils";

// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  Input,
  Label,
  Button,
  CardBody,
  CardTitle,
  CardHeader,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";

// ** Styles
import "@styles/react/libs/react-select/_react-select.scss";
import "@styles/react/libs/tables/react-dataTable-component.scss";

import getUserList from "../../core/services/api/User";
import AddUser from "./AddUser";
import { Value } from "sass";

// ** Table Header
const CustomHeader = ({
  toggleSidebar,
  handlePerPage,
  rowsPerPage,
  handleFilter,
  searchTerm,
  setSortLenght,
  setSearchQuery,
  searchQuery,
}) => {
  return (
    <div className="invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75">
      <Row>
        <Col xl="6" className="d-flex align-items-center p-0">
          {/* <div className='d-flex align-items-center w-100'>
            <label htmlFor='rows-per-page'>نمایش</label>
           
          </div> */}
          <div className="d-flex align-items-center w-30">
            <label htmlFor="rows-per-page">نمایش:</label>

            <Input
              type="select"
              id="rows-per-page"
              // value={rowsPerPage}
              // onChange={handlePerPage}
              className="form-control ms-50 pe-3"
            >
              <option
                onClick={() => {
                  setSortLenght(10);
                }}
                value="10"
              >
                10
              </option>
              <option
                onClick={() => {
                  setSortLenght(25);
                }}
                value="25"
              >
                25
              </option>
              <option
                onClick={() => {
                  setSortLenght(50);
                }}
                value="50"
              >
                50
              </option>
              <option
                onClick={() => {
                  setSortLenght(100);
                }}
                value="100"
              >
                100
              </option>
            </Input>
          </div>
        </Col>
        <Col
          xl="6"
          className="d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1"
        >
          <div className="d-flex align-items-center mb-sm-0 mb-1 me-1">
            <Input
              placeholder="جست و جوی کاربر"
              id="search-invoice"
              className="ms-50 w-100"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="d-flex align-items-center table-header-actions">
            <Button
              className="add-new-user"
              color="primary"
              onClick={toggleSidebar}
            >
              افزودن کاربر
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

const UsersList = () => {
  const [SortingCol, setSortingCol] = useState("desc");
  const [sortColumn, setSortColumn] = useState("id");
  const [currentPage, setCurrentPage] = useState(1);
  const [RowsOfPage, setRowsOfPage] = useState(5);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [searchText, setSearchText] = useState();
  const [PageNumber, setPageNumber] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [totalCount, setTotalCount] = useState(0);

  const [total, setTotal] = useState();
  const [userList, setUserList] = useState([]);
  const [sortType, setSortType] = useState();
  const [query, setQuery] = useState();
  const [sortLenght, setSortLenght] = useState(10);
  const [searchQuery, setSearchQuery] = useState();
  const [roleId, setRoleId] = useState(1);
  const [activeRole, setActiveRole] = useState();
  const [page, setPage] = useState(1);

  const handlePageChange = (value) => {
    // console.log("value", value);
    setPage(value + 1);
  };

  console.log("roleId tst:", roleId);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const [currentRole, setCurrentRole] = useState({
    value: null,
    label: "انتخاب کنید...",
  });

  const [isActive, setIsActive] = useState({
    value: null,
    label: "انتخاب کنید...",
  });

  const roleOptions = [
    { value: null, label: "انتخاب کنید..." },
    { value: "1", label: "ادمین" },
    { value: "2", label: "استاد" },
    { value: "5", label: "دانشجو" },
  ];
  const isActiveOptions = [
    { value: null, label: "انتخاب کنید..." },
    { value: true, label: "فعال" },
    { value: false, label: "غیرفعال" },
  ];

  const getList = async () => {
    const params = {
      roleId: roleId,
      rowsPerPage,
      currentPage,
      PageNumber:page,
      RowsOfPage: sortLenght,
      SortingCol,
      sortType,
      IsActiveUser: activeRole,
      query: searchQuery || undefined,
    };
    const user = await getUserList(params);
    console.log("user:", user);

    setUserList(user.data.listUser);
    setTotal(user.data.totalCount);
    setTotalCount(user.data.totalCount);
  };
  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    getList();
  }, [sortLenght, searchQuery, roleId, activeRole, rowsPerPage,page]);

  const handleFilter = (val) => {
    textTimeOut(() => {
      setSearchText(val);
    }, 800);
  };

  const handlePerPage = (e) => {
    const value = parseInt(e.currentTarget.value);

    setRowsPerPage(value);
    console.log(value);
  };

  const CustomPagination = () => {
    const count = Math.ceil(userList?.totalCount / rowsPerPage);

    return (
      <ReactPaginate
        previousLabel={""}
        nextLabel={""}
        pageCount={count || 1}
        activeClassName="active"
        forcePage={currentPage > 0 ? currentPage - 1 : 0}
        onPageChange={(page) => handlePagination(page)}
        pageClassName={"page-item"}
        nextLinkClassName={"page-link"}
        nextClassName={"page-item next"}
        previousClassName={"page-item prev"}
        previousLinkClassName={"page-link"}
        pageLinkClassName={"page-link"}
        containerClassName={
          "pagination react-paginate justify-content-center my-2 pe-1"
        }
      />
    );
  };
  // const handlePagination = (page) => {
  //   setCurrentPage(page.selected + 1);
  // };

  // const CustomPagination = () => {
  //   const count = Number((total / RowsOfPage).toFixed(0));

  //   return (
  //     <ReactPaginate
  //       nextLabel=""
  //       breakLabel="..."
  //       previousLabel=""
  //       pageCount={count || 1}
  //       activeClassName="active"
  //       breakClassName="page-item"
  //       pageClassName={"page-item"}
  //       breakLinkClassName="page-link"
  //       nextLinkClassName={"page-link"}
  //       pageLinkClassName={"page-link"}
  //       nextClassName={"page-item next"}
  //       previousLinkClassName={"page-link"}
  //       previousClassName={"page-item prev"}
  //       onPageChange={(page) => handlePagination(page)}
  //       forcePage={currentPage !== 0 ? currentPage - 1 : 0}
  //       containerClassName={"pagination react-paginate justify-content-end p-1"}
  //     />
  //   );
  // };

  const dataToRender = () => {
    if (userList.length > 0) {
      return userList;
    } else if (total === 0) {
      return [];
    } else {
      return userList?.slice(0, RowsOfPage);
    }
  };

  return (
    <div className="invoice-list-wrapper">
      <Fragment>
        <Card>
          <CardHeader>
            <CardTitle tag="h4">فیلتر</CardTitle>
          </CardHeader>
          <CardBody>
            <Row>
              <Col md="4">
                <Label for="role-select">نقش</Label>
                <Select
                  isClearable={false}
                  value={currentRole}
                  options={roleOptions}
                  className="react-select"
                  classNamePrefix="select"
                  theme={selectThemeColors}
                  onChange={(data) => {
                    setCurrentRole(data);
                    setRoleId(data.value);
                    // handleFilterUserList;
                  }}
                />
              </Col>
              <Col md="4">
                <Label for="role-select">وضعیت</Label>
                <Select
                  isClearable={false}
                  value={isActive}
                  options={isActiveOptions}
                  className="react-select"
                  classNamePrefix="select"
                  theme={selectThemeColors}
                  onChange={(data) => {
                    setIsActive(data);
                    setActiveRole(data.value);
                    // setActiveRole()

                    // handleFilterUserList;
                  }}
                />
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Fragment>
      <Card>
        <Fragment>
          <Row>
            <Col xs={12}>
              <div className="invoice-list-dataTable react-dataTable">
                <DataTable
                  noHeader
                  
                  sortServer
                  subHeader={true}
                  columns={columns}
                  data={dataToRender()}
                  responsive={true}
                  sortIcon={<ChevronDown />}
                  className="react-dataTable"
                  defaultSortField="invoiceId"
                  // paginationDefaultPage={currentPage}
                  // paginationComponent={CustomPagination}
                  subHeaderComponent={
                    <CustomHeader
                      rowsPerPage={rowsPerPage}
                      setSearchQuery={setSearchQuery}
                      searchQuery={searchQuery}
                      setSortLenght={setSortLenght}
                      handleFilter={handleFilter}
                      handlePerPage={handlePerPage}
                      toggleSidebar={toggleSidebar}
                    />
                  }
                />
              </div>
            </Col>

          </Row>
          <div
              style={{
                maxWidth: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
                marginBottom: "5px",
              }}
            >
              <ReactPaginate
                previousLabel={""}
                nextLabel={""}
                breakLabel="..."
                pageCount={Math.ceil(totalCount / sortLenght)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={2}
                activeClassName="active"
                // forcePage={currentPage !== 0 ? currentPage - 1 : 0}
                forcePage={page !== 0 ? page - 1 : 0}
                onPageChange={(value) => {
                  // console.log("selected", value);
                  handlePageChange(value.selected);
                }}
                pageClassName="page-item"
                breakClassName="page-item"
                nextLinkClassName="page-link"
                pageLinkClassName="page-link"
                breakLinkClassName="page-link"
                previousLinkClassName="page-link"
                nextClassName="page-item next-item"
                previousClassName="page-item prev-item"
                containerClassName={
                  "pagination react-paginate separated-pagination pagination-sm justify-content-end pe-1 mt-1"
                }
              />
            </div>
          <AddUser
            open={sidebarOpen}
            toggleSidebar={toggleSidebar}
            setSidebarOpen={setSidebarOpen}
          />
        </Fragment>
      </Card>
    </div>
  );
};

export default UsersList;
