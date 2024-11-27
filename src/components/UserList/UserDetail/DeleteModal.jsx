import React from "react";
import { useState } from "react";
import DeleteUser from "./DeleteUser";

const DeleteModal = ({id}) => {
  const [showModal, setShowModal] = useState(false);
  return <div>{!showModal ? <span className="align-middle ">حذف</span> : <div> <DeleteUser setShowModal={setShowModal}/>  </div>}</div>;
};

export default DeleteModal;
