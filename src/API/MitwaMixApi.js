import {useState,useEffect} from 'react'
import axios from 'axios'

const MitwaMixApi = () => {
    const [mitwaMixData,setMitwaMixData]=useState([])
    const url="https://mitwatv.com/api/dashboard?type=ugc"
    const getData=async()=>{
        const response=await axios.get(url)
       setMitwaMixData(response.data)
        
    }
    useEffect(()=>{
        getData();
    },[])
  return {
    mitwaMixData: [mitwaMixData,setMitwaMixData]
  }
 
}

export default MitwaMixApi