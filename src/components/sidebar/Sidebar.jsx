import React,{useEffect, useState} from 'react'
import './sidebar.css'
import SidebarButton from './SidebarButton'
import {MdFavorite} from 'react-icons/md'
import {FaPlay,FaGripfire,FaSignOutAlt} from 'react-icons/fa'
import {IoLibrary} from 'react-icons/io5'
import {MdSpaceDashboard} from 'react-icons/md'
import apiClient from '../../spotify'
function Sidebar() {
  
  const [image,setImage]=useState("https://static.thenounproject.com/png/363633-200.png")
  useEffect(()=>{
    apiClient.get("me").then((response)=>{
        setImage(response.data.images[0].url)
    })
  })
  
  
  return (
    <div className='sidebar-container'>
      <img src={image} className='profile-img' alt="profile" />
      
        <div>
        <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard/>} />
        <SidebarButton title="Trending" to="/trending" icon={<FaGripfire/>} />
        <SidebarButton title="Player" to="/player" icon={<FaPlay/>} />
        <SidebarButton title="Favourites" to="/favourite" icon={<MdFavorite/>} />
        <SidebarButton title="Library" to="/" icon={<IoLibrary/>} />
  
        </div>
        <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt/>}  />
    </div>
  )
}

export default Sidebar
