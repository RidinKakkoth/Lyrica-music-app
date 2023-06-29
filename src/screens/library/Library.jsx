import React, { useEffect, useState } from 'react'
import apiClient from '../../spotify'
import './library.css'

function Library() {

   const[playlist,setPlaylist]=useState([])

useEffect(()=>{
  apiClient.get('me/playlists').then((response)=>{
    setPlaylist(response.data.items)
    console.log(response.data.items);
    })
},[])

  return (

  <div className='screen-container'>

    <div className='library-body'>

    {playlist?.map((playlist)=>(
       <div className='playlist-card'>
        <img src={playlist.images[0].url} className='playlist-images' alt="playlist-images" />
       <p className='playlist-title'> {playlist.name}</p> 
       <p className='playlist-subtitle'> {playlist.tracks.total} Songs</p> 
        {/* <div className='plalist-fade'></div> */}
        </div>
    ))}
      </div>
    </div>
  )
}

export default Library
