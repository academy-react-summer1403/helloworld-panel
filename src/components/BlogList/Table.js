// ** React Imports
import { Fragment, useState, useEffect } from "react";

// ** Invoice List Sidebar
// import Sidebar from "./Sidebar";

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

import getBlogList from "../../core/services/api/Blogs";
import AddBlog from "./AddBlog";

// import AddUser from "./AddUser";

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
  const [allCourses, setAllCourses] = useState([]);

  // const getAllCourseReport = async () => {
  //   const params = {
  //     RowsOfPage: sortLenght,
  //     Query: searchQuery,
  //   };
  //   const report = await getUserList(params);
  //   setAllCourses(report.data.courseDtos);
  // };

  // useEffect(() => {
  //   getAllCourseReport();
  // }, []);

  // useEffect(() => {
  //   getAllCourseReport();
  // }, [sortLenght]);

  // console.log("allCourses:", allCourses);

  // useEffect(() => {
  //   prism.highlightAll();
  // });

  // useEffect(() => {
  //   getAllCourseReport();
  // }, [searchQuery]);

  function downloadCSV(array) {
    const link = document.createElement("a");
    let csv = convertArrayOfObjectsToCSV(array);
    if (csv === null) return;

    const filename = "export.csv";

    if (!csv.match(/^data:text\/csv/i)) {
      csv = `data:text/csv;charset=utf-8,${csv}`;
    }

    link.setAttribute("href", encodeURI(csv));
    link.setAttribute("download", filename);
    link.click();
  }
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
            </Input>
          </div>
        </Col>
        <Col
          xl="6"
          className="d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1"
        >
          <div className="d-flex align-items-center mb-sm-0 mb-1 me-1">
            {/* <label className="mb-0" htmlFor="search-invoice">
              جست و جو
            </label> */}
            <Input
            placeholder="جست و جوی مقاله"
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
              افزودن مقاله
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
  const [perPage, setPerPage] = useState(5);
  const [total, setTotal] = useState();
  const [userList, setUserList] = useState([]);
  const [roleId, setRolesId] = useState([]);
  const [sortType, setSortType] = useState();
  const [query, setQuery] = useState();
  const [newsList, setNewsList] = useState([]);
  const [searchQuery, setSearchQuery] = useState();

  const [sortLenght, setSortLenght] = useState(10);
  const [activeRole, setActiveRole] = useState();


  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const [isActive, setIsActive] = useState({
    value: null,
    label: "انتخاب کنید...",
  });

const isActiveOptions = [
    { value: null, label: "انتخاب کنید..." },
    { value: true, label: "فعال" },
    { value: false, label: "غیرفعال" },
  ];

  const getList = async () => {
    const params = {
      currentPage,
      PageNumber,
      RowsOfPage,
      SortingCol,
      RowsOfPage: sortLenght,
      isActive: activeRole,
      query: searchQuery || undefined,

    };
    const courses = await getBlogList(params);
    console.log("courses:",courses)
    setNewsList(courses.data.news);
    setTotal(courses.data.totalCount);
  };

  useEffect(() => {
    getList();
  }, []); 

  useEffect(() => {
    getList();
  }, [sortLenght]);

  useEffect(() => {
    getList();
  }, [activeRole]);

  useEffect(() => {
    getList();
  }, [searchQuery]);
  const handleFilter = (val) => {
    textTimeOut(() => {
      setSearchText(val);
    }, 800);
  };

  const handlePerPage = (e) => {
    setRowsOfPage(parseInt(e.target.value));
  };

  // const handlePagination = (page) => {
  //   setCurrentPage(page.selected + 1);
  // };

 
  // const CustomPagination = () => {
  //   const count = Number((total / RowsOfPage).toFixed(0));

  //   return (
  //     <ReactPaginate
  //     nextLabel=""
  //     breakLabel="..."
  //     previousLabel=""
  //     pageCount={count || 1}
  //     activeClassName="active"
  //     breakClassName="page-item"
  //     pageClassName={"page-item"}
  //     breakLinkClassName="page-link"
  //     nextLinkClassName={"page-link"}
  //     pageLinkClassName={"page-link"}
  //     nextClassName={"page-item next"}
  //     previousLinkClassName={"page-link"}
  //     previousClassName={"page-item prev"}
  //     onPageChange={(page) => handlePagination(page)}
  //     forcePage={currentPage !== 0 ? currentPage - 1 : 0}
  //     containerClassName={"pagination react-paginate justify-content-end p-1"}
  //     />
  //   );
  // };

  const dataToRender = () => {
    if (newsList.length > 0) {
      return newsList;
    } else if (total === 0) {
      return [];
    } else {
      return newsList?.slice(0, RowsOfPage);
    }
  };
  const handleSort = (column, sortDirection) => {
    setSort(sortDirection);
    setSortColumn(column.sortField);
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
                  setActiveRole(data.value)

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
                  // pagination
                  sortServer
                  // paginationServer
                  subHeader={true}
                  columns={columns}
                  onSort={handleSort}
                  data={dataToRender()}
                  responsive={true}
                  sortIcon={<ChevronDown />}
                  className="react-dataTable"
                  defaultSortField="invoiceId"
                  // paginationDefaultPage={currentPage}
                  // paginationComponent={CustomPagination}
                  subHeaderComponent={
                    <CustomHeader
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
          <AddBlog
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
