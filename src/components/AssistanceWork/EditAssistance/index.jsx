// ** React Imports
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// ** Reactstrap Imports
import { Col, Row } from "reactstrap";

// ** User View Components

import { getAssisWithId } from "../../../core/services/api/AssistanceWork";

// ** Core Imports

// ** Styles
import "@styles/react/apps/app-users.scss";
import AccountTabs from "./AccountTabContent";

const EditAssis = () => {
  const [data, setdata] = useState();
  // console.log("data:", data);
  const { id } = useParams();
  console.log("id:", id);
  const getDetail = async (id) => {
    try {
      const user = await getAssisWithId(id);
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

export default EditAssis;
   