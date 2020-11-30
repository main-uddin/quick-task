import React from 'react'
import f from '../../images/F.png'
import f2 from '../../images/F2.png'
import m from '../../images/M.png'
import m2 from '../../images/M2.png'

import './users.css'

const Users = props => {
  return (
    <div className='users--container'>
      <img src={f2} alt='' className='users--f' />
      <img src={m} alt='' className='users--m' />
      <img src={f} alt='' className='users--f2' />
      <img src={m2} alt='' className='users--m2' />
    </div>
  )
}

export default Users
