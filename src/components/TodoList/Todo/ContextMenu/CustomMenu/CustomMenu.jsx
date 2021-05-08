import React from 'react';
import { CgCalendarToday, CgCalendarNext, CgTrash } from 'react-icons/cg'
import { AiFillHome, AiFillFlag, AiFillStar } from 'react-icons/ai' 
import './style.sass'

export const CustomMenu = () => {
  return (
    <div >
      <button className='custom-menu-button' > <AiFillHome className='custom-menu-button-icon' /> Add to My Day</button>
      <button className='custom-menu-button'> <AiFillStar className='custom-menu-button-icon' /> Add to Important</button>
      <button className='custom-menu-button'> <AiFillFlag className='custom-menu-button-icon' /> Add to Planed</button>
      <hr className='custom-menu-line' />
      <button className='custom-menu-button'> <CgCalendarToday className='custom-menu-button-icon' /> Due today</button>
      <button className='custom-menu-button'> <CgCalendarNext className='custom-menu-button-icon' /> Due tomorrow</button>
      <hr className='custom-menu-line' />
      <button className='custom-menu-button'> <CgTrash className='custom-menu-button-icon' />  Delete task</button>
    </div>

  )
}
