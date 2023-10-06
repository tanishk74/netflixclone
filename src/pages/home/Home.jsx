import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
import axios from "axios";
import './home.scss';

const Home = ({type}) => {
  const [lists,setLists] = useState([]);
  const [genre,setGenre] = useState(null);


  useEffect(()=>{
    const getRandomLists = async()=>{
      try{
        const res = await axios.get(`lists${type ? "?type=" + type : ""}${genre ? "&genre="+genre:""}`,{
          headers:{
            token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZWNhZjM2MmUxMjMzNzJiOTk5YmM0OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3ODI2NDQwOSwiZXhwIjoxNjc4Njk2NDA5fQ.NREoAtQB5berb3ddNF_QxsRfyeM42Vtyca5SwuGSKjo"

          },
        }
        );
        setLists(res.data);
      }catch(err){
        console.log(err)
      }
    }
    getRandomLists();
  },[type,genre])
  return (
    <div className='home'>
        <Navbar></Navbar>
        <Featured type={type}></Featured>
        {lists.map((list)=>(
          <List list={list}></List>
        ))}
    </div>
  )
}

export default Home