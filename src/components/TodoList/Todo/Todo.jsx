import React from 'react';
import { BsCircle } from 'react-icons/bs'
import { AiOutlineStar } from 'react-icons/ai'
import './style.sass'

export const Todo = () => {
  return (
    <div className='todo' >
      <button className='todo-button' ><BsCircle/></button>
      <p className='todo-text' >Some todo to do......</p>
      <button className='todo-button-important' ><AiOutlineStar/></button>
    </div>
  )
}