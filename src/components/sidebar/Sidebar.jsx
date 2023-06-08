import React from 'react'
import './sidebar.css'
import SidebarButton from './SidebarButton'
import {MdFavorite} from 'react-icons/md'
import {FaPlay,FaGripfire,FaSignOutAlt} from 'react-icons/fa'
import {IoLibrary} from 'react-icons/io5'
import {MdSpaceDashboard} from 'react-icons/md'
function Sidebar() {
  return (
    <div className='sidebar-container'>
      <img src="https://yt3.ggpht.com/yti/AHyvSCAxk014Ut9MmMzx0gPRDcHRLsnvrfq-Ch_yf9HwEQ=s88-c-k-c0x00ffffff-no-rj-mo" className='profile-img' alt="profile" />
      
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
