// ** Reactstrap Imports
import { Card, CardBody, CardText, Button } from 'reactstrap'

// ** Images
import { useEffect, useState } from 'react'
import { getprof } from '../../../core/services/api/panelAdmin';
import { getUserWithId } from '../../../core/services/api/User';
import medal from '../../../assets/images/pages/badge.svg'


const CardMedal = () => {

  const[fname,setFname]=useState([]);


  console.log(fname);


const userrIdd=localStorage.getItem("id")&& localStorage.getItem("id")


  const profileinfo = async () => {
    try {
      const info= await getUserWithId(userrIdd);
      setFname(info)
      console.log(info);

    } catch (error) {
      throw new Error("ERROR: ", error);
    }
  };

 
  
  useEffect(() => {
    profileinfo();
  }, []);
  


  return (
    <Card className='card-congratulations-medal'>
      <CardBody>
        <h5>سلام </h5>
        <CardText className='font-medium-2'> {fname.fName} {fname.lName} </CardText>
        <h1>خوش آمدید!!!</h1>
        {/* <h3 className='mb-75 mt-2 pt-50'>
          <a href='/' onClick={e => e.preventDefault()}>
            $48.9k
          </a>
        </h3>
        <Button color='primary'>View Sales</Button> */}
        <img className='congratulation-medal' src={medal} alt='Medal Pic' />
      </CardBody>
    </Card>
  )
}

export default CardMedal
