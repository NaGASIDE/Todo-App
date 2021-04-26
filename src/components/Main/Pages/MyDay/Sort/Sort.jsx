import React from 'react';
import {BsArrowUpDown} from 'react-icons/bs'
import './style.sass'

export const Sort = () => {
  return (
    <div>
      <button className='sort-button'><BsArrowUpDown/> Sort</button>
    </div>
  )
}