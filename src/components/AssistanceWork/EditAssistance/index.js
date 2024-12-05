// ** React Import

// ** Custom Components
import Sidebar from "@components/common/sidebar";

import { useForm, Controller } from "react-hook-form";

// ** Reactstrap Imports
import { Button, Label, Form, Input } from "reactstrap";

// ** Store & Actions
import toast from "react-hot-toast";
import { updateAssistance } from "../../../core/services/api/AssistanceWork";
import { convertDateToPersian } from "../../../utility/date-helper.utils";


const EditAssistance = ({ open, toggleSidebar }) => {
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
    worktitle: "",
    workDescribe: "",
    workDate: "",
   
  };

  // ** Vars
  const {
    control,
    setValue,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const createassis = async (user) => {
    try {
      const newUser = await updateAssistance(user);
    } catch (error) {
      throw new Error("ERROR: ", error);
    }
  };

  // ** Function to handle form submit
  const onSubmit = async (data) => {
    console.log("assistanceeEdittt:",data);
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
  console.log("onSubmit:", onSubmit);
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
          <Label className="form-label" for="workDate">
            تاریخ <span className="text-danger">*</span>
          </Label>
          <Controller
            name="workDate"
            control={control}
            render={({ field }) => (
              <Input
                type="workDate"
                id="workDate"
                invalid={errors.workDate && convertDateToPersian(workDate) && true}
                {...field}
              />
            )}
          />
          {/* <FormText color="muted">
            You can use letters, numbers & periods
          </FormText> */}
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

export default EditAssistance;
