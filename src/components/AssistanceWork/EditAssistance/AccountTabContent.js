// ** React Imports
import { Fragment, useState, useEffect } from "react";
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
import noImage from "../../../assets/images/Courses/avatar.png";
// ** Utils
import { selectThemeColors } from "@utils";
import { convertDateToPersian } from "../../../utility/date-helper.utils";
import { updateTech } from "../../../core/services/api/Technology";
import { getCourseAssistance } from "../../../core/services/api/CourseAssistance";

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

const EditTechnology = ({ data }) => {
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

  const [assis, setAssis] = useState();

  const defaultValues = {
    worktitle: "",
    workDate: "",
    workDescribe: "",
    assistanceId: assis,

  };
  const {
    control,
    setValue,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const [assistanceOptions, setAssistanceOptions] = useState([]);

  const getAssistanceList = async () => {
    try {
      const assistanc = await getCourseAssistance();
      console.log("assistanc:", assistanc);
      const options = [];
      assistanc.data.forEach((f) =>
        options.push({ label: f.assistanceName, value: f.id })
      );
      // console.log("options",options)
      setAssistanceOptions(options);
    } catch (error) {
      throw new Error("ERROR: ", error);
    }
  };
  useEffect(() => {
    getAssistanceList();
  }, []);



  const editTechno = async (user) => {
    try {
      const editTech = await updateTech(user);
    } catch (error) {
      throw new Error("ERROR: ", error);
    }
  };

  const onSubmit = async (data) => {
    console.log("onSubmitedit:");
    await editTechno(data);
    if (checkIsValid(data)) {
      toast(
        <div className="d-flex">
          <div className="d-flex flex-column">
            <h6>تسک با موفقیت ویرایش شد!</h6>
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

  return (
    <Fragment>
      <Card>
        <CardHeader className="border-bottom">
          <CardTitle tag="h4">ویرایش تسک </CardTitle>
        </CardHeader>
        <CardBody className="py-2 my-25">
          <Formik>
            <Form className="mt-2 pt-50" onSubmit={handleSubmit(onSubmit)}>
              <Row>
                <Col sm="6" className="mb-1">
                  <Label className="form-label" for="worktitle">
                    نام
                  </Label>
                  <Input
                    id="worktitle"
                    type="worktitle"
                    name="..."
                    defaultValue={data?.data?.worktitle}
                  />
                </Col>
                <Col sm="6" className="mb-1">
                  <Label className="form-label" for="workDate">
                    تاریخ
                  </Label>
                  <Input
                    id="workDate"
                    type="workDate"
                    name="..."
                    defaultValue={data?.data?.workDate && convertDateToPersian(data?.data?.workDate)}
                  />
                </Col>

                <Col sm="6" className="mb-1">
                  <Label className="form-label" for="workDescribe">
                    توضیحات
                  </Label>
                  <Input
                    id="workDescribe"
                    type="workDescribe"
                    name="..."
                    defaultValue={data?.data?.workDescribe}
                  />
                </Col>
                <Col sm="6" className="mb-1">
                  <Label className="form-label" for="iconAddress">
                     ...
                  </Label>
                  <Select
                id="assistanceId"
                // value={calendarLabel}
                options={assistanceOptions}
                // theme={selectThemeColors}
                className="react-select"
                classNamePrefix="select"
                isClearable={false}
                onChange={(data) => setValue("assistanceId", data.value)}

                // components={{
                //   Option: OptionComponent
                // }}
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
                  <Button color="secondary" outline>
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

export default EditTechnology;
