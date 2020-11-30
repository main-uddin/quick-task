import React, { useState } from 'react'
import './selected.css'

import poli from '../../images/icons/Polygon4.jpg'

import arrIcon from '../../images/icons/Forward.png'
import arrdown from '../../images/icons/Forward -bottom.png'

const dataArr = ['APPLE', 'ORANGE', 'BANANA']


const DropDown = props => {
  const [show, setShow] = useState(false)
  const [name, setName] = useState('BANANA')

  const handleDrop = () => {
    setShow(true)
  }
  return (
    <div className='selected__container'>
      <div className='selected__text--root'>
        <div className='selected__text'>
          <div className='selected__text--child'>selected</div>
          <div className='dot'></div>
        </div>
          <div className='unselected__text--child'>Unselected</div>
      </div>

      <div className='textarea__container'>
        <textarea
          className='textarea'
          placeholder='share a reply'
          name=''
        ></textarea>
      </div>
      <div
        className='drop-inp'
        onClick={handleDrop}
        style={
          show ? { border: '1px solid #14142b', background: '#f7f7fc' } : {}
        }
      >
        <div>{name}</div>
        {show ? <img src={arrdown} alt='' /> : <img src={arrIcon} alt='' />}
      </div>
      {show && (
        <div className='drop--value'>
          <ul className='lists'>
            <img className='poligon' src={poli} alt='' />
            {dataArr.map((e, idx) => (
              <li
                className='list'
                key={idx}
                onClick={() => {
                  setName(e)
                  setShow(false)
                }}
                style={name === e ? { color: '#14142b' } : {}}
              >
                {e}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
export default DropDown
