// ** React Imports
import { Fragment } from "react";

// ** Icons Imports
import { ArrowLeft } from "react-feather";

// ** Reactstrap Imports
import { Label, Row, Col, Input, Button } from "reactstrap";

import { Field, Form, Formik, ErrorMessage } from "formik";

import { getCreatCourse } from "../../../../core/services/api/Coueses/getCreatFill";
import { useState } from "react";
import { useEffect } from "react";

const SocialLinks = ({
  stepper,
  type,
  formData,
  setFormData,
  handleCreatCourse,
  obj
}) => {
  const [stepFillTek, setStepFillTek] = useState();

  const getAllFill = async () => {
    const report = await getCreatCourse();
    setStepFillTek(report.data.technologyDtos);
  };

  useEffect(() => {
    getAllFill();
  }, []);

  const handleFormChange = (values) => {
    setFormData((prev) => ({
      ...prev,
      socialLinks: values,
    }));
  };

  return (
    <Fragment>
      <div className="content-header">
        <h5 className="mb-0"> تکنولوژی</h5>
        <small className="text-muted">لطفا اطلاعات را با دقت وارد کنید</small>
      </div>
      <Formik
        initialValues={formData.socialLinks}
        onSubmit={(values) => handleFormChange(values)}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={(e) => e.preventDefault()}>
            <Row>
              <Col md="12" className="mb-1">
                <div className="form-group pb-2">
                  <label htmlFor="Title">تکنولوژی دوره</label>
                  <hr />
                  <Field
                    id="Title"
                    as="select"
                    name="CourseTypeId"
                    className="form-control"
                  >
                    {stepFillTek?.map((item, index) => {
                      return (
                        <option key={index} value={item.id}>
                          {item.techName}
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
                <span className="align-middle d-sm-inline-block d-none">
                  قبل
                </span>
              </Button>
              <Button
                color="success"
                className="btn-submit"
                onClick={() => {
                  handleSubmit();
                  alert("submitted");
                  handleCreatCourse(obj);
                }}
              >
                ثبت دوره
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
};

export default SocialLinks;
