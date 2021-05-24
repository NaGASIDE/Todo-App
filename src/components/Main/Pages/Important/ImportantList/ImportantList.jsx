import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { ImportantTodo } from './ImportantTodo/ImportantTodo';
import { ThemeContext } from '../../../Main'
import './style.sass';

export const ImportantList = () => {

  const theme = useContext(ThemeContext)
  let importantTodos = useSelector((state) => state.importantTodos);
  let s = ``
  if (importantTodos.length > 3) {s = `none` }

  return (
    <div className={`important-todo-list important-todo-list-${theme}` } style={{background: s}} >
      {importantTodos.map((importantTodo) => {
        return <ImportantTodo key={importantTodo.id} todo={importantTodo} />;
      })}
    </div>
  );
};