import React from 'react';
import { FaLightbulb } from 'react-icons/fa'
import './style.sass'

export const Suggestions = () => {
  return (
    <div>
      <button className='suggestions-button' ><FaLightbulb /> Suggestions</button>
    </div>
  )
}