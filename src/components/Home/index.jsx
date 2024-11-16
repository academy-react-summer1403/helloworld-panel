import StatsCard from "@components/common/StatsCard/StatsCard";
import CardCongratulations from "../../components/common/card-congeralution/CardCongratulations";
import { useEffect, useContext, useState } from "react";

import { useSkin } from "@hooks/useSkin";

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardLink,
  Row,
  Col,
} from "reactstrap";
import SupportTracker from "./SupportTracker";

import { ThemeColors } from "../../core/context/ThemeColors";
import {
  getActiveUserManagement,
  getDeActiveUserManagement,
} from "../../core/services/api/Dashboard/index";
import ChartjsRadarChart from "./ChartjsDoughnutChart";

// ** Third Party Components
import "chart.js/auto";

// ** Styles
import "@styles/react/libs/flatpickr/flatpickr.scss";

const Home = () => {
  const [userManageData, setManageUserData] = useState("");
  const [userDeActiveManageData, setDeActiveManageUserData] = useState("");

  // const { data: data2 } = useGetAllUsers();

  //SupportTracker
  const fetchActiveUserManageData = async () => {
    try {
      const res = await getActiveUserManagement();
      setManageUserData(res);
    } catch (error) {
      console.error("Failed to fetch active user management data:", error);
    }
  };
  useEffect(() => {
    fetchActiveUserManageData();
  }, []);

  const fetchDeActiveUserManageData = async () => {
    try {
      const res = await getDeActiveUserManagement();
      setDeActiveManageUserData(res);
    } catch (error) {
      console.error("Failed to fetch deactive user management data:", error);
    }
  };
  useEffect(() => {
    fetchDeActiveUserManageData();
  }, []);

  // ** Context, Hooks & Vars
  const { colors } = useContext(ThemeColors),
    { skin } = useSkin(),
    labelColor = skin === "dark" ? "#b4b7bd" : "#6e6b7b",
    tooltipShadow = "rgba(0, 0, 0, 0.25)",
    gridLineColor = "rgba(200, 200, 200, 0.2)",
    lineChartPrimary = "#666ee8",
    lineChartDanger = "#ff4961",
    warningColorShade = "#ffbd1f",
    warningLightColor = "#FDAC34",
    successColorShade = "#28dac6",
    primaryColorShade = "#836AF9",
    infoColorShade = "#299AFF",
    yellowColor = "#ffe800",
    greyColor = "#4F5D70",
    blueColor = "#2c9aff",
    blueLightColor = "#84D0FF",
    greyLightColor = "#EDF1F4";
  return (
    <div>
      <Card>
        <Card>
          <CardBody>
            <CardCongratulations />
            <CardText className="flex text-center">
              بهترین ها برای پروژه جدید شما
            </CardText>
          </CardBody>
        </Card>
      </Card>

      <Row className="match-height">
        <Col>
          <StatsCard />
        </Col>
      </Row>

      <ChartjsRadarChart
        tooltipShadow={tooltipShadow}
        successColorShade={successColorShade}
        warningLightColor={warningLightColor}
        primary={colors.primary.main}
      />
    </div>
  );
};

export default Home;
