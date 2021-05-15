import React from 'react';
import { getDate } from './getDate.js'
import './style.sass'

export const Date = () => {
  return (
    <>
      <p className='date-text' >{getDate()}</p>
    </>
  )
}