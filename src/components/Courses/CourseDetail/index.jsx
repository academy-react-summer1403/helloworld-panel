// ** React Imports
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// ** Reactstrap Imports
import { Col, Row } from "reactstrap";

// ** User View Components
import UserInfoCard from "./UserInfoCard";
import UserTabs from "./Tabs";
import { getCourseDeatil } from "../../../core/services/api/Coueses/getCourseDeatil";
import { getCourseComment } from "../../../core/services/api/Coueses/getCourseDeatil";

// ** Core Imports

// ** Styles
import "@styles/react/apps/app-users.scss";

const UserDetail = () => {
  const [active, setActive] = useState("1");
  const [data, setdata] = useState();
  const [dataComment, setdataComment] = useState();
  const { id } = useParams();
  console.log("id:", id);

  const toggleTab = (tab) => {
    if (active !== tab) {
      setActive(tab);
    }
  };

  const getList = async (id) => {
    try {
      const CoursesId = await getCourseDeatil(id);
      console.log("users:", CoursesId);
      setdata(CoursesId);
    } catch (error) {
      throw new Error("ERROR: ", error);
    }
  };
  useEffect(() => {
    getList(id);
  }, []);

  const getComeent = async (id) => {
    try {
      const CoursesId = await getCourseComment(id);
      console.log("users comment:", CoursesId);
      setdataComment(CoursesId);
    } catch (error) {
      throw new Error("ERROR: ", error);
    }
  };
  useEffect(() => {
    getComeent(id);
  }, []);

  return (
    <div className="app-user-view">
      <Row>
        <Col xl="4" lg="5" xs={{ order: 1 }} md={{ order: 0, size: 5 }}>
          <UserInfoCard data={data} />
        </Col>
        <Col xl="8" lg="7" xs={{ order: 0 }} md={{ order: 1, size: 7 }}>
          <UserTabs
            active={active}
            toggleTab={toggleTab}
            data={data}
            dataComment={dataComment}
          />
        </Col>
      </Row>
    </div>
  );
};

export default UserDetail;
