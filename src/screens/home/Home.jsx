import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Library from '../library/Library'
import Feed from '../feed/Feed'
import Player from '../player/Player'
import Favourite from '../favourite/Favourite'
import Trending from '../trending/Trending'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.css'


function Home() {
  return (
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
