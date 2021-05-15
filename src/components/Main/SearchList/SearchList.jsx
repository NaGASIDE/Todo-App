import React from 'react';
import { useSelector } from 'react-redux';
import { Todo } from '../../TodoList/Todo/Todo';
import './style.sass';

export const SearchList = () => {
  let todos = useSelector((state) => state.todo);
  return (
    <div className={`todo-list`}>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </div>
  );
};
