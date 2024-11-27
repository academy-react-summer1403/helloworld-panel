// ** React Imports
import { Fragment } from "react";

// ** Icons Imports
import { ArrowLeft, ArrowRight } from "react-feather";

// ** Reactstrap Imports
import { Label, Row, Col, Input, Button } from "reactstrap";

import { Field, Form, Formik, ErrorMessage } from "formik";

import { getCreatCourse } from "../../../../core/services/api/Coueses/getCreatFill";
import { useState } from "react";
import { useEffect } from "react";

const Address = ({ stepper, type }) => {
  const [stepFillType, setStepFillType] = useState();
  const [stepFillteachers, setStepFillteachers] = useState();
  const [stepFillLevel, setStepFillLevel] = useState();
  const [stepFillTerm, setStepFillTerm] = useState();

  const getAllFill = async () => {
    const report = await getCreatCourse();
    setStepFillType(report.data.courseTypeDtos);
    setStepFillteachers(report.data.teachers);
    setStepFillLevel(report.data.courseLevelDtos);
    setStepFillTerm(report.data.termDtos);
  };

  useEffect(() => {
    getAllFill();
  }, []);

  return (
    <Fragment>
      <div className="content-header">
        <h5 className="mb-0">اطلاعات دوره</h5>
        <small className="text-muted">لطفا اطلاعات را با دقت وارد کنید</small>
      </div>
      <Formik>
        <Form onSubmit={(e) => e.preventDefault()}>
          <Row>
            <Col md="6" className="mb-1">
              <div className="form-group pb-2">
                <label htmlFor="Title">نوع دوره</label>
                <hr />
                <Field
                  id="Title"
                  as="select"
                  name="CourseTypeId"
                  className="form-control"
                >
                  {stepFillType?.map((item, index) => {
                    return (
                      <option key={index} value={item.id}>
                        {item.typeName}
                      </option>
                    );
                  })}
                </Field>
                <ErrorMessage
                  name="CourseTypeId"
                  component="div"
                  className="text-danger"
                />
              </div>
            </Col>
            <Col md="6" className="mb-1">
              <div className="form-group pb-2">
                <label htmlFor="Teachers">اساتید دوره</label>
                <hr />
                <Field
                  id="Teachers"
                  as="select"
                  name="CourseTypeId"
                  className="form-control"
                >
                  {stepFillteachers?.map((item, index) => {
                    return (
                      <option key={index} value={item.id}>
                        {item.fullName}
                      </option>
                    );
                  })}
                </Field>
                <ErrorMessage
                  name="CourseTypeId"
                  component="div"
                  className="text-danger"
                />
              </div>
            </Col>
          </Row>
          <Row>
          <Col md="6" className="mb-1">
              <div className="form-group pb-2">
                <label htmlFor="Teachers">سطح دوره</label>
                <hr />
                <Field
                  id="Teachers"
                  as="select"
                  name="CourseTypeId"
                  className="form-control"
                >
                  {stepFillTerm?.map((item, index) => {
                    return (
                      <option key={index} value={item.id}>
                        {item.termName}
                      </option>
                    );
                  })}
                </Field>
                <ErrorMessage
                  name="CourseTypeId"
                  component="div"
                  className="text-danger"
                />
              </div>
            </Col>
            <Col md="6" className="mb-1">
              <div className="form-group pb-2">
                <label htmlFor="Teachers">ترم</label>
                <hr />
                <Field
                  id="Teachers"
                  as="select"
                  name="CourseTypeId"
                  className="form-control"
                >
                  {stepFillLevel?.map((item, index) => {
                    return (
                      <option key={index} value={item.id}>
                        {item.levelName}
                      </option>
                    );
                  })}
                </Field>
                <ErrorMessage
                  name="CourseTypeId"
                  component="div"
                  className="text-danger"
                />
              </div>
            </Col>
          </Row>
          <div className="d-flex justify-content-between">
            <Button
              color="primary"
              className="btn-prev"
              onClick={() => stepper.previous()}
            >
              <ArrowLeft
                size={14}
                className="align-middle me-sm-25 me-0"
              ></ArrowLeft>
              <span className="align-middle d-sm-inline-block d-none">قبل</span>
            </Button>
            <Button
              color="primary"
              className="btn-next"
              onClick={() => stepper.next()}
            >
              <span className="align-middle d-sm-inline-block d-none">بعد</span>
              <ArrowRight
                size={14}
                className="align-middle ms-sm-25 ms-0"
              ></ArrowRight>
            </Button>
          </div>
        </Form>
      </Formik>
    </Fragment>
  );
};

export default Address;
