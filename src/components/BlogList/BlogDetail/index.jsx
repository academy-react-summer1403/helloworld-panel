// ** React Imports
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// ** Reactstrap Imports
import { Col, Row } from "reactstrap";

// ** User View Components

import { getBlogWithId } from "../../../core/services/api/Blogs";

// ** Core Imports

// ** Styles
import "@styles/react/apps/app-users.scss";
import UserInfoCard from "./UserInfoCard";
// import UserTabs from "../UserDetail/Tabs";


const BlogDetail = () => {
  const [data, setdata] = useState();
  const { id } = useParams();
  // console.log("id:", id);
  const getList = async (id) => {
    try {
      const users = await getBlogWithId(id);
      console.log("blogggg:", users);
      setdata(users);
    } catch (error) {
      throw new Error("ERROR: ", error);
    }
  };
  useEffect(() => {
    getList(id);
  }, []);

  const [active, setActive] = useState('1')

  const toggleTab = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }

  return (
    <div className="app-user-view">
      <Row>
        <Col xl="4" lg="5" xs={{ order: 1 }} md={{ order: 0, size: 5 }}>
          <UserInfoCard data={data} setdata={setdata}   />
        </Col>
        {/* <Col xl="8" lg="7" xs={{ order: 0 }} md={{ order: 1, size: 7 }}>
          <UserTabs data={data} active={active} toggleTab={toggleTab}/>
        </Col> */}
      </Row>
    </div>
  );
};

export default BlogDetail;
