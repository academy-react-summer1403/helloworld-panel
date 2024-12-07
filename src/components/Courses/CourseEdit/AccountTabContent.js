// ** React Imports
import { Fragment, useState } from "react";
import { Field, Formik } from "formik";

// ** Third Party Components
import Select from "react-select";
import Cleave from "cleave.js/react";
import { useForm, Controller } from "react-hook-form";
import "cleave.js/dist/addons/cleave-phone.us";

// ** Reactstrap Imports
import {
  Row,
  Col,
  Form,
  Card,
  Input,
  Label,
  Button,
  CardBody,
  CardTitle,
  CardHeader,
  FormFeedback,
} from "reactstrap";
import noImage from "../../../assets/images/Courses/noImage.png";
// ** Utils
import { selectThemeColors } from "@utils";
import { convertDateToPersian } from "../../../utility/date-helper.utils";
import { updateUser } from "../../../core/services/api/User";
import { Link } from "react-router-dom";

// ** Demo Components

const countryOptions = [
  { value: "uk", label: "UK" },
  { value: "usa", label: "USA" },
  { value: "france", label: "France" },
  { value: "russia", label: "Russia" },
  { value: "canada", label: "Canada" },
];

const languageOptions = [
  { value: "english", label: "English" },
  { value: "spanish", label: "Spanish" },
  { value: "french", label: "French" },
  { value: "german", label: "German" },
  { value: "dutch", label: "Dutch" },
];

const currencyOptions = [
  { value: "usd", label: "USD" },
  { value: "euro", label: "Euro" },
  { value: "pound", label: "Pound" },
  { value: "bitcoin", label: "Bitcoin" },
];

const timeZoneOptions = [
  {
    value: "(GMT-12:00) International Date Line West",
    label: "(GMT-12:00) International Date Line West",
  },
  {
    value: "(GMT-11:00) Midway Island, Samoa",
    label: "(GMT-11:00) Midway Island, Samoa",
  },
  { value: "(GMT-10:00) Hawaii", label: "(GMT-10:00) Hawaii" },
  { value: "(GMT-09:00) Alaska", label: "(GMT-09:00) Alaska" },
  {
    value: "(GMT-08:00) Pacific Time (US & Canada)",
    label: "(GMT-08:00) Pacific Time (US & Canada)",
  },
  {
    value: "(GMT-08:00) Tijuana, Baja California",
    label: "(GMT-08:00) Tijuana, Baja California",
  },
  { value: "(GMT-07:00) Arizona", label: "(GMT-07:00) Arizona" },
  {
    value: "(GMT-07:00) Chihuahua, La Paz, Mazatlan",
    label: "(GMT-07:00) Chihuahua, La Paz, Mazatlan",
  },
  {
    value: "(GMT-07:00) Mountain Time (US & Canada)",
    label: "(GMT-07:00) Mountain Time (US & Canada)",
  },
  {
    value: "(GMT-06:00) Central America",
    label: "(GMT-06:00) Central America",
  },
  {
    value: "(GMT-06:00) Central Time (US & Canada)",
    label: "(GMT-06:00) Central Time (US & Canada)",
  },
  {
    value: "(GMT-06:00) Guadalajara, Mexico City, Monterrey",
    label: "(GMT-06:00) Guadalajara, Mexico City, Monterrey",
  },
  { value: "(GMT-06:00) Saskatchewan", label: "(GMT-06:00) Saskatchewan" },
  {
    value: "(GMT-05:00) Bogota, Lima, Quito, Rio Branco",
    label: "(GMT-05:00) Bogota, Lima, Quito, Rio Branco",
  },
  {
    value: "(GMT-05:00) Eastern Time (US & Canada)",
    label: "(GMT-05:00) Eastern Time (US & Canada)",
  },
  { value: "(GMT-05:00) Indiana (East)", label: "(GMT-05:00) Indiana (East)" },
  {
    value: "(GMT-04:00) Atlantic Time (Canada)",
    label: "(GMT-04:00) Atlantic Time (Canada)",
  },
  {
    value: "(GMT-04:00) Caracas, La Paz",
    label: "(GMT-04:00) Caracas, La Paz",
  },
  { value: "(GMT-04:00) Manaus", label: "(GMT-04:00) Manaus" },
  { value: "(GMT-04:00) Santiago", label: "(GMT-04:00) Santiago" },
  { value: "(GMT-03:30) Newfoundland", label: "(GMT-03:30) Newfoundland" },
];

