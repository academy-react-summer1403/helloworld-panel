{/* <Button className="align-middle" onClick={() => setShow(true)}> ویرایش</Button>  */}

// ** React Import
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// ** Custom Components
import Sidebar from "@components/common/sidebar";

import { useForm, Controller } from "react-hook-form";

// ** Reactstrap Imports
import { Button, Label, Form, Input } from "reactstrap";

// ** Store & Actions
import toast from "react-hot-toast";
import { addUser } from "../../../core/services/api/User/index";

const AddUser = ({ open, toggleSidebar , id }) => {
  const [data, setdata] = useState();
  console.log("id:", id);
  const getList = async (id) => {
    try {
      const users = await getUserWithId(id);
      console.log("users:", users);
      setdata(users);
    } catch (error) {
      throw new Error("ERROR: ", error);
    }
  };
  useEffect(() => {
    getList(id);
  }, []);

  return (
    <Sidebar
      size="lg"
      open={open}
      headerClassName="mb-1"
      contentClassName="pt-0"
      toggleSidebar={toggleSidebar}
      // onClosed={handleSidebarClosed}
      title="ایجاد کاربر جدید"
    >
      <Form>
        <div className="mb-1">
          <Label className="form-label" for="firstName">
            نام <span className="text-danger">*</span>
          </Label>
          <Controller
            name="firstName"
            // control={control}
            render={({ field }) => (
              <Input
                id="firstName"
                placeholder="John"
                invalid={errors.firstName && true}
                {...field}
              />
            )}
          />
        </div>
        <div className="mb-1">
          <Label className="form-label" for="lastName">
            نام خانوادگی <span className="text-danger">*</span>
          </Label>
          <Controller
            name="lastName"
            // control={control}
            render={({ field }) => (
              <Input
                id="lastName"
                placeholder="Doe"
                invalid={errors.lastName && true}
                {...field}
              />
            )}
          />
        </div>
        <div className="mb-1">
          <Label className="form-label" for="gmail">
            ایمیل <span className="text-danger">*</span>
          </Label>
          <Controller
            name="gmail"
            // control={control}
            render={({ field }) => (
              <Input
                type="email"
                id="gmail"
                placeholder="john.doe@example.com"
                invalid={errors.gmail && true}
                {...field}
              />
            )}
          />
          {/* <FormText color="muted">
            You can use letters, numbers & periods
          </FormText> */}
        </div>

        <div className="mb-1">
          <Label className="form-label" for="phoneNumber">
            تلفن همراه <span className="text-danger">*</span>
          </Label>
          <Controller
            name="phoneNumber"
            // control={control}
            render={({ field }) => (
              <Input
                id="phoneNumber"
                placeholder="*********09"
                invalid={errors.phoneNumber && true}
                {...field}
              />
            )}
          />
        </div>
        <div className="mb-1">
          <Label className="form-label" for="password">
            رمز عبور <span className="text-danger">*</span>
          </Label>
          <Controller
            name="password"
            // control={control}
            render={({ field }) => (
              <Input
                id="password"
                placeholder="*********"
                invalid={errors.password && true}
                {...field}
              />
            )}
          />
        </div>
        <Label className="form-label" for="user-role">
          نقش کاربر
        </Label>
        <div className="mb-1">
          <div className="form-check form-check-inline">
            <Controller
              name="isStudent"
              // control={control}
              render={({ field }) => (
                <Input type="checkbox" id="isStudent" {...field} />
              )}
            />

            <Label for="isStudent" className="form-check-label">
              دانشجو
            </Label>
          </div>
          <div className="form-check form-check-inline">
            <Controller
              name="isTeacher"
              // control={control}
              render={({ field }) => (
                <Input type="checkbox" id="isTeacher" {...field} />
              )}
            />
            <Label for="isTeacher" className="form-check-label">
              استاد
            </Label>
            <div className="form-check form-check-inline">
              <Controller
                name="isAdmin"
                // control={control}
                render={({ field }) => (
                  <Input type="checkbox" id="isAdmin" {...field} />
                )}
              />

              <Label for="isAdmin" className="form-check-label">
                ادمین
              </Label>
            </div>
          </div>
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

export default AddUser;
