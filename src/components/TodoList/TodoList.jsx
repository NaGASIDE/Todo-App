import React from 'react';
import { useSelector } from 'react-redux'
import { Todo } from './Todo/Todo'
import './style.sass'

export const TodoList = () => {
  let todos = useSelector(state => state) 
  return (
    <div className={`todo-list`} >
      {todos.map(todo => {
        return <Todo key={todo.id} todo={todo} />
      })}
    </div>
  )
}