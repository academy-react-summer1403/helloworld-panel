// ** React Import

// ** Custom Components
import Sidebar from "@components/common/sidebar";

import { useForm, Controller } from "react-hook-form";

// ** Reactstrap Imports
import { Button, Label, Form, Input } from "reactstrap";

// ** Store & Actions
import toast from "react-hot-toast";
import { addBlog } from "../../../core/services/api/Blogs";

const AddBlog = ({ open, toggleSidebar }) => {
  const checkIsValid = (data) => {
    return Object.values(data).every((field) =>
      typeof field === "object" ? field !== null : field.length > 0
    );
  };

  const defaultValues = {
    Title: "",
    GoogleTitle: "",
    MiniDescribe: "",
    GoogleDescribe: "",
    Describe: "",
    Keyword:"",
    NewsCatregoryId:"",
  };

  // ** Vars
  const {
    control,
    setValue,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const creatUser = async (formData) => {
    try {
      const newUser = await addBlog(formData);
    } catch (error) {
      throw new Error("ERROR: ", error);
    }
  };

  // ** Function to handle form submit
  const onSubmit = async (data) => {
    console.log("onsubmit tst:")
    await  creatUser(data);
    if (checkIsValid(data)) {
      toggleSidebar();
      toast(
        <div className="d-flex">
          <div className="d-flex flex-column">
            <h6>مقاله با موفقیت ایجاد شد!</h6>
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
      title="ایجاد مقاله جدید"
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-1">
          <Label className="form-label" for="Title">
            نام مقاله <span className="text-danger">*</span>
          </Label>
          <Controller
            name="Title"
            control={control}
            render={({ field }) => (
              <Input
                id="Title"
                invalid={errors.Title && true}
                {...field}
              />
            )}
          />
        </div>
        <div className="mb-1">
          <Label className="form-label" for="GoogleTitle">
             عنوان گوگل <span className="text-danger">*</span>
          </Label>
          <Controller
            name="GoogleTitle"
            control={control}
            render={({ field }) => (
              <Input
                id="GoogleTitle"
                invalid={errors.GoogleTitle && true}
                {...field}
              />
            )}
          />
        </div>
        <div className="mb-1">
          <Label className="form-label" for="gmail">
            توضیحات کوتاه <span className="text-danger">*</span>
          </Label>
          <Controller
            name="MiniDescribe"
            control={control}
            render={({ field }) => (
              <Input
                id="MiniDescribe"
                invalid={errors.MiniDescribe && true}
                {...field}
              />
            )}
          />
          {/* <FormText color="muted">
            You can use letters, numbers & periods
          </FormText> */}
        </div>

        <div className="mb-1">
          <Label className="form-label" for="Describe">
             توضیحات <span className="text-danger">*</span>
          </Label>
          <Controller
            name="Describe"
            control={control}
            render={({ field }) => (
              <Input
                id="Describe"
                invalid={errors.Describe && true}
                {...field}
              />
            )}
          />
        </div>
        <div className="mb-1">
          <Label className="form-label" for="GoogleDescribe">
             توضیحات گوگل <span className="text-danger">*</span>
          </Label>
          <Controller
            name="GoogleDescribe"
            control={control}
            render={({ field }) => (
              <Input
                id="GoogleDescribe"
                invalid={errors.GoogleDescribe && true}
                {...field}
              />
            )}
          />
        </div>

        <div className="mb-1">
          <Label className="form-label" for="Keyword">
              کلمات کلیدی <span className="text-danger">*</span>
          </Label>
          <Controller
            name="Keyword"
            control={control}
            render={({ field }) => (
              <Input
                id="Keyword"
                invalid={errors.Keyword && true}
                {...field}
              />
            )}
          />
        </div>
    
        <div className="mb-1">
          <Label className="form-label" for="NewsCatregoryId">
               دسته‌بندی <span className="text-danger">*</span>
          </Label>
          <Controller
            name="NewsCatregoryId"
            control={control}
            render={({ field }) => (
              <Input
                id="NewsCatregoryId"
                invalid={errors.NewsCatregoryId && true}
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

export default AddBlog;
