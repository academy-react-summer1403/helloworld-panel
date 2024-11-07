// ** React Imports
import React, { Fragment, useEffect, useState } from "react";

// ** Reactstrap Imports
import { Row, Col, Input, Button } from "reactstrap";

// ** Third Party Components
import prism from "prismjs";

// ** Demo Components
import TableBasic from "./TableBasic";

// ** Custom Components
import Card from "../../../common/card-snippet";
import Breadcrumbs from "../../../common/breadcrumbs";

// ** API

// import { getAllCourses } from "../../../../core/services/api/Coueses/getAllCoursesAdmin";

// ** Source Code
import { tableBasic } from "./TableSourceCode";

const Tables = () => {
  // const [allCourses, setAllCourses] = useState([]);

  // const getAllCourseReport = async () => {
  //   const report = await getAllCourses();
  //   console.log("report log:", report);
  //   setAllCourses(report);
  // };

  // useEffect(() => {
  //   getAllCourseReport();
  // }, []);

  // console.log(allCourses)

  useEffect(() => {
    prism.highlightAll();
  });

  return (
    <Fragment>
      <Row>
        <Col sm="12">
          <Card noBody>
            <div className="invoice-list-table-header w-100 pb-2 px-2">
              <Row>
                <Col lg="6" className="d-flex align-items-center px-0 px-lg-1">
                  <div className="d-flex align-items-center me-2">
                    <label htmlFor="rows-per-page">Show</label>
                    <Input
                      type="select"
                      id="rows-per-page"
                      // value={rowsPerPage}
                      // onChange={handlePerPage}
                      className="form-control ms-50 pe-3"
                    >
                      <option value="10">10</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                    </Input>
                  </div>
                  <Button to="/apps/invoice/add" color="primary">
                    Add Record
                  </Button>
                </Col>
                <Col
                  lg="6"
                  className="actions-right d-flex align-items-center justify-content-lg-end flex-lg-nowrap flex-wrap mt-lg-0 mt-1 pe-lg-1 p-0"
                >
                  <div className="d-flex align-items-center">
                    <label htmlFor="search-invoice">Search</label>
                    <Input
                      id="search-invoice"
                      className="ms-50 me-2 w-100"
                      type="text"
                      // value={value}
                      // onChange={e => handleFilter(e.target.value)}
                      placeholder="Search Invoice"
                    />
                  </div>
                  <Input className="w-auto " type="select">
                    <option value="">Select Status</option>
                    <option value="downloaded">Downloaded</option>
                    <option value="draft">Draft</option>
                    <option value="paid">Paid</option>
                    <option value="partial payment">Partial Payment</option>
                    <option value="past due">Past Due</option>
                    <option value="sent">Sent</option>
                  </Input>
                </Col>
              </Row>
            </div>
            <TableBasic />
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Tables;
