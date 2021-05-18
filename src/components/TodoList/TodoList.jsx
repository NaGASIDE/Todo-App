import React, { useContext } from 'react';
import { ThemeContext } from '.././Main/Main'
import { useSelector } from 'react-redux';
import { Todo } from './Todo/Todo';
import './style.sass';

export const TodoList = () => {
  const theme = useContext(ThemeContext)
  let todos = useSelector((state) => state.todo);
  let s = ``
  if (todos.length > 3) {s = `none` }

  return (
    <div className={`todo-list todo-list-${theme}`} style={{background: s}} >
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </div>
  );
};
