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
import { addTech } from "../../../core/services/api/Technology";
// import { getTechnology } from "../../../core/services/api/Technology";
// import { convertDateToPersian } from "../../utility/date-helper.utils";
import Flatpickr from "react-flatpickr";
import "@styles/react/libs/flatpickr/flatpickr.scss";

const AddTechnology = ({ open, toggleSidebar }) => {
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
    techName: "",
    describe: "",
    iconAddress: "",
    parentId: "",
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

  const createtech = async (user) => {
    try {
      const newUser = await addTech(user);
    } catch (error) {
      throw new Error("ERROR: ", error);
    }
  };

  //   const [assistanceOptions, setAssistanceOptions] = useState([]);

  //   const getTechnologyList = async () => {
  //     try {
  //       const technolog = await getTechnology();
  //       console.log("technolog:", technolog);
  //       const options = [];
  //       technolog.data.forEach((f) =>
  //         options.push({ label: f.parentId, value: f.id })
  //       );
  //       // console.log("options",options)
  //       setAssistanceOptions(options);

  //     } catch (error) {
  //       throw new Error("ERROR: ", error);
  //     }
  //   };
  //   useEffect(() => {
  //     getTechnologyList();
  //   }, []);

  // ** Function to handle form submit
  const onSubmit = async (data) => {
    console.log("form values:", data);
    await createtech(data);
    if (checkIsValid(data)) {
      toggleSidebar();
      toast(
        <div className="d-flex">
          <div className="d-flex flex-column">
            <h6>تکنولوژی با موفقیت ایجاد شد!</h6>
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
      title="ایجاد تکنولوژی جدید"
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-1">
          <Label className="form-label" for="techName">
            نام تکنولوژی <span className="text-danger">*</span>
          </Label>
          <Controller
            name="techName"
            control={control}
            render={({ field }) => (
              <Input
                type="techName"
                id="techName"
                invalid={errors.techName && true}
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
          <Label className="form-label" for="iconAddress">
            آدرس آیکون <span className="text-danger">*</span>
          </Label>
          <Controller
            name="iconAddress"
            control={control}
            render={({ field }) => (
              <Input
                type="iconAddress"
                id="iconAddress"
                invalid={errors.iconAddress && true}
                {...field}
              />
            )}
          />
        </div>
        <div className="mb-1">
          <Label className="form-label" for="parentId">
            نوع تکنولوژی <span className="text-danger">*</span>
          </Label>
          <Controller
            name="parentId"
            control={control}
            render={({ field }) => (
              <Input
                type="parentId"
                id="parentId"
                invalid={errors.parentId && true}
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

export default AddTechnology;
