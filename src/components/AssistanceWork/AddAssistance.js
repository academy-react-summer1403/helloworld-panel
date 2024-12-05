// ** React Import

// ** Custom Components
import Sidebar from "@components/common/sidebar";
import Select from "react-select";

import { useForm, Controller } from "react-hook-form";

// ** Reactstrap Imports
import { Button, Label, Form, Input } from "reactstrap";
import React, { useEffect, useState } from "react";

import { Formik, Field, Form } from "formik";

// ** Store & Actions
import toast from "react-hot-toast";
import { AddAssistanceApi } from "../../core/services/api/AssistanceWork";
import { getCourseAssistance } from "../../core/services/api/CourseAssistance";
import { convertDateToPersian } from "../../utility/date-helper.utils";
import Flatpickr from "react-flatpickr";
import "@styles/react/libs/flatpickr/flatpickr.scss";

const AddAssistance = ({ open, toggleSidebar }) => {
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
    workDescribe: "",
    workDate: "",
    assistanceId: assis,
  };

  // ** Vars
  const {
    control,
    setValue,
    setError,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({ defaultValues });

  const createassis = async (user) => {
    try {
      const newUser = await AddAssistanceApi(user);
    } catch (error) {
      throw new Error("ERROR: ", error);
    }
  };

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

  // ** Function to handle form submit
  const onSubmit = async (data) => {
    console.log("form values:", data);
    await createassis(data);
    if (checkIsValid(data)) {
      toggleSidebar();
      toast(
        <div className="d-flex">
          <div className="d-flex flex-column">
            <h6>تسک‌ با موفقیت ایجاد شد!</h6>
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
  // console.log("onSubmit:", onSubmit);
  const handleSidebarClosed = () => {
    for (const key in defaultValues) {
      setValue(key, "");
    }
  };

  return (
    <Sidebar
      size="lg"
      open={open}
      headerClassName="mb-1"
      contentClassName="pt-0"
      toggleSidebar={toggleSidebar}
      onClosed={handleSidebarClosed}
      title="ایجاد تسک جدید"
    >
      <Formik>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-1">
          <Label className="form-label" for="worktitle">
            نام تسک <span className="text-danger">*</span>
          </Label>
          <Controller
            name="worktitle"
            control={control}
            render={({ field }) => (
              <Input
                type="worktitle"
                id="worktitle"
                invalid={errors.worktitle && true}
                {...field}
              />
            )}
          />
        </div>
        <div className="mb-1">
          <Label className="form-label" for="workDescribe">
            توضیحات <span className="text-danger">*</span>
          </Label>
          <Controller
            name="workDescribe"
            control={control}
            render={({ field }) => (
              <Input
                type="workDescribe"
                id="workDescribe"
                invalid={errors.workDescribe && true}
                {...field}
              />
            )}
          />
        </div>
        <div className="mb-1">
          <Label className="form-label" for="assistanceId">
            نوع تسک <span className="text-danger">*</span>
          </Label>
          <Controller
            name="assistanceId"
            control={control}
            render={({ field }) => (
              // <Input
              //   type="assistanceId"
              //   id="assistanceId"
              //   invalid={errors.assistanceId && true}
              //   onChange={(e) => setAssis(e.target.value)}
              //   {...field}
              // />
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
            )}
          />
        </div>
        <div className="mb-1">
          <Label className="form-label" for="workDate">
            تاریخ <span className="text-danger">*</span>
          </Label>

          <Field
            type="date"
            name="workDate"
            id="workDate"
            value={getValues("workDate")}
            placeholder="زمان شروع دوره"
            className={`form-control ${
              errors.workDate && touched.workDate ? "is-invalid" : ""
            }`}
          />
          {/* <Flatpickr
            type="date"
            name="workDate"
            id="workDate"
            style={{ width: "300px" }}
            placeholder="ساعت کاری را انتخاب کنید"
            className="form-control"
            value={getValues("workDate")}
            onChange={(date) => {
              setValue("workDate", date[0]);
            }}
            options={{
              mode: "range",
              dateFormat: "Y-m-d",
            }}
          /> */}
        </div>

        <Button type="submit" className="me-1" color="primary">
          ثبت
        </Button>
        <Button type="reset" color="secondary" outline onClick={toggleSidebar}>
          انصراف
        </Button>
      </Form>
      </Formik>
    </Sidebar>
  );
};

export default AddAssistance;
