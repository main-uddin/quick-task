import React from 'react'
import './cone.css'
import cone from '../../images/cone.png'

import Tag from '../../images/icons/Tag.png'

const Cone = props => {
  return (
    <div className='core__container'>
      <div className='img'>
        <img src={cone} alt='' />
      </div>
      <div className='text__contain'>
        <div className='cone__heading'>waffle cone</div>
        <div className='cone__text'>12-pack Box</div>
        <div className='button__container'>
          <div className='button__container--left'>
            <div className='button__left'>
              <button className='button'>-</button>
            </div>
            <div className='count'>1</div>
            <div className='button__right'>
              <button className='button'>+</button>
            </div>
          </div>

          <div className='button__container__right'>
            <img src={Tag} alt='' />
            <div className='button__right--text'>Dessert</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Cone
