import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import "./featured.scss";
import axios from 'axios';

export default function Featured({type}) {
  const [content,setContent] =useState({});

  useEffect(()=>{
    const getRandomContent = async ()=>{
      try{
        const res =await axios.get(`/movies/random?type=${type}`,{
          headers:{
            token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZWNhZjM2MmUxMjMzNzJiOTk5YmM0OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3ODI2NDQwOSwiZXhwIjoxNjc4Njk2NDA5fQ.NREoAtQB5berb3ddNF_QxsRfyeM42Vtyca5SwuGSKjo"

          },
        })
        setContent(res.data[0]);
      }catch(err){
        console.log(err)
      }
    }
    getRandomContent();
  },[type])
  return (
    <div className='featured'>
        {type && (
            <div className="category">
                <span>{type === "movies" ? "Movies" : "Series" }</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventue">Adventure</option>
                    <option value='comedy'>Comedy</option>
                    <option value='crime'>Crime</option>
                    <option value='fantasy'>Fantasy</option>
                    <option value='historical'>Historical</option>
                    <option value='horror'>Horror</option>
                    <option value='romance'>Romance</option>
                    <option value='sci-fi'>Sci-fi</option>
                    <option value='thriller'>Thriller</option>
                    <option value='western'>Western</option>
                    <option value='animation'>Animation</option>
                    <option value='drama'>Drama</option>
                    <option value='documentory'>Documentory</option>
                </select>
            </div>
        )}
      <img  src={content.img}></img>
      <div className="info">
        <img src={content.imgTitle}></img>
        <span className='desc'>{content.desc}
        </span>
        <div className="buttons">
            <button className='play'>
                <PlayArrow></PlayArrow>
                <span>play</span>
            </button>
            <button className='more'>
                <InfoOutlined></InfoOutlined>
                <span>More Info</span>
            </button>
        </div>
      </div>
    </div>
  )
}
