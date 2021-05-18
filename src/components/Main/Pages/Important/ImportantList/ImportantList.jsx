import React from 'react';
import { useSelector } from 'react-redux';
import { ImportantTodo } from './ImportantTodo/ImportantTodo';
import './style.sass';

export const ImportantList = () => {
  let importantTodos = useSelector((state) => state.importantTodos);

  return (
    <div className={`todo-list`} >
      {importantTodos.map((importantTodo) => {
        return <ImportantTodo key={importantTodo.id} todo={importantTodo} />;
      })}
    </div>
  );
};