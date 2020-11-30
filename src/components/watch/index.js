import React from 'react'

import './watch.css'

const Watch = props => {
  return (
    <div className='contain'>
      <div className='text'>
        <div className='p'>
          <div className='t'>
            $370,345 <span> +126</span>{' '}
          </div>
          <div className='n'>This month</div>
        </div>
      </div>

      <button className='watch'>watch</button>
    </div>
  )
}

export default Watch