const AccountTabs = ({ data }) => {
  // console.log("AccountTabs:" , data)

  const checkIsValid = (data) => {
    return Object.values(data).every((field) => {
      if (typeof field === "object") {
        return field !== null;
      }
      if (typeof field === "boolean") {
        return true;
      }
      return field.length > 0;
    });
  };
  const defaultValues = {
    lName: "",
    fName: "",
  };
  const {
    control,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const updateUserr = async (user) => {
    try {
      const newUser = await updateUser(user);
    } catch (error) {
      throw new Error("ERROR: ", error);
    }
  };

  const onSubmit = async (data) => {
    console.log("onSubmitedit:");
    await updateUserr(data);
    if (checkIsValid(data)) {
      toast(
        <div className="d-flex">
          <div className="d-flex flex-column">
            <h6>کاربر با موفقیت ایجاد شد!</h6>
          </div>
        </div>
      );
    } else {
      for (const key in data) {
        if (data[key] === null) {
          setError("country", {
            type: "manual",
          });
        }
        if (data[key] !== null && data[key].length === 0) {
          setError(key, {
            type: "manual",
          });
        }
      }
    }
  };

  // ** States
  const [avatar, setAvatar] = useState(
    data?.data?.currentPictureAddress
      ? data?.data?.currentPictureAddress
      : noImage
  );

  const onChange = (e) => {
    const reader = new FileReader(),
      files = e.target.files;
    reader.onload = function () {
      setAvatar(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  // const onSubmit = data => {
  //   if (Object.values(data).every(field => field.length > 0)) {
  //     return null
  //   } else {
  //     for (const key in data) {
  //       if (data[key].length === 0) {
  //         setError(key, {
  //           type: 'manual'
  //         })
  //       }
  //     }
  //   }
  // }

  const handleImgReset = () => {
    setAvatar("../../../assets/images/Courses/avatar.png");
  };

  return (
    <Fragment>
      <Card>
        <CardHeader className="border-bottom">
          <CardTitle tag="h4">ویرایش دوره </CardTitle>
        </CardHeader>
        <CardBody className="py-2 my-25">
          <div className="d-flex">
            <div className="me-25">
              <img
                className="rounded me-50"
                src={avatar}
                alt="Generic placeholder image"
                height="100"
                width="100"
              />
            </div>
            <div className="d-flex align-items-end mt-75 ms-1">
              <div>
                <Button
                  tag={Label}
                  className="mb-75 me-75"
                  size="sm"
                  color="primary"
                >
                  بارگذاری
                  <Input
                    type="file"
                    onChange={onChange}
                    hidden
                    accept="image/*"
                  />
                </Button>
                <Button
                  className="mb-75"
                  color="secondary"
                  size="sm"
                  outline
                  onClick={handleImgReset}
                >
                  لغو
                </Button>
                <p className="mb-0">عکس را در قالب JPG یا PNG بارگذاری کنید.</p>
              </div>
            </div>
          </div>
          <Formik>
            <Form className="mt-2 pt-50" onSubmit={handleSubmit(onSubmit)}>
              <Row>
                <Col sm="6" className="mb-1">
                  <Label className="form-label" for="firstName">
                    نام دوره
                  </Label>
                  <Controller
                    name="firstName"
                    control={control}
                    render={({ field }) => (
                      <Input
                        id="firstName"
                        type="firstName"
                        name="firstName"
                        placeholder="firstName"
                        defaultValue={data?.data?.title}
                      />
                    )}
                  />
                  {errors && errors.firstName && (
                    <FormFeedback>Please enter a valid First Name</FormFeedback>
                  )}
                </Col>
                <Col sm="6" className="mb-1">
                  <Label className="form-label" for="lastName">
                    توضیحات
                  </Label>
                  <Controller
                    name="lastName"
                    control={control}
                    render={({ field }) => (
                      <Input
                        id="lastName"
                        type="lastname"
                        name="lastname"
                        placeholder="lastname"
                        defaultValue={data?.data?.describe}
                      />
                    )}
                  />
                  {errors.lastName && (
                    <FormFeedback>Please enter a valid Last Name</FormFeedback>
                  )}
                </Col>
                <Col sm="6" className="mb-1">
                  <Label className="form-label" for="emailInput">
                    شروع دوره
                  </Label>
                  <Input
                    id="emailInput"
                    type="email"
                    name="email"
                    defaultValue={data?.data?.startTime}
                  />
                </Col>
                <Col sm="6" className="mb-1">
                  <Label className="form-label" for="company">
                    پایان دوره
                  </Label>
                  <Input
                    defaultValue={data?.data?.endTime}
                    id="company"
                    name="company"
                    placeholder="Company Name"
                  />
                </Col>
                <Col sm="6" className="mb-1">
                  <Label className="form-label" for="status">
                    وضعیت:
                  </Label>
                  <Field
                    className="form-control react-select"
                    name="status"
                    as="select"
                  >
                    <option value={true}>فعال</option>
                    <option value={false}>غیرفعال</option>
                  </Field>
                </Col>
                <Col sm="6" className="mb-1">
                  <Label className="form-label" for="company">
                    استاد
                  </Label>
                  <Input
                    defaultValue={data?.data?.teacherName}
                    id="company"
                    name="company"
                    placeholder="Company Name"
                  />
                </Col>
                <Col sm="6" className="mb-1">
                  <Label className="form-label" for="company">
                    قیمت{" "}
                  </Label>
                  <Input
                    defaultValue={data?.data?.cost}
                    id="company"
                    name="company"
                    placeholder="Company Name"
                  />
                </Col>
                <Col sm="6" className="mb-1">
                  <Label className="form-label" for="company">
                    سطح دوره
                  </Label>
                  <Input
                    defaultValue={data?.data?.courseLevelName}
                    id="company"
                    name="company"
                    placeholder="Company Name"
                  />
                </Col>
                <Col sm="6" className="mb-1">
                  <Label className="form-label" for="company">
                    نوع دوره{" "}
                  </Label>
                  <Input
                    defaultValue={data?.data?.courseTypeName}
                    id="company"
                    name="company"
                    placeholder="Company Name"
                  />
                </Col>
                <Col sm="6" className="mb-1">
                  <Label className="form-label" for="company">
                    کلاس{" "}
                  </Label>
                  <Input
                    defaultValue={data?.data?.courseClassRoomName}
                    id="company"
                    name="company"
                    placeholder="Company Name"
                  />
                </Col>

                <Col className="mt-2" sm="12">
                  <Button
                    type="submit"
                    className="me-1"
                    color="primary"
                    // onSubmit={handleSubmit(onSubmit)}
                  >
                    ذخیره
                  </Button>
                  <Button  color="secondary" outline tag={Link} to={`/course`}>
                    لغو
                  </Button>
                </Col>
              </Row>
            </Form>
          </Formik>
        </CardBody>
      </Card>
      {/* <DeleteAccount /> */}
    </Fragment>
  );
};

export default AccountTabs;
