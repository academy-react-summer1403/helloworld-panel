// ** React Imports
import React, { Fragment, useEffect, useState } from "react";

// ** Reactstrap Imports
import { Row, Col, Input, Button } from "reactstrap";

// ** Third Party Components
import prism from "prismjs";

// ** Demo Components
import TableBasic from "./TableBasic";

// ** Custom Components
import Card from "../common/card-snippet";
// import Breadcrumbs from "../../../common/breadcrumbs";

// ** API

// import { getAllCourses } from "../../../../core/services/api/Coueses/getAllCoursesAdmin";

// ** Source Code
import { tableBasic } from "./TableSourceCode";

import { getStatus } from "../../core/services/api/Status";
import AddStatus from "./AddStatus/AddStatus";
// import AddCategory from "./AddCategory";

const Table = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  // const [searchQuery, setSearchQuery] = useState();
  // const [allCourses, setAllCourses] = useState([]);
  // const [sortLenght, setSortLenght] = useState(10);

  // const getAllCourseReport = async () => {
  //   const params = {
  //     RowsOfPage: sortLenght,
  //     Query: searchQuery,
  //   };
  //   const report = await getAllCourses(params);
  //   setAllCourses(report.data.courseDtos);
  // };

  // useEffect(() => {
  //   getAllCourseReport();
  // }, []);

  // useEffect(() => {
  //   getAllCourseReport();
  // }, [sortLenght]);

  // console.log(allCourses);

  // useEffect(() => {
  //   prism.highlightAll();
  // });

  // useEffect(() => {
  //   getAllCourseReport();
  // }, [searchQuery]);
  const [data, setData] = useState([]);

  const getList = async () => {
    try {
      const status = await getStatus();
      console.log("status:", status);
      setData(status);
    } catch (error) {
      throw new Error("ERROR: ", error);
    }
  };
  useEffect(() => {
    getList();
  }, []);

  return (
    <Fragment>
      <Row>
        <Col sm="12">
          <Card title=" وضعیت   " noBody>
            <div className="invoice-list-table-header w-100 pb-2 px-1">
              <Row>
                <Col lg="6" className="d-flex align-items-center px-0 px-lg-1">
                  <div className="d-flex align-items-center me-2">
                    {/* <label htmlFor="rows-per-page w-100">تعداد فیلد</label> */}
                  </div>
                  <Button
                    to="/apps/invoice/add"
                    color="primary"
                    onClick={toggleSidebar}
                  >
                    اضافه کردن
                  </Button>
                </Col>
                <Col
                  lg="6"
                  className="actions-right d-flex align-items-center justify-content-lg-end flex-lg-nowrap flex-wrap mt-lg-0 mt-1 pe-lg-1 p-0"
                >
                  <div className="d-flex align-items-center">
                    {/* <label htmlFor="search-invoice">Search</label> */}
                    <Input
                      id="search-invoice"
                      className="ms-50 me-2 w-100"
                      type="text"
                      // value={searchQuery}
                      // onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="جست و جو   "
                    />
                  </div>
                </Col>
              </Row>
            </div>
            <TableBasic data={data} />
          </Card>
        </Col>
      </Row>

      <AddStatus
        open={sidebarOpen}
        toggleSidebar={toggleSidebar}
        setSidebarOpen={setSidebarOpen}
      />
    </Fragment>
  );
};

export default Table;
