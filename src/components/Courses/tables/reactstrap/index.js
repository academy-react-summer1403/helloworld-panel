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

import { getAllCourses } from "../../../../core/services/api/Coueses/getAllCoursesAdmin";

// ** Source Code
import { tableBasic } from "./TableSourceCode";
import { Link } from "react-router-dom";

const Tables = () => {
  const [searchQuery, setSearchQuery] = useState();
  const [allCourses, setAllCourses] = useState([]);
  const [sortLenght, setSortLenght] = useState(10);

  const getAllCourseReport = async () => {
    const params = {
      RowsOfPage: sortLenght,
      Query: searchQuery,
    };
    const report = await getAllCourses(params);
    setAllCourses(report.data.courseDtos);
  };

  useEffect(() => {
    getAllCourseReport();
  }, []);

  useEffect(() => {
    getAllCourseReport();
  }, [sortLenght]);

  console.log(allCourses);

  useEffect(() => {
    prism.highlightAll();
  });

  useEffect(() => {
    getAllCourseReport();
  }, [searchQuery]);

  return (
    <Fragment>
      <Row>
        <Col sm="12">
          <Card title="لیست دوره ها " noBody>
            <div className="invoice-list-table-header w-100 pb-2 px-1">
              <Row>
                <Col lg="6" className="d-flex align-items-center px-0 px-lg-1">
                  <div className="d-flex align-items-center me-2">
                    {/* <label htmlFor="rows-per-page w-100">تعداد فیلد</label> */}
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
                  <Button tag={Link} to={`/creatcourse`} color="primary">
                    اضافه کردن دوره
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
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="جست و جو در دوره ها"
                    />
                  </div>
                  <Input className="w-auto " type="select">
                    <option value="">مرتب سازی</option>
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
            <TableBasic allCourses={allCourses} />
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Tables;
