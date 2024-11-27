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

const Tables = ({dataComment}) => {

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
          <Card noBody>
            <TableBasic dataComment={dataComment} />
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Tables;
