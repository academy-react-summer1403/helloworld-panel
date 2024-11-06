// ** React Imports
import React,{ Fragment, useEffect, useState } from "react";

// ** Reactstrap Imports
import { Row, Col } from "reactstrap";

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

const Tables = () => {
  const [allCourses, setAllCourses] = useState([]);

  const getAllCourseReport = async () => {
    const report = await getAllCourses();
    console.log("report log:", report);
    setAllCourses(report);
  };

  useEffect(() => {
    getAllCourseReport();
  }, []);

  console.log(allCourses)

  useEffect(() => {
    prism.highlightAll();
  });

  console.log("all result", getAllCourses);

  return (
    <Fragment>
      <Row>
        <Col sm="12">
          <Card title="دوره های رزرو شده" noBody>
            <TableBasic />
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Tables;
