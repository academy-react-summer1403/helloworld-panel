// ** Custom Components

// console.log("ress",getAllCoursesAdmin)

// ** Images
import { useEffect, useState } from "react";

// import avatar1 from "../../../assets/images/Courses/avatar-s-5.jpg";
// import avatar2 from "../../../assets/images/Courses/avatar-s-6.jpg";
// import avatar3 from "../../../assets/images/Courses/avatar-s-7.jpg";
// import noImage from "../../../assets/images/Courses/noImage.png";
// ** Icons Imports
import { MoreVertical, Edit, Trash } from "react-feather";

// ** Reactstrap Imports
import {
  Table,
  Badge,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";

import { getDashRep } from "../../core/services/api/Dashboard";








const CompanyTable = ({  }) => {


  const [data, setdata] = useState([]);

  const getDashboardReport = async () => {
    const report = await getDashRep();
    console.log("report:", report);
    setdata(report);
  };

  useEffect(() => {
    getDashboardReport();
  }, []);
  
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>نام تکنولوژی</th>
          <th> تعداد نفرات </th>
          <th>  آیدی</th>
       
        </tr>
      </thead>
      <tbody>
        <>
          {data?.data &&
            data?.data?.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                   
                    <span className="align-middle fw-bold">
                      {item?.techName}
                    </span>
                  </td>
                  <td>
                    <span className="align-middle fw-bold">
                      {item?.countUsed}
                    </span>
                  </td>
                  <td>
                    <span className="align-middle fw-bold">
                      {item?.id}
                    </span>
                  </td>
                

                 
                </tr>

              );
            })}
        </>
      </tbody>
    </Table>
  );
};

export default CompanyTable;
