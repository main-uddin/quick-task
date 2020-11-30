import React from 'react'
import './search.css'
import search from '../../images/icons/Search.png'

import Configer from '../../images/icons/Configure.png'

const Search = props => {
  return (
    <div className='search__container'>
      <div className='search__left'>
        <img src={search} alt='' />
        <input type='text' />
      </div>

      <div className='search__button'>
        <img src={Configer} alt='' />
      </div>
    </div>
  )
}
export default Search
