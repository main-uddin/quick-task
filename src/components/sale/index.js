import React from 'react'
import photo from '../../images/Photos.png'

import './sale.css'

const Sale = props => {
  return (
    <div className='sale--container'>
      <div className='sale-items--text-container__left'>
        <div className='sale-items--heading'>Summer Sale</div>
        <div className='sale-items--text'>
          25% Off Now through sunday for all in-store purchases
        </div>
        <button className='btn'>Shop Now</button>
      </div>
      <div className='sale--image-container'>
        <img src={photo} alt='' />
      </div>
    </div>
  )
}

export default Sale
