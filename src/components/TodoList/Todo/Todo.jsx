import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todoActions } from '../../../store/Todo/action' 
import { BsCircle, BsPencil } from 'react-icons/bs';
import { AiOutlineStar, AiOutlineCheck, AiOutlineCheckCircle } from 'react-icons/ai';
import { RiDeleteBin6Line } from 'react-icons/ri'
import { ContextMenu } from './ContextMenu/ContextMenu'
import { CustomMenu } from './ContextMenu/CustomMenu/CustomMenu'
import './style.sass';

export const Todo = ({todo}) => {
  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  });

  let dispatch = useDispatch()
  const [editable, setEditable] = useState(false)
  const [name, setName] = useState(``)
  const [mouse, setMouse] = useState(false)
  const [showMenu, setShowMenu] = useState(false) 
  return (
    <div className="todo" onContextMenu={() => setShowMenu(true) } >
      <ContextMenu menu={<CustomMenu />} />
      <button className="todo-button check" onMouseOver={() => setMouse(true) } onMouseOut={() => setMouse(false)}  >
        { mouse ? <AiOutlineCheckCircle/> :  <BsCircle />}
      </button>
      <p className="todo-text">{editable ? <input className='todo-text-edit' type='text' value={name} onChange={(e) => setName(e.target.value)} /> : todo.name}</p>
      <button className="todo-button todo-button-edit" onClick={() => {dispatch(todoActions.setTodo({
        ...todo,
        name: name
      }));  setEditable(!editable)}} >
         { editable ? <AiOutlineCheck />  : <BsPencil />}
      </button>
      <button className="todo-button todo-button-important" >
         <AiOutlineStar />
      </button>
      <button className="todo-button todo-button-delete" onClick={() => dispatch(todoActions.deleteTodo(todo.id)) } >
        <RiDeleteBin6Line />
      </button>
    </div>
  );
};

