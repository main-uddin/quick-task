import React from 'react'

import './progress.css'

const Progress = props => {
  return (
    <div className='progress'>
      <div
        className='progress--done'
        style={{ opacity: 1, width: '50%' }}
      ></div>
    </div>
  )
}

export default Progress
