import React from 'react'
import './authTags.css'

const AuthTags = props => {
  return (
    <div className='  auth-tags--container'>
    <button className=" authBtn auth__signup">Sign Up</button>
    <button className=" authBtn auth__login">Log In</button>
    </div>
  )
}

export default AuthTags
