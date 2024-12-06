// ** React Imports
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// ** Reactstrap Imports
import { Col, Row } from "reactstrap";

// ** User View Components

import { getTechWithId } from "../../../core/services/api/Technology";

// ** Core Imports

// ** Styles
import "@styles/react/apps/app-users.scss";
import EditTechnology from "./EditTechnology";

const EditTechno = () => {
  const [data, setdata] = useState();
  // console.log("data:", data);
  const { id } = useParams();
  console.log("id:", id);
  const getDetail = async (id) => {
    try {
      const user = await getTechWithId(id);
      console.log("userrrrrrrrrrrrrrrrrrrrr:",user)

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
        <EditTechnology data={data}/>
      </Row>
    </div>
  );
};

export default EditTechno;
   