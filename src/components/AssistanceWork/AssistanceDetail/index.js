import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "@styles/react/apps/app-users.scss";
import { getAssisWithId } from '../../../core/services/api/AssistanceWork';

const AssistanceDetail = () => {

    const [data, setdata] = useState();
    const { id } = useParams();
    console.log("assissssid:", id);
    const getList = async (id) => {
      try {
        const assisdetail = await getAssisWithId(id);
        console.log("assisdetail:", assisdetail);
        setdata(assisdetail);
      } catch (error) {
        throw new Error("ERROR: ", error);
      }
    };
    useEffect(() => {
      getList(id);
    }, []);
  
    const [active, setActive] = useState('1')
  
    const toggleTab = tab => {
      if (active !== tab) {
        setActive(tab)
      }
    }
  return (
    <div>
      
    </div>
  )
}

export default AssistanceDetail
