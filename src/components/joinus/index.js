import React from 'react'
import { Input } from '../../uiComponents'
import './joinus.css'
import arrIcon from '../../images/icons/Forward-Arrow.png'

import cros from '../../images/icons/Close-black.png'

const JoinUs = props => {
  return (
    <div className='joinus--container'>
      <div className="crox">
        <div></div>
        <img src={cros} alt=""/>
      </div>
      <h1 className='joinus--heading'>Join our mailing list.</h1>
      <div className='joinus__text'>
        Receive 15% of your order at checkout and save today!
      </div>
      <div className='joinus--tags'>
        <Input placeholder='Email' id='1' />
        <div className='arroButton'>
          <img src={arrIcon} alt='' />
        </div>
      </div>
    </div>
  )
}

export default JoinUs
