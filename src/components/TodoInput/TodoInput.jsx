import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todoActions } from '../../store/Todo/action';
import { v1 as uuid } from 'uuid';
import './style.sass';

export const TodoInput = () => {
  let dispatch = useDispatch();
  let [name, setName] = useState();
  return (
    <div>
      <input
        className="todo-input"
        type="text"
        placeholder="  Add a task"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        className="add-button"
        onClick={() => {
          dispatch(
            todoActions.addTodo({
              id: uuid(),
              name: name,
            })
          );
          setName('');
        }}
      >
        ADD
      </button>
    </div>
  );
};
