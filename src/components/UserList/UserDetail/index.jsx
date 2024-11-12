// ** React Imports
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// ** Reactstrap Imports
import { Col, Row } from "reactstrap";

// ** User View Components
import UserInfoCard from "../UserDetail/UserInfoCard";

import { getUserWithId } from "../../../core/services/api/User/index";

// ** Core Imports

// ** Styles
import "@styles/react/apps/app-users.scss";
import UserTabs from "../UserDetail/Tabs";


const UserDetail = () => {
  const [data, setdata] = useState();
  const { id } = useParams();
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
    <div className="app-user-view">
      <Row>
        <Col xl="4" lg="5" xs={{ order: 1 }} md={{ order: 0, size: 5 }}>
          <UserInfoCard data={data}   />
        </Col>
        <Col xl="8" lg="7" xs={{ order: 0 }} md={{ order: 1, size: 7 }}>
          <UserTabs/>
        </Col>
      </Row>
    </div>
  );
};

export default UserDetail;
