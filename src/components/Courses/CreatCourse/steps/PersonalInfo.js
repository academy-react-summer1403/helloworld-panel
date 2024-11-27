// ** React Imports
import { Fragment } from "react";

// ** Third Party Components
import Select from "react-select";
import { ArrowLeft, ArrowRight } from "react-feather";

import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

// ** Utils
import { selectThemeColors } from "@utils";

// ** Styles
import "@styles/react/libs/react-select/_react-select.scss";
import { Col, Row } from "reactstrap";

const PersonalInfo = ({ stepper, type }) => {
  const validationSchema = Yup.object().shape({
    Cost: Yup.number()
      .typeError("هزینه دوره باید یک عدد باشد")
      .required("هزینه دوره الزامی است"),
    UniqeUrlString: Yup.string().required("کد یکتا الزامی است"),
    StartTime: Yup.date().required("زمان شروع دوره الزامی است"),
    EndTime: Yup.date()
      .required("زمان پایان دوره الزامی است")
      .min(
        Yup.ref("StartTime"),
        "زمان پایان دوره باید بعد از زمان شروع دوره باشد"
      ),
  });

  return (
    <Fragment>
      <div className="content-header">
        <h5 className="mb-0">اطلاعات دوره</h5>
        <small className="text-muted">لطفا اطلاعات را با دقت وارد کنید</small>
      </div>
      <Formik
        initialValues={{
          Cost: "",
          UniqeUrlString: "",
          StartTime: "",
          EndTime: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(value) => {
          // setThirdLv(value);
          stepper.next();
        }}
      >
        {({ errors, touched }) => (
          <Form className="d-flex flex-column ">
            <Row>
              <Col md="6" className="mb-1">
                <div className="form-group gap-1 mb-1">
                  <label htmlFor="Cost">هزینه دوره</label>
                  <hr />
                  <Field
                    type="number"
                    name="Cost"
                    id="Cost"
                    placeholder="هزینه دوره"
                    className={`form-control ${
                      errors.Cost && touched.Cost ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="Cost"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="UniqeUrlString">کد یکتا</label>
                  <hr />
                  <Field
                    name="UniqeUrlString"
                    id="UniqeUrlString"
                    placeholder="کد یکتا"
                    className={`form-control ${
                      errors.UniqeUrlString && touched.UniqeUrlString
                        ? "is-invalid"
                        : ""
                    }`}
                  />
                  <ErrorMessage
                    name="UniqeUrlString"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
              </Col>

              <Col md="6" className="mb-1">
              <div className="form-group gap-1 mb-1">
              <label htmlFor="StartTime">زمان شروع دوره</label>
                  <hr />

                  <Field
                    type="date"
                    name="StartTime"
                    id="StartTime"
                    placeholder="زمان شروع دوره"
                    className={`form-control ${
                      errors.StartTime && touched.StartTime ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="StartTime"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="EndTime">زمان پایان دوره</label>
                  <hr />

                  <Field
                    type="date"
                    name="EndTime"
                    id="EndTime"
                    placeholder="زمان پایان دوره"
                    className={`form-control ${
                      errors.EndTime && touched.EndTime ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="EndTime"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
              </Col>

              <button type="submit" className="btn btn-info mt-1">
                ثبت
              </button>
            </Row>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
};

export default PersonalInfo;
