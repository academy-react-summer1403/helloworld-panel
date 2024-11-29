// ** React Imports
import { Fragment , useState, useEffect} from 'react'
import { useParams } from "react-router-dom";

// ** Reactstrap Imports
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'
import toast from "react-hot-toast";


// ** Icons Imports
import { User, Lock, Bookmark, Bell, Link } from 'react-feather'
import Connections from './Connections'
import { getUserWithId } from '../../../core/services/api/User'
import UserCourse from './UserCourse';
import UserReserveCourse from './UserReserveCourse';
import { getComments } from '../../../core/services/api/User';
import UserComments from './UserComments';
import { acceptComment } from '../../../core/services/api/User';
import { rejectComment } from '../../../core/services/api/User';
// ** User Components
// import InvoiceList from './InvoiceList'
// import SecurityTab from './SecurityTab'
// import Connections from './Connections'
// import BillingPlanTab from './BillingTab'
// import UserTimeline from './UserTimeline'
// import Notifications from './Notifications'
// import UserProjectsList from './UserProjectsList'

const UserTabs = ({ active, toggleTab  }) => {

  const [data, setdata] = useState();
  // console.log("data:", data);
  const { id } = useParams();
  console.log("id:", id);
  const getDetail = async (id) => {
    try {
      const user = await getUserWithId(id);
      console.log("userrrr:",user)

      setdata(user);
    } catch (error) {
      throw new Error("ERROR: ", error);
    }
  };
  useEffect(() => {
    getDetail(id);
  }, [id]);


  const [dataComment, setdataComment] = useState();

  

  const getComeent = async (id) => {
    try {
      const userComent = await getComments(id);
      console.log("comenttttttt:", userComent);
      setdataComment(userComent);
    } catch (error) {
      throw new Error("ERROR: ", error);
    }
  };
  useEffect(() => {
    getComeent(id);
  }, []);

  const [refetchUserCom, setRefetchUserCom] = useState(1);


  const accptCmnt = async (id) => {
    try {
      const response = await acceptComment(id);
      console.log("objecttttt",response);
      // response.success ? setRefetchUserCom(refetchUserCom + 1) : "";
      // response.success ? toast.success(response.message) : "";
      
    }catch (error) {
      throw new Error("ERROR: ", error);
    }
  };

  // const rejCmnt = async (id) => {
  //   try {
  //     const response = await rejectComment(id);
  //     response.success ? setRefetchUserCom(refetchUserCom + 1) : "";
  //     response.success ? toast.success(response.message) : "";

  //   } catch (error) {
  //     throw new Error("ERROR: ", error);
  //   }
  // };
  

  return (
    <Fragment>
      <Nav pills className='mb-2'>
        <NavItem>
          <NavLink active={active === '1'} onClick={() => toggleTab('1')}>
            <User className='font-medium-3 me-50' />
            <span className='fw-bold'>دوره‌ها</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={active === '2'} onClick={() => toggleTab('2')}>
            <Bookmark className='font-medium-3 me-50' />
            <span className='fw-bold'>دوره‌های رزرو شده</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={active === '3'} onClick={() => toggleTab('3')}>
            <Bell className='font-medium-3 me-50' />
            <span className='fw-bold'>نظرات</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={active === '4'} onClick={() => toggleTab('4')}>
            <Link className='font-medium-3 me-50' />
            <span className='fw-bold'>سایر اطلاعات کاربر</span>
          </NavLink>
        </NavItem>
      
      </Nav>
      <TabContent activeTab={active}>
        <TabPane tabId='1'>
          <UserCourse data={data}/>
        </TabPane>
        <TabPane tabId='2'>
          <UserReserveCourse data={data}/>
        </TabPane>
        <TabPane tabId='3'>
         <UserComments dataComment={dataComment}/>
        </TabPane>
        <TabPane tabId='4'>
        <Connections   data={data}/>

        </TabPane>
        

      </TabContent>
    </Fragment>
  )
}
export default UserTabs
