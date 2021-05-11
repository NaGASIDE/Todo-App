import React, { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { todoActions } from '../../store/Todo/action';
import { ThemeContext } from '../../components/Main/Main';
import { v1 as uuid } from 'uuid';
import './style.sass';

export const TodoInput = () => {
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
          if (e.key == `Enter` && name.length > 5) {
            dispatch(
              todoActions.addTodo({
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
          if (name.length > 5) {
            dispatch(
              todoActions.addTodo({
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
