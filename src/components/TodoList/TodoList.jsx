import React, { useContext } from 'react';
import { ThemeContext } from '.././Main/Main'
import { useSelector } from 'react-redux';
import { Todo } from './Todo/Todo';
import './style.sass';
import { ImportantTodo } from '../Main/Pages/Important/ImportantList/ImportantTodo/ImportantTodo';

export const TodoList = () => {
  const theme = useContext(ThemeContext)
  let todos = useSelector((state) => state.todo);
  let importantTodos = useSelector((state) => state.importantTodos);
  let s = ``
  if (todos.length > 3) {s = `none` }

  return (
    <div className={`todo-list todo-list-${theme}`} style={{background: s}} >
      {importantTodos.map((importantTodo) => {
        return <ImportantTodo key={importantTodo.id} todo={importantTodo} />;
      })}
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </div>
  );
};
