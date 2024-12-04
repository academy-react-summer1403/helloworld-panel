// ** React Imports
import { ErrorMessage, Field, Formik } from "formik";
import { Fragment } from "react";

// ** Icons Imports
import { ArrowLeft, ArrowRight } from "react-feather";

// ** Reactstrap Imports
import { Label, Row, Col, Input, Form, Button } from "reactstrap";

const AccountDetails = ({ stepper, formData, setFormData }) => {
  const handleFormChange = (values) => {
    setFormData((prev) => ({
      ...prev,
      accountDetails: values,
    }));
  };

  return (
    <Fragment>
      <div className="content-header">
        <h5 className="mb-0">اطلاعات اولیه دوره</h5>
        <small className="text-muted">لطفا اطلاعات را با دقت وارد کنید</small>
      </div>
      <Formik
        initialValues={formData.accountDetails}
        onSubmit={(values) => handleFormChange(values)}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={(e) => e.preventDefault()}>
            <Row>
              <Col md="6" className="mb-1">
                <div className="form-group mb-2">
                  <label htmlFor="Title mb-1">موضوع دوره</label>
                  <hr />
                  <Field
                    id="Title"
                    name="Title"
                    placeholder="موضوع دوره"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="Title"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="Describe mb-1">توضیحات</label>
                  <hr />
                  <Field
                    id="Describe"
                    name="Describe"
                    placeholder="توضیحات"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="Describe"
                    component="div"
                    className="text-danger"
                  />
                </div>
              </Col>

              <Col md="6" className="mb-1">
                <div className="form-group mb-2">
                  <label htmlFor="MiniDescribe mb-1">توضیحات کوتاه</label>
                  <hr />
                  <Field
                    id="MiniDescribe"
                    name="MiniDescribe"
                    placeholder="توضیحات کوتاه"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="MiniDescribe"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="Capacity mb-1">ظرفیت دوره</label>
                  <hr />
                  <Field
                    id="Capacity"
                    type="number"
                    name="Capacity"
                    placeholder="ظرفیت دوره"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="Capacity"
                    component="div"
                    className="text-danger"
                  />
                </div>
              </Col>
            </Row>
            <div className="d-flex justify-content-between">
              <Button color="secondary" className="btn-prev" outline disabled>
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
              <div className="form-group mb-2">
                <label htmlFor="Title mb-1">موضوع دوره</label>
                <hr />
                <Field
                  id="Title"
                  name="Title"
                  placeholder="موضوع دوره"
                  className="form-control"
                />
                <ErrorMessage
                  name="Title"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className="form-group mb-2">
                <label htmlFor="Describe mb-1">توضیحات</label>
                <hr />
                <Field
                  id="Describe"
                  name="Describe"
                  placeholder="توضیحات"
                  className="form-control"
                />
                <ErrorMessage
                  name="Describe"
                  component="div"
                  className="text-danger"
                />
              </div>
            </Col>

            <Col md="6" className="mb-1">
              <div className="form-group mb-2">
                <label htmlFor="MiniDescribe mb-1">توضیحات کوتاه</label>
                <hr />
                <Field
                  id="MiniDescribe"
                  name="MiniDescribe"
                  placeholder="توضیحات کوتاه"
                  className="form-control"
                />
                <ErrorMessage
                  name="MiniDescribe"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className="form-group mb-2">
                <label htmlFor="Capacity mb-1">ظرفیت دوره</label>
                <hr />
                <Field
                  id="Capacity"
                  type="number"
                  name="Capacity"
                  placeholder="ظرفیت دوره"
                  className="form-control"
                />
                <ErrorMessage
                  name="Capacity"
                  component="div"
                  className="text-danger"
                />
              </div>
            </Col>
          </Row>
          <div className="d-flex justify-content-between">
            <Button color="secondary" className="btn-prev" outline disabled>
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

export default AccountDetails;
