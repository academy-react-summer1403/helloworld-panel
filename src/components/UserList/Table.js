// ** React Imports
import { Fragment, useState, useEffect } from 'react'

// ** Invoice List Sidebar
import Sidebar from './Sidebar'

// ** Table Columns
import { columns } from './columns'

// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux'

// ** Third Party Components
import Select from 'react-select'
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import { ChevronDown, Share, Printer, FileText, File, Grid, Copy } from 'react-feather'

// ** Utils
import { selectThemeColors } from '@utils'

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
  UncontrolledDropdown
} from 'reactstrap'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'

import getUserList from '../../core/services/api/User'

// ** Table Header
const CustomHeader = ({  toggleSidebar, handlePerPage, rowsPerPage, handleFilter, searchTerm }) => {
  // ** Converts table to CSV
 

  // ** Downloads CSV
  function downloadCSV(array) {
    const link = document.createElement('a')
    let csv = convertArrayOfObjectsToCSV(array)
    if (csv === null) return

    const filename = 'export.csv'

    if (!csv.match(/^data:text\/csv/i)) {
      csv = `data:text/csv;charset=utf-8,${csv}`
    }

    link.setAttribute('href', encodeURI(csv))
    link.setAttribute('download', filename)
    link.click()
  }
  return (
    <div className='invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75'>
      <Row>
        <Col xl='6' className='d-flex align-items-center p-0'>
          <div className='d-flex align-items-center w-100'>
            <label htmlFor='rows-per-page'>Show</label>
            <Input
              className='mx-50'
              type='select'
              id='rows-per-page'
              value={rowsPerPage}
              onChange={handlePerPage}
              style={{ width: '5rem' }}
            >
              <option value='10'>10</option>
              <option value='25'>25</option>
              <option value='50'>50</option>
            </Input>
            <label htmlFor='rows-per-page'>Entries</label>
          </div>
        </Col>
        <Col
          xl='6'
          className='d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1'
        >
          <div className='d-flex align-items-center mb-sm-0 mb-1 me-1'>
            <label className='mb-0' htmlFor='search-invoice'>
              Search:
            </label>
            <Input
              id='search-invoice'
              className='ms-50 w-100'
              type='text'
              value={searchTerm}
              onChange={e => handleFilter(e.target.value)}
            />
          </div>

          <div className='d-flex align-items-center table-header-actions'>
            <UncontrolledDropdown className='me-1'>
              <DropdownToggle color='secondary' caret outline>
                <Share className='font-small-4 me-50' />
                <span className='align-middle'>Export</span>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem className='w-100'>
                  <Printer className='font-small-4 me-50' />
                  <span className='align-middle'>Print</span>
                </DropdownItem>
                <DropdownItem className='w-100' >
                  <FileText className='font-small-4 me-50' />
                  <span className='align-middle'>CSV</span>
                </DropdownItem>
                <DropdownItem className='w-100'>
                  <Grid className='font-small-4 me-50' />
                  <span className='align-middle'>Excel</span>
                </DropdownItem>
                <DropdownItem className='w-100'>
                  <File className='font-small-4 me-50' />
                  <span className='align-middle'>PDF</span>
                </DropdownItem>
                <DropdownItem className='w-100'>
                  <Copy className='font-small-4 me-50' />
                  <span className='align-middle'>Copy</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <Button className='add-new-user' color='primary' onClick={toggleSidebar}>
              Add New User
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  )
}

const UsersList = () => {
  const [SortingCol, setSortingCol] = useState("desc");
  const [sortColumn, setSortColumn] = useState("id");
  const [currentPage, setCurrentPage] = useState(1);
  const [RowsOfPage, setRowsOfPage] = useState(5);

  const [searchText, setSearchText] = useState();
  const [PageNumber, setPageNumber] = useState(0);
  const [perPage, setPerPage] = useState(5);
  const [total, setTotal] = useState();
  const [userList, setUserList] = useState([]);
  const [roleId, setRolesId] = useState([]);
  const [sortType, setSortType] = useState();
  const [query, setQuery] = useState();

  const getList = async () => {
    const params = {
      currentPage,
      PageNumber,
      RowsOfPage,
      SortingCol,
      sortType,
      query,
    };
    const user = await getUserList(params);
    console.log("user:", user);

    setUserList(user.data.listUser);
    setTotal(user.data.totalCount);
    setRolesId(user.data.roles);
  };

  useEffect(() => {
    getList();
  }, []);

  const handleFilter = (val) => {
    textTimeOut(() => {
      setSearchText(val);
    }, 800);
  };

  const handlePerPage = (e) => {
    setRowsOfPage(parseInt(e.target.value));
  };

  const handlePagination = (page) => {
    setCurrentPage(page.selected + 1);
  };

  const CustomPagination = () => {
    const count = Number((total / RowsOfPage).toFixed(0));

    return (
      <ReactPaginate
        nextLabel=""
        breakLabel="..."
        previousLabel=""
        pageCount={count || 1}
        activeClassName="active"
        breakClassName="page-item"
        pageClassName={"page-item"}
        breakLinkClassName="page-link"
        nextLinkClassName={"page-link"}
        pageLinkClassName={"page-link"}
        nextClassName={"page-item next"}
        previousLinkClassName={"page-link"}
        previousClassName={"page-item prev"}
        onPageChange={(page) => handlePagination(page)}
        forcePage={currentPage !== 0 ? currentPage - 1 : 0}
        containerClassName={"pagination react-paginate justify-content-end p-1"}
      />
    );
  };

  
  return (
    <div className="invoice-list-wrapper">
      <Card>
        <Fragment>
          <Row>
            <Col xs={12}>
            

              <div className="invoice-list-dataTable react-dataTable">
                <DataTable
                  noHeader
                  pagination
                  sortServer
                  paginationServer
                  subHeader={true}
                  columns={columns}
                  responsive={true}    
                  sortIcon={<ChevronDown />}
                  className="react-dataTable"
                  defaultSortField="invoiceId"
                  paginationDefaultPage={currentPage}
                  paginationComponent={CustomPagination}
                  subHeaderComponent={
                    <CustomHeader
                      handleFilter={handleFilter}
                      handlePerPage={handlePerPage}
                    />
                  }
                />
              </div>
            </Col>
          </Row>
        </Fragment>
      </Card>
    </div>
  );
};

export default UsersList;
