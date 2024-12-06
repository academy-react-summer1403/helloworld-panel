import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, Label, Input, FormFeedback, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { Fragment } from 'react';


const EditTechnology = ({ id }) => {
  const [show, setShow] = useState(false);

  const checkIsValid = (data) => {
    return Object.values(data).every((field) =>
      typeof field === "object" ? field !== null : field.length > 0
    );
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
  
  return (
    <Fragment>
    <div >
      <h1 title='ویرایش تکنولوژی' >
        <Button onClick={() => setShow(true)} >ویرایش</Button> 
      </h1>
      <Modal isOpen={show} toggle={() => setShow(!show)} keyboard={false}>
        <ModalHeader toggle={() => setShow(false)}></ModalHeader>
        <ModalBody >
          <div className="text-center mb-2">
            <p>  ویرایش اطلاعات تکنولوژی</p>
          </div>
          <Formik>







          </Formik>
       
        </ModalBody>
      </Modal>
    </div>
    </Fragment>
  );
};

export default EditTechnology;
