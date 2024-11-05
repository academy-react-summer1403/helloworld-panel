import { useEffect } from "react";
import { Flag, Folder, Framer, User } from "react-feather";
import { Col, Row } from "reactstrap";

import StatsHorizontal from "../widgets/stats/StatsHorizontal";
import { useContext, useState } from "react";
import { Loader } from "../spinner/Loader";
import { getReport } from "../../../core/services/api/Dashboard/index";

const StatsCard = () => {
  const [data, setdata] = useState([]);

  const getLandingReport = async () => {
    const report = await getReport();
    console.log("report:", report);
    setdata(data);
  };

  useEffect(() => {
    getLandingReport();
  }, []);

  return (
    <>
     {!data ? (
        <Loader />
      ) : (
        <>
          <Row>
            <Col lg="3" sm="6">
              <StatsHorizontal
                color="primary"
                statTitle="تعداد کل دوره ها"
                icon={<Flag size={20} />}
                renderStats={
                  <h3 className="fw-bolder mb-75">
                    {data.courseCount}
                  </h3>
                }
              />
            </Col>
            <Col lg="3" sm="6">
              <StatsHorizontal
                color="danger"
                statTitle="تعداد مقالات"
                icon={<Folder size={20} />}
                renderStats={
                  <h3 className="fw-bolder mb-75">
                    {data.newsCount}
                  </h3>
                }
              />
            </Col>
            <Col lg="3" sm="6">
              <StatsHorizontal
                color="success"
                statTitle="تعداد دانش آموزان"
                icon={<User size={20} />}
                renderStats={
                  <h3 className="fw-bolder mb-75">
                    {data.studentCount}
                  </h3>
                }
              />
            </Col>
            <Col lg="3" sm="6">
              <StatsHorizontal
                color="warning"
                statTitle="تعداد اساتید"
                icon={<Framer size={20} />}
                renderStats={
                  <h3 className="fw-bolder mb-75">
                    
                    {data.teacherCount}
                  </h3>
                }
              />
            </Col>
          </Row>
        </>
     )}
    </>
  );
};

export default StatsCard;









