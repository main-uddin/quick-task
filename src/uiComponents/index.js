import React, { useState } from 'react'
import email from '../images/icons/email.png'
import close from '../images/icons/Close.png'
import eye from '../images/icons/eye.png'

import './CustomUi.css'

export const Input = props => {
  const [data, setData] = useState('')
  return (
    <div className='input-group'>
      <div className='input__logo'>
        {props.placeholder === 'Email' && <img src={email} alt='' />}
        {props.placeholder === 'Password' && <img src={eye} alt='' />}
      </div>
      <div className='input__lavel'>
        <input
          className='form-control'
          type='text'
          id={props.id}
          placeholder={props.placeholder}
          onChange={e => setData(e.target.value)}
        />
        <label for={props.id} style={data !== '' ? { bottom: '30px' } : {}}>
          {props.placeholder}
        </label>
      </div>
      {props.secondIcon && (
        <div className='req-mark'>
          <img src={close} alt='' />
        </div>
      )}
    </div>
  )
}
