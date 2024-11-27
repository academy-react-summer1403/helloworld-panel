// ** React Imports
import { Fragment } from "react";

// ** Reactstrap Imports
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";

// ** Icons Imports
import { CreditCard, FileText, Lock, User, Users } from "react-feather";

import Group from "./Group";
import Cmt from "./reactstrap";
import UserCourse from "./UserCourse";
import Payment from "./Payment";

// ** User Components
// import CoursesGroups from "../courseGroups/TableGr";
// import CourseCom from "../courseGroups/comment/Comment";
// import UsersCourses from "../userCorses/Table";
// import Payments from "../payment/payments";

const UserTabs = ({ active, toggleTab, dataComment }) => {
  console.log("object id", dataComment?.data);

  return (
    <Fragment>
      <Nav pills className="mb-2">
        <NavItem>
          <NavLink active={active === "1"} onClick={() => toggleTab("1")}>
            <User className="font-medium-3 me-50" />
            <span className="fw-bold">کاربر ها</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={active === "2"} onClick={() => toggleTab("2")}>
            <Users className="font-medium-3 me-50" />
            <span className="fw-bold">گروه ها</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={active === "3"} onClick={() => toggleTab("3")}>
            <FileText className="font-medium-3 me-50" />
            <span className="fw-bold">کامنت ها</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={active === "4"} onClick={() => toggleTab("4")}>
            <CreditCard className="font-medium-3 me-50" />
            <span className="fw-bold">پرداختی ها</span>
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={active}>
        <TabPane tabId="1">
          <UserCourse dataComment={dataComment} />
        </TabPane>

        <TabPane tabId="2">
          <Group />
        </TabPane>

        <TabPane tabId="3">
          {/* <>
          {dataComment?.data.map((item, index) => {
            return (
              <Test
                key={index}
                title={item.title}
              />
            );
          })}
        </> */}
          <Cmt dataComment={dataComment} />
        </TabPane>
        <TabPane tabId="4">
          <Payment />
        </TabPane>
      </TabContent>
    </Fragment>
  );
};
export default UserTabs;
