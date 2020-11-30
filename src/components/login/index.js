import React from 'react'
import { Button, Input } from '../../uiComponents'

import './login.css'

const Login = props => {
  return (
    <div className='login--container'>
      <h1 className='login--heading'>Login</h1>

      <div className='input'>
        <Input placeholder='Email' id='2' />
      </div>
      <div className='input'>
        <Input placeholder='Password' secondIcon={true} id='3' />
      </div>
      <button className="loginbtn">LogIn</button>
    </div>
  )
}

export default Login
