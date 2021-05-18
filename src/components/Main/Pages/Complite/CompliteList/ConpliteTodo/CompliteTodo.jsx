import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { ThemeContext } from '../../../../Main'
import { ComploteActions } from '../../../../../../store/Complite/action'
import { todoActions } from '../../../../../../store/Todo/action'
import { AiFillCheckCircle } from 'react-icons/ai'
import { BiTrash } from 'react-icons/bi'
import './style.sass'

export const CompliteTodo = ({todo}) => {
  const dispatch = useDispatch()
  const theme = useContext(ThemeContext)
  return (
    <div className={`complite-todo complite-todo-${theme}`} >
      <AiFillCheckCircle className='complite-todo-button' onClick={() => {
        dispatch(todoActions.addTodo(todo));
        dispatch(ComploteActions.deletecompleteTodo(todo.id))
      }}  />
      <p className='complite-todo-text'>{todo.name}</p>
      <BiTrash className='complite-todo-trash' onClick={() => {
        dispatch(ComploteActions.deletecompleteTodo(todo.id))
      }} />
    </div>
  )
}