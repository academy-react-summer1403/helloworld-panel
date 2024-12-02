// ** React Imports
import React, { Fragment, useEffect, useState } from "react";

// ** Reactstrap Imports
import {
  Row,
  Col,
  Input,
  Button,
  CardHeader,
  CardTitle,
  Label,
  CardBody,
} from "reactstrap";

// ** Third Party Components
import prism from "prismjs";

// ** Demo Components
import TableBasic from "./TableBasic";

// ** Custom Components
import Card from "../../common/card-snippet";

import { selectThemeColors } from "@utils";
import Select from "react-select";

const Tables = () => {
  const [accepted, setAccepted] = useState({
    value: true,
    label: "انتخاب کنید...",
  });
  const [Rows , setRows] = useState(10)
  console.log(Rows)

  const acceptB = accepted.value;

  console.log(accepted)

  const isAcceptOptions = [
    { value: null, label: "انتخاب کنید..." },
    { value: true, label: "تایید شده" },
    { value: false, label: "تایید نشده" },
  ];

  useEffect(() => {
    prism.highlightAll();
  });


  return (
    <Fragment>
      <Row>
        <Col sm="12">
          <Card>
            <CardHeader>
              <CardTitle tag="h4">فیلتر</CardTitle>
            </CardHeader>
            <CardBody>
              <Row>
                <Col md="4">
                  <Label for="status-select">وضعیت</Label>
                  <Select
                    theme={selectThemeColors}
                    isClearable={false}
                    className="react-select"
                    classNamePrefix="select"
                    value={accepted}
                    options={isAcceptOptions}
                    onChange={(data) => setAccepted(data)}
                  />
                </Col>
              </Row>
            </CardBody>
          </Card>
          <Card noBody>
            <div className="invoice-list-table-header w-100 pb-2 px-2">
              <Row>
                <Col lg="6" className="d-flex align-items-center px-0 px-lg-1">
                  <div className="d-flex align-items-center me-2">
                    <label htmlFor="rows-per-page">نمایش</label>
                    <Input
                      type="select"
                      id="rows-per-page"
                      // value={rowsPerPage}
                      // onChange={handlePerPage}
                      className="form-control ms-50 pe-3"
                    >
                      <option onClick={() => setRows(10)} value="10">10</option>
                      <option onClick={() => setRows(25)} value="25">25</option>
                      <option onClick={() => setRows(50)} value="50">50</option>
                    </Input>
                  </div>
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
                </Col>
              </Row>
            </div>
            <TableBasic acceptB={acceptB} Rows={Rows}/>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Tables;
