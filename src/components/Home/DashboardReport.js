// ** Custom Components
import Avatar from "@components/common/avatar";

// ** Icons Imports
import * as Icon from "react-feather";
import { useEffect, useState } from "react";
import { faNumber } from "../../utility/FaNumber";

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap";
import { getDashReport } from "../../core/services/api/Dashboard";

const CardTransactions = () => {
  const [data, setdata] = useState([]);

  const getDashboardReport = async () => {
    const report = await getDashReport();
    console.log("report:", report);
    setdata(report);
  };

  useEffect(() => {
    getDashboardReport();
  }, []);

  const transactionsArr = [
    {
      title: "Bank Transfer",
      color: "light-success",
      subtitle: "Add Money",
      amount: "+ $480",
      Icon: Icon["Check"],
    },
  ];

  const renderTransactions = () => {
    return transactionsArr.map((item) => {
      return (
        <>
          <div className="transaction-item">
            <div className="d-flex">
              <Avatar
                className="rounded"
                color={data?.data?.color}
                icon={<item.Icon size={18} />}
              />
              <div>
                <h6>تمام پرداختی‌ها</h6>

                <small className="transaction-title">
                  {data?.data?.allPaymentCost}
                </small>
              </div>
            </div>
          </div>

          <div className="transaction-item">
            <div className="d-flex">
              <Avatar
                className="rounded"
                color={data?.data?.color}
                icon={<item.Icon size={18} />}
              />
              <div>
                <h6>تمام رزرو‌ها</h6>

                <small className="transaction-title">
                  {data?.data?.allReserve}
                </small>
              </div>
            </div>
          </div>

          <div className="transaction-item">
            <div className="d-flex">
              <Avatar
                className="rounded"
                color={data?.data?.color}
                icon={<item.Icon size={18} />}
              />
              <div>
                <h6> رزرو‌های تایید شده</h6>

                <small className="transaction-title">
                  {data?.data?.allReserveAccept}
                </small>
              </div>
            </div>
          </div>

          <div className="transaction-item">
            <div className="d-flex">
              <Avatar
                className="rounded"
                color={data?.data?.color}
                icon={<item.Icon size={18} />}
              />
              <div>
                <h6> رزرو‌های تایید نشده</h6>

                <small className="transaction-title">
                  {data?.data?.allReserveNotAccept}
                </small>
              </div>
            </div>
          </div>

          <div className="transaction-item">
            <div className="d-flex">
              <Avatar
                className="rounded"
                color={data?.data?.color}
                icon={<item.Icon size={18} />}
              />
              <div>
                <h6> تمام کاربران</h6>

                <small className="transaction-title">
                  {data?.data?.allUser}
                </small>
              </div>
            </div>
          </div>

          <div className="transaction-item">
            <div className="d-flex">
              <Avatar
                className="rounded"
                color={data?.data?.color}
                icon={<item.Icon size={18} />}
              />
              <div>
                <h6> کاربران غیرفعال</h6>

                <small className="transaction-title">
                  {data?.data?.deactiveUsers}
                </small>
              </div>
            </div>
          </div>

          <div className="transaction-item">
            <div className="d-flex">
              <Avatar
                className="rounded"
                color={data?.data?.color}
                icon={<item.Icon size={18} />}
              />
              <div>
                <h6> کاربران کامل نشده</h6>

                <small className="transaction-title">
                  {data?.data?.inCompeletUserCount}
                </small>
              </div>
            </div>
          </div>
        </>
      );
    });
  };

  return (
    <Card className="card-transaction">
      <CardHeader>
        <CardTitle tag="h4">اطلاعات بیشتر</CardTitle>
        <Icon.MoreVertical size={18} className="cursor-pointer" />
      </CardHeader>
      <CardBody>{renderTransactions()}</CardBody>
    </Card>
  );
};

export default CardTransactions;
