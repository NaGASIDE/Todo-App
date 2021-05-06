import React from 'react';
import { useDispatch } from 'react-redux';
import { todoActions } from '../../../store/Todo/action' 
import { BsCircle } from 'react-icons/bs';
import { AiOutlineStar } from 'react-icons/ai';
import './style.sass';

export const Todo = ({todo}) => {
  let dispatch = useDispatch()
  return (
    <div className="todo">
      <button className="todo-button check">
        <BsCircle />
      </button>
      <p className="todo-text">{todo.name}</p>
      <button className="todo-button todo-button-important" onClick={() => dispatch(todoActions.deleteTodo(todo.id)) } >
        <AiOutlineStar />
      </button>
    </div>
  );
};
