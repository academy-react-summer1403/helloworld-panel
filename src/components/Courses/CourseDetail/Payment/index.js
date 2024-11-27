import { Table, Badge } from "reactstrap";

import { Fragment, useEffect, useState } from "react";

import { Card } from "reactstrap";

import { getPayList } from "../../../../core/services/api/Coueses/getCourseDeatil";
import { useParams } from "react-router-dom";

const Payments = () => {
  const [notPayment, setNotPayment] = useState([]);
  const [Payment, setPayment] = useState([]);
  const { id } = useParams();

  const getPayment = async (id) => {
    try {
      const result = await getPayList(id);
      // console.log("users comment:", CoursesId);
      setNotPayment(result.data.notDonePays);
      setPayment(result.data.donePays);
    } catch (error) {
      throw new Error("ERROR: ", error);
    }
  };
  useEffect(() => {
    getPayment(id);
  }, []);

  return (
    <Fragment>
      <Card className="">
        <div className="react-dataTable">
          <Table hover>
            <thead>
              <tr className="text-center">
                <th className=" px-0"> نام کاربر</th>
                <th className=" px-0">گروه دوره </th>
                <th className=" px-0"> وضعیت پرداختی</th>
              </tr>
            </thead>
            {notPayment.map((item, index) => {
              return (
                <tbody key={index}>
                  <tr className="text-center">
                    <td className=" px-0">{item?.studentName}</td>

                    <td className=" px-0">{item?.groupName}</td>

                    <td className=" px-0">
                      <Badge
                        pill
                        color={
                          item?.peymentDone ? "light-primary" : "light-danger"
                        }
                        className="me-1"
                      >
                        {item?.peymentDone ? " پرداخت شده" : "پرداخت نشده"}
                      </Badge>
                    </td>
                  </tr>
                </tbody>
              );
            })}
            {Payment.map((item, index) => {
              return (
                <tbody key={index}>
                  <tr className="text-center">
                    <td className=" px-0">{item?.studentName}</td>

                    <td className=" px-0">{item?.groupName}</td>

                    <td className=" px-0">
                      <Badge
                        pill
                        color={
                          item?.peymentDone ? "light-primary" : "light-danger"
                        }
                        className="me-1"
                      >
                        {item?.peymentDone ? " پرداخت شده" : "پرداخت نشده"}
                      </Badge>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </Table>
        </div>
      </Card>
    </Fragment>
  );
};

export default Payments;
