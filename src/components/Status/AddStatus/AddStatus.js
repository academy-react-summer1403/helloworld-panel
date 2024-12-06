// ** React Import

// ** Custom Components
import Sidebar from "@components/common/sidebar";
import Select from "react-select";

import { useForm, Controller } from "react-hook-form";

// ** Reactstrap Imports
import { Button, Label, Form, Input } from "reactstrap";
import React, { useEffect, useState } from "react";

// ** Store & Actions
import toast from "react-hot-toast";
import { addStat } from "../../../core/services/api/Status";
// import { getTechnology } from "../../../core/services/api/Technology";
// import { convertDateToPersian } from "../../utility/date-helper.utils";
import Flatpickr from "react-flatpickr";
import "@styles/react/libs/flatpickr/flatpickr.scss";

const AddStatus = ({ open, toggleSidebar }) => {
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

  //   const [assis, setAssis] = useState();

  const defaultValues = {
    statusName: "",
    describe: "",
    statusNumber: "",
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

  const createstat = async (user) => {
    try {
      const newStat = await addStat(user);
    } catch (error) {
      throw new Error("ERROR: ", error);
    }
  };

  // ** Function to handle form submit
  const onSubmit = async (data) => {
    console.log("form values:", data);
    await createstat(data);
    if (checkIsValid(data)) {
      toggleSidebar();
      toast(
        <div className="d-flex">
          <div className="d-flex flex-column">
            <h6>وضعیت با موفقیت ایجاد شد!</h6>
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
      title="ایجاد وضعیت جدید"
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-1">
          <Label className="form-label" for="statusName">
            نام وضعیت <span className="text-danger">*</span>
          </Label>
          <Controller
            name="statusName"
            control={control}
            render={({ field }) => (
              <Input
                type="statusName"
                id="statusName"
                invalid={errors.statusName && true}
                {...field}
              />
            )}
          />
        </div>
        <div className="mb-1">
          <Label className="form-label" for="describe">
            توضیحات <span className="text-danger">*</span>
          </Label>
          <Controller
            name="describe"
            control={control}
            render={({ field }) => (
              <Input
                type="describe"
                id="describe"
                invalid={errors.describe && true}
                {...field}
              />
            )}
          />
        </div>
        <div className="mb-1">
          <Label className="form-label" for="statusNumber">
            شماره وضعیت <span className="text-danger">*</span>
          </Label>
          <Controller
            name="statusNumber"
            control={control}
            render={({ field }) => (
              <Input
                type="statusNumber"
                id="statusNumber"
                invalid={errors.statusNumber && true}
                {...field}
              />
            )}
          />
        </div>

        <Button type="submit" className="me-1" color="primary">
          ثبت
        </Button>
        <Button type="reset" color="secondary" outline onClick={toggleSidebar}>
          انصراف
        </Button>
      </Form>
    </Sidebar>
  );
};

export default AddStatus;
