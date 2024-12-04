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

const Address = ({ stepper, type, formData, setFormData }) => {
  const [stepFillType, setStepFillType] = useState();
  const [stepFillteachers, setStepFillteachers] = useState();
  const [stepFillLevel, setStepFillLevel] = useState();
  const [stepFillTerm, setStepFillTerm] = useState();
  const [stepFillClassroom, setStepFillClassroom] = useState();

  const getAllFill = async () => {
    const report = await getCreatCourse();
    setStepFillType(report.data.courseTypeDtos);
    setStepFillteachers(report.data.teachers);
    setStepFillLevel(report.data.courseLevelDtos);
    setStepFillTerm(report.data.termDtos);
    setStepFillClassroom(report.data.classRoomDtos);
  };

  useEffect(() => {
    getAllFill();
  }, []);

  const handleFormChange = (values) => {
    setFormData((prev) => ({
      ...prev,
      address: values,
    }));
  };

  return (
    <Fragment>
      <div className="content-header">
        <h5 className="mb-0">اطلاعات دوره</h5>
        <small className="text-muted">لطفا اطلاعات را با دقت وارد کنید</small>
      </div>
      <Formik
        initialValues={formData.address}
        onSubmit={(values) => handleFormChange(values)}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={(e) => e.preventDefault()}>
            <Row>
              <Col md="6" className="mb-1">
                <div className="form-group pb-2">
                  <label htmlFor="CourseTypeId">نوع دوره</label>
                  <hr />
                  <Field
                    id="CourseTypeId"
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
                  <label htmlFor="TeacherId">اساتید دوره</label>
                  <hr />
                  <Field
                    id="TeacherId"
                    as="select"
                    name="TeacherId"
                    className="form-control"
                  >
                    {stepFillteachers?.map((item, index) => {
                      return (
                        <option key={index} value={item.teacherId}>
                          {item.fullName}
                        </option>
                      );
                    })}
                  </Field>
                  <ErrorMessage
                    name="TeacherId"
                    component="div"
                    className="text-danger"
                  />
                </div>{" "}
              </Col>

            </Row>
            <Row>
              <Col md="6" className="mb-1">
                <div className="form-group pb-2">
                  <label htmlFor="CourseLvlId">سطح دوره</label>
                  <hr />
                  <Field
                    id="CourseLvlId"
                    as="select"
                    name="CourseLvlId"
                    className="form-control"
                  >
                    {/* {stepFillTerm?.map((item, index) => {
                      return (
                        <option key={index} value={item.id}>
                          {item.termName}
                        </option>
                      );
                    })} */}
                    {stepFillLevel?.map((item, index) => {
                      return (
                        <option key={index} value={item.id}>
                          {item.levelName}
                        </option>
                      );
                    })}
                  </Field>
                  <ErrorMessage
                    name="CourseLvlId"
                    component="div"
                    className="text-danger"
                  />
                </div>
              </Col>
              <Col md="6" className="mb-1">
                <div className="form-group pb-2">
                  <label htmlFor="TremId">ترم</label>
                  <hr />
                  <Field
                    id="TremId"
                    as="select"
                    name="TremId"
                    className="form-control"
                  >
                    {stepFillTerm?.map((item, index) => {
                      return (
                        <option key={index} value={item.id}>
                          {item.termName}
                        </option>
                      );
                    })}
                    {/* {stepFillLevel?.map((item, index) => {
                      return (
                        <option key={index} value={item.id}>
                          {item.levelName}
                        </option>
                      );
                    })} */}
                  </Field>
                  <ErrorMessage
                    name="TremId"
                    component="div"
                    className="text-danger"
                  />
                </div>
              </Col>
            </Row>
            <Row>
            <Col md="6" className="mb-1">
                <div className="form-group">
                  <label htmlFor="SessionNumber">تعداد جلسه </label>

                  <Field
                    id="SessionNumber"
                    type="number"
                    name="SessionNumber"
                    placeholder="تعداد جلسه"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="SessionNumber"
                    component="div"
                    className="text-danger"
                  />
                </div>
              </Col>
              <Col md="6" className="mb-1">
                <div className="form-group pb-2">
                  <label htmlFor="ClassId">کلاس دوره</label>

                  <Field
                    id="ClassId"
                    as="select"
                    name="ClassId"
                    className="form-control"
                  >
                    {stepFillClassroom?.map((item, index) => {
                      return (
                        <option key={index} value={item.id}>
                          {item.classRoomName}
                        </option>
                      );
                    })}
                  </Field>
                  <ErrorMessage
                    name="ClassId"
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
                <span className="align-middle d-sm-inline-block d-none">
                  قبل
                </span>
              </Button>
              <Button
                color="primary"
                className="btn-next"
                onClick={() => {
                  handleSubmit();
                  stepper.next();
                }}
              >
                <span className="align-middle d-sm-inline-block d-none">
                  بعد
                </span>
                <ArrowRight
                  size={14}
                  className="align-middle ms-sm-25 ms-0"
                ></ArrowRight>
              </Button>
            </div>
          </Form>

          // <Form onSubmit={(e) => e.preventDefault()}>
          //   <Button
          //     onClick={() => {
          //       handleSubmit();
          //       stepper.next();
          //     }}
          //   >
          //     بعد
          //   </Button>
          // </Form>
        )}
        {/* <Form onSubmit={(e) => e.preventDefault()}>
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
        </Form> */}
      </Formik>
    </Fragment>
  );
};

export default Address;
