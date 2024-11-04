import React from "react";
import Tables from "./tables/reactstrap";
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
