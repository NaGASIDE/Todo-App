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
        onKeyPress={(e) => {
          if (e.key == `Enter`) {
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
      <button className="add-button" tabIndex={0}>
        ADD
      </button>
    </div>
  );
};
