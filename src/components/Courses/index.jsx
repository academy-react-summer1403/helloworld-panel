import React from "react";
import Tables from "./view/index";
import UsersList from "./usersInfo";

function index() {
  return (
    <>
      <UsersList />
      <Tables />
    </>
  );
}

export default index;
