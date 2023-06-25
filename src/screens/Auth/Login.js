import React from 'react'
import { loginEndpoint } from '../../spotify'

function Login() {
  return (
    <div className='login-page'>
        {/* <img src="https://www.pngitem.com/pimgs/m/8-81255_music-logo-design-png-transparent-png.png" className='logo' alt="" /> */}
    <a href={loginEndpoint}>
        <div className='login-btn'>
        LOG IN
        </div>
    </a>
    </div>
  )
}

export default Login
