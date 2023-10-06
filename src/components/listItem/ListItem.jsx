import React,{useEffect, useState} from 'react';
import "./listItem.scss";
import {Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined} from "@material-ui/icons";
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ListItem({index,item}) {
    const [isHovered,setIsHovered]=useState(false)
    const [movie,setMovie]=useState({})

    useEffect(()=>{
      const getMovie = async ()=>{
        try{
          const res = await axios.get("/movies/find/"+item,{
            headers:{
              token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZWNhZjM2MmUxMjMzNzJiOTk5YmM0OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3ODI2NDQwOSwiZXhwIjoxNjc4Njk2NDA5fQ.NREoAtQB5berb3ddNF_QxsRfyeM42Vtyca5SwuGSKjo"
  
            }
          })
          setMovie(res.data)
        }catch(err){
          console.log(err)
        }
      }
      getMovie();
    },[item])
    
  return (
    <Link to={{pathname:"/watch",movie:movie}}>
      <div
      className='listItem' 
      onMouseEnter={()=>setIsHovered(true)} 
      onMouseLeave={()=>setIsHovered(false)}
      style={{left : isHovered && index*225 - 50+ index*2.5}}>
      <img src={movie.img}></img>
      {isHovered && (
      <>
      <video src={movie.trailer} autoPlay={true} loop></video>
      <div className="itemInfo">
        <div className="icons">
            <PlayArrow className='icon'></PlayArrow>
            <Add className='icon'></Add>
            <ThumbUpAltOutlined className='icon'></ThumbUpAltOutlined>
            <ThumbDownOutlined className='icon'></ThumbDownOutlined>
        </div>
        <div className="itemInfoTop">
            <span>{movie.duration}</span>
            <span className='limit'>+{movie.limit}</span>
            <span>{movie.year}</span>
        </div>
        <div className="desc">
            {movie.desc}
        </div>
        <div className="genre">{movie.genre}</div>
      </div>
    </>
      )}
    </div>
    </Link>
  )
}
