import React, { useEffect, useState } from 'react'
import { IconContext } from "react-icons";
import {AiFillPlayCircle} from 'react-icons/ai'
import apiClient from '../../spotify'
import './library.css'
import { useNavigate } from 'react-router-dom';

function Library() {

   const[playlist,setPlaylist]=useState([])

useEffect(()=>{
  apiClient.get("me/playlists").then((response)=>{
    setPlaylist(response.data.items)
    console.log(response.data.items);
    })
},[])

const navigate=useNavigate()

const playPlaylist=(id)=>{
  navigate('/player',{state:{id:id}})
}



  return (

  <div className='screen-container'>

    <div className='library-body'>

    {playlist?.map((playlist,index)=>(
       <div className='playlist-card' key={playlist.id} onClick={()=>{playPlaylist(playlist.id)}}>
        <img src={playlist.images[0].url} className='playlist-images' alt="playlist-images" />
       <p className='playlist-title'> {playlist.name}</p> 
       <p className='playlist-subtitle'> {playlist.tracks.total} Songs</p> 
        <div className='playlist-fade' >
        <IconContext.Provider value={{ size: "50px", color: "#E99072" }}>       
           <AiFillPlayCircle />      
        </IconContext.Provider>;
        </div>
        </div>
    ))}
      </div>
    </div>
  )
}

export default Library
