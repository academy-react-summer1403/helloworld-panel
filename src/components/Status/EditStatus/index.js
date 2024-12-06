// ** React Imports
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// ** Reactstrap Imports
import { Col, Row } from "reactstrap";

// ** User View Components

import { getStatWithId } from "../../../core/services/api/Status";
// ** Core Imports

// ** Styles
import "@styles/react/apps/app-users.scss";
import Edit from "./Edit";

const EditStatus = () => {
  const [data, setdata] = useState();
  // console.log("data:", data);
  const { id } = useParams();
  // console.log("id:", id);
  const getDetail = async (id) => {
    try {
      const user = await getStatWithId(id);

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
        <Edit data={data} />
      </Row>
    </div>
  );
};

export default EditStatus;
