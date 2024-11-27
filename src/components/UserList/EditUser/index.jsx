// ** React Imports
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// ** Reactstrap Imports
import { Col, Row } from "reactstrap";

// ** User View Components

import { getUserWithId } from "../../../core/services/api/User/index";

// ** Core Imports

// ** Styles
import "@styles/react/apps/app-users.scss";
import AccountTabs from "./AccountTabContent";

const Edituser = () => {
  const [data, setdata] = useState();
  // console.log("data:", data);
  const { id } = useParams();
  console.log("id:", id);
  const getDetail = async (id) => {
    try {
      const user = await getUserWithId(id);
      console.log("user:",user)

      setdata(user);
    } catch (error) {
      throw new Error("ERROR: ", error);
    }
  };
  useEffect(() => {
    getDetail(id);
  }, [id]);

  return (
    <div className="app-user-view">
      <Row>
        <AccountTabs data={data} />
      </Row>
    </div>
  );
};

export default Edituser;
   