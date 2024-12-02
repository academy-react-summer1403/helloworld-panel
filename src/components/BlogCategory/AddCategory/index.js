// ** React Import
import {  useState } from "react";


// ** Custom Components
import Sidebar from "@components/common/sidebar";

import { useForm, Controller } from "react-hook-form";

// ** Reactstrap Imports
import { Button, Label, Form, Input } from "reactstrap";
import noImage from "../../../assets/images/Courses/avatar.png";

// ** Store & Actions
import toast from "react-hot-toast";
import { createNewsCategory } from "../../../core/services/api/Blogs";
const AddCategory = ({ open, toggleSidebar }) => {
  const checkIsValid = (data) => {
    return Object.values(data).every((field) =>
      typeof field === "object" ? field !== null : field.length > 0
    );
  };

  const defaultValues = {
    categoryName: "",
    googleTitle: "",
    googleDescribe: "",
    iconName: "",
    image: "",
   
  };

  // ** Vars
  const {
    control,
    setValue,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const creatCat = async (data) => {
    try {
      const newcategory = await createNewsCategory(data);
      console.log("newcatttttt:", newcategory)
    } catch (error) {
      throw new Error("ERROR: ", error);
    }
  };

  // ** Function to handle form submit
  const onSubmit = async (data) => {
    console.log("onsubmit tst:")
    await creatCat(data);
    if (checkIsValid(data)) {
      toggleSidebar();
      toast(
        <div className="d-flex">
          <div className="d-flex flex-column">
            <h6>دسته‌بندی با موفقیت ایجاد شد!</h6>
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


  // const [avatar, setAvatar] = useState(
  //   image
  //     ? image
  //     : noImage
  // );

  // const onChange = (e) => {
  //   const reader = new FileReader(),
  //     files = e.target.files;
  //   reader.onload = function () {
  //     setAvatar(reader.result);
  //   };
  //   reader.readAsDataURL(files[0]);
  // };
  return (
    <Sidebar
      size="lg"
      open={open}
      headerClassName="mb-1"
      contentClassName="pt-0"
      toggleSidebar={toggleSidebar}
      onClosed={handleSidebarClosed}
      title="ایجاد دسته‌بندی جدید"
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-1">
          <Label className="form-label" for="categoryName">
            عنوان دسته‌بندی <span className="text-danger">*</span>
          </Label>
          <Controller
            name="categoryName"
            control={control}
            render={({ field }) => (
              <Input
                id="categoryName"
                // placeholder="John"
                invalid={errors.categoryName && true}
                {...field}
              />
            )}
          />
        </div>
        <div className="mb-1">
          <Label className="form-label" for="googleTitle">
             عنوان گوگل <span className="text-danger">*</span>
          </Label>
          <Controller
            name="googleTitle"
            control={control}
            render={({ field }) => (
              <Input
                id="googleTitle"
                // placeholder="Doe"
                invalid={errors.googleTitle && true}
                {...field}
              />
            )}
          />
        </div>
        <div className="mb-1">
          <Label className="form-label" for="googleDescribe">
            توضیحات گوگل <span className="text-danger">*</span>
          </Label>
          <Controller
            name="googleDescribe"
            control={control}
            render={({ field }) => (
              <Input
                type="googleDescribe"
                id="googleDescribe"
                // placeholder="john.doe@example.com"
                invalid={errors.googleDescribe && true}
                {...field}
              />
            )}
          />
          {/* <FormText color="muted">
            You can use letters, numbers & periods
          </FormText> */}
        </div>

        <div className="mb-1">
          <Label className="form-label" for="iconName">
             نام آیکون <span className="text-danger">*</span>
          </Label>
          <Controller
            name="iconName"
            control={control}
            render={({ field }) => (
              <Input
                id="iconName"
                // placeholder="*********09"
                invalid={errors.iconName && true}
                {...field}
              />
            )}
          />
        </div>
        {/* <div className="mb-1">
          <Label className="form-label" for="image">
             عکس دسته‌بندی <span className="text-danger">*</span>
          </Label>
          <Controller
            name="image"
            control={control}
            render={({ field }) => (
              <Input
              src={avatar}
                id="image"
                onChange={onChange}
                invalid={errors.image && true}
                {...field}
              />
            )}
          />
        </div> */}
       

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

export default AddCategory;
