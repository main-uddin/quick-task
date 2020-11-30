import React from 'react'
import AuthTags from '../authTags'
import Cone from '../cone'
import Search from '../search'
import Users from '../users'
import Watch from '../watch'

import './FinalSection.css'

const FinalSection = props => {
  return (
    <div className='final'>
      <Search />
      <div className='finalone'>
        <div className='fineltwo'>
          <Watch />
          <AuthTags />
          <Users />
        </div>
        <Cone />
      </div>
    </div>
  )
}

export default FinalSection
