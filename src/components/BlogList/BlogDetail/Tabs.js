// ** React Imports
import { Fragment , useState, useEffect} from 'react'
import { useParams } from "react-router-dom";

// ** Reactstrap Imports
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'
import toast from "react-hot-toast";


// ** Icons Imports
import { User, Lock, Bookmark, Bell, Link } from 'react-feather'





import { getBlogWithId } from '../../../core/services/api/Blogs';
import UserComments from './UserComments';

const UserTabs = ({ active, toggleTab  }) => {

  const [data, setdata] = useState();
  const { id } = useParams();
  // console.log("id:", id);
  const getList = async (id) => {
    try {
      const users = await getBlogWithId(id);
      console.log("blogggggggg:", users);
      setdata(users);
    } catch (error) {
      throw new Error("ERROR: ", error);
    }
  };
  useEffect(() => {
    getList(id);
  }, []);


 

  // const [dataComment, setdataComment] = useState();

  

  // const getComeent = async (id) => {
  //   try {
  //     const userComent = await getComments(id);
  //     console.log("comenttttttt:", userComent);
  //     setdataComment(userComent);
  //   } catch (error) {
  //     throw new Error("ERROR: ", error);
  //   }
  // };
  // useEffect(() => {
  //   getComeent(id);
  // }, []);


  

  return (
    <Fragment>
      <Nav pills className='mb-2'>
        <NavItem>
          <NavLink >
            <User className='font-medium-3 me-50' />
            <span className='fw-bold'>کامنت‌ها</span>
          </NavLink>
        </NavItem>
      
      </Nav>
      <TabContent>
       
        <TabPane >
         <UserComments data={data}/>
        </TabPane>
        

      </TabContent>
    </Fragment>
  )
}
export default UserTabs
