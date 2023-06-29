import React,{useEffect, useState} from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { setClientToken } from '../../spotify'
import Library from '../library/Library'
import Feed from '../feed/Feed'
import Player from '../player/Player'
import Favourite from '../favourite/Favourite'
import Trending from '../trending/Trending'
import Sidebar from '../../components/sidebar/Sidebar'
import Login from '../Auth/Login'
import './home.css'


function Home() {

  const [token,setToken]=useState("")

  useEffect(()=>{
    const token=localStorage.getItem("token")
    const hash=window.location.hash
    window.location.hash=''

    if(!token&&hash){
      const _token=hash.split('&')[0].split('=')[1]
      window.localStorage.setItem("token",_token)
      setToken(_token)
      setClientToken(_token)
    }
    else{
      setToken(token)
      setClientToken(token)
      
    }

  },[])

  return !token?(
    <Login/>
  ): (
      <Router>
        <div className='main-body'>
            <Sidebar/>
            <Routes>
             <Route path='/' element={<Library/>} />
             <Route path='/feed' element={<Feed/>} />
             <Route path='/player' element={<Player/>} />
             <Route path='/favourite' element={<Favourite/>} />
             <Route path='/trending' element={<Trending/>} />
            </Routes>
        </div>
      </Router>
  )
}

export default Home
