import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import { Fragment, useState, useEffect } from "react";
import linkedinIcon from "../../../assets/images/logo/linkedin.png";
import telegramIcon from "../../../assets/images/logo/telegram.png";

const Connections = ({ data }) => {
  return (
    <Fragment>
      <Card>
        <CardBody>
          <CardTitle className="mb-75">شبکه های اجتماعی</CardTitle>
          <div className="d-flex mt-2">
            <div className="flex-shrink-0">
              <img
                className="me-1"
                src={telegramIcon}
                alt=""
                height="38"
                width="38"
              />
            </div>
            <div className="d-flex align-item-center justify-content-between flex-grow-1">
              <div className="me-1">
                <p className="fw-bolder mb-0">لینک تلگرام </p>
                <span>
                  {data?.data?.telegramLink && data?.data?.telegramLink !== null
                    ? data?.data?.telegramLink
                    : " در این بخش راه ارتباطی وجود ندارد."}
                </span>
              </div>
            </div>
          </div>
          <div className="d-flex mt-2">
            <div className="flex-shrink-0">
              <img
                className="me-1"
                src={linkedinIcon}
                alt=""
                height="38"
                width="38"
              />
            </div>
            <div className="d-flex align-item-center justify-content-between flex-grow-1">
              <div className="me-1">
                <p className="fw-bolder mb-0">پروفایل لینکدین </p>
                <span>
                  {data?.data?.linkdinProfile &&
                  data?.data?.linkdinProfile !== null
                    ? data?.data?.linkdinProfile
                    : " در این بخش راه ارتباطی وجود ندارد."}
                </span>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default Connections;
