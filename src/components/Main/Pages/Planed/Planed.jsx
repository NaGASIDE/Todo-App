import React from 'react';
import { TodoInput } from '../../../TodoInput/TodoInput'
import { TodoList } from '../../../TodoList/TodoList'
import './style.sass'

export function Planed() {
  return (
    <div >
      <h2 className='planed-title' >Planed</h2>
      <TodoInput /> 
      <TodoList />
    </div>
  )
}