import React, { useEffect, useState } from 'react'
import apiClient from '../../spotify'

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

    <div className='playlist-container'></div>

    {playlist?.map((playlist)=>{
      return <div>{playlist.name}</div>
    } )}
      
    </div>
  )
}

export default Library
