import React from 'react';
import { TodoInput } from '../../../TodoInput/TodoInput'
import { TodoList } from '../../../TodoList/TodoList'
import './style.sass'
export function Important() {
  return (
    <div >
      <h2 className='importamt-title' >Important</h2>
       <TodoInput />
       <TodoList />
    </div>
  )
}