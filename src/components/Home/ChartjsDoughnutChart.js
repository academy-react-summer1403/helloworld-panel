// ** Third Party Components
import { Doughnut } from "react-chartjs-2";
import { Monitor, Tablet, ArrowDown, ArrowUp, User } from "react-feather";

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap";

const ChartjsRadarChart = ({
  tooltipShadow,
  successColorShade,
  warningLightColor,
  primary,
}) => {
  // ** Chart Options
  const options = {
    maintainAspectRatio: false,
    cutout: 60,
    animation: {
      resize: {
        duration: 500,
      },
    },
    plugins: {
      legend: { display: false },
      tooltips: {
        callbacks: {
          label(context) {
            console.log(context);
            let label = context.label || "";
            if (label) {
              label += "Ronak: ";
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(context.parsed.y);
            }
            return label;
          },
        },
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: tooltipShadow,
        backgroundColor: "#fff",
        titleFontColor: "#000",
        bodyFontColor: "#000",
      },
    },
  };

  // ** Chart data
  const data = {
    datasets: [
      {
        labels: ["Tablet", "Mobile", "Desktop"],
        data: [3, 97, 100],
        backgroundColor: [successColorShade, warningLightColor, primary],
        borderWidth: 0,
        pointStyle: "rectRounded",
      },
    ],
  };

  return (
    <Card>
      <CardHeader className="d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column">
        <CardTitle tag="h4">آمار کاربران</CardTitle>
      </CardHeader>
      <CardBody>
        <div style={{ height: "275px" }}>
          <Doughnut data={data} options={options} height={275} />
        </div>
        <div className="d-flex justify-content-between mt-3 mb-1">
          <div className="d-flex align-items-center">
            <User size={17} className="text-primary" />
            <span className="fw-bold ms-75 me-25">تمامی کاربران</span>
            <span>- 100%</span>
          </div>
        </div>
        <div className="d-flex justify-content-between mb-1">
          <div className="d-flex align-items-center">
            <User size={17} className="text-warning" />
            <span className="fw-bold ms-75 me-25"> کاربران فعال</span>
            <span>- 97%</span>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <User size={17} className="text-success" />
            <span className="fw-bold ms-75 me-25"> کاربران غیرفعال</span>
            <span>- 3%</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default ChartjsRadarChart;
