import React, { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { importantTodoActions } from '../../../../../store/Imporatnt/action';
import { ThemeContext } from '../../../Main';
import { v1 as uuid } from 'uuid';
import './style.sass';

export const ImportantInput = () => {
  const theme = useContext(ThemeContext);
  let dispatch = useDispatch();
  let [name, setName] = useState();
  return (
    <div>
      <input
        className={`todo-input ${theme} `}
        type="text"
        placeholder="  Add a task"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        onKeyPress={(e) => {
          if (e.key == `Enter` && name.length > 3) {
            dispatch(
              importantTodoActions.addImportantTodo({
                id: uuid(),
                name: name,
              })
            );
            setName('');
          }
        }}
      />
      <button
        className="add-button"
        tabIndex={0}
        onClick={() => {
          if (name.length > 3) {
            dispatch(
              importantTodoActions.addImportantTodo({
                id: uuid(),
                name: name,
              })
            );
            setName('');
          }
        }}
      >
        ADD
      </button>
    </div>
  );
};