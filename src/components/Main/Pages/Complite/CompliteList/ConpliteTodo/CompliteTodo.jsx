import React, { useContext } from 'react'
import { todoActions } from '../../../../../../store/Todo/action'
import { ThemeContext } from '../../../../Main'
import { AiFillCheckCircle } from 'react-icons/ai'
import { BiTrash } from 'react-icons/bi'
import './style.sass'

export const CompliteTodo = () => {
  const theme = useContext(ThemeContext)
  return (
    <div className={`complite-todo complite-todo-${theme}`} >
      <AiFillCheckCircle className='complite-todo-button'  />
      <p className='complite-todo-text'>asdasdasd</p>
      <BiTrash className='complite-todo-trash' />
    </div>
  )
}