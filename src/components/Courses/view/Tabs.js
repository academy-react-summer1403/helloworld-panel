// ** React Imports
import { Fragment } from "react";

// ** Reactstrap Imports
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";

// ** Icons Imports
import { User} from "react-feather";

// ** import components

import AllCourseReserve from "../tables/reactstrapReserve";
import AllCourse from "../tables/reactstrap";

const UserTabs = ({ active, toggleTab }) => {
  return (
    <Fragment>
      <Nav pills className="mb-2">
        <NavItem>
          <NavLink active={active === "1"} onClick={() => toggleTab("1")}>
            <User className="font-medium-3 me-50" />
            <span className="fw-bold">دوره ها</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={active === "2"} onClick={() => toggleTab("2")}>
            <User className="font-medium-3 me-50" />
            <span className="fw-bold">دوره های رزرو شده</span>
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={active}>
        <TabPane tabId="1">
          <AllCourse />
        </TabPane>
        <TabPane tabId="2">
          <AllCourseReserve/>
        </TabPane>
      </TabContent>
    </Fragment>
  );
};
export default UserTabs;
