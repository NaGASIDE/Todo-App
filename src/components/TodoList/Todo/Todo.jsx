import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../Main/Main'
import { useDispatch } from 'react-redux';
import { todoActions } from '../../../store/Todo/action' 
import { ComploteActions } from '../../../store/Complite/action'
import { importantTodoActions }  from '../../../store/Imporatnt/action'
import { BsCircle, BsPencil, BsPlusCircle  } from 'react-icons/bs';
import { AiOutlineStar, AiOutlineCheck} from 'react-icons/ai';
import { RiDeleteBin6Line } from 'react-icons/ri'
import { ContextMenu } from './ContextMenu/ContextMenu'
import { CustomMenu } from './ContextMenu/CustomMenu/CustomMenu'
import { useSpring, animated } from 'react-spring'
import './style.sass';

export const Todo = ({todo}) => {
  let dispatch = useDispatch()
  const [editable, setEditable] = useState(false)
  const [name, setName] = useState(todo.name)
  const [mouse, setMouse] = useState(false) 
  const [todoFocus, setTodoFocus] = useState(false)
  const theme = useContext(ThemeContext)
  const animate = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 }
  })

  return (
    <animated.div className={`${todoFocus ? `todo-focus` : `` } todo todo-${theme}`} style={animate} onClick={() => setTodoFocus(!todoFocus)} >
      <ContextMenu menu={<CustomMenu />} />
      <button className="todo-button check" onClick={() => {
        dispatch(ComploteActions.conpliteTodo(todo));
        dispatch(todoActions.deleteTodo(todo.id))
      }} onMouseOver={() => setMouse(true) } onMouseOut={() => setMouse(false)} >
        { mouse ? <BsPlusCircle /> :  <BsCircle />}
      </button>
      <p className="todo-text">{editable ? <input className='todo-text-edit' type='text' value={name} onChange={(e) => setName(e.target.value)} /> : todo.name}</p>
      <button className="todo-button todo-button-edit" onClick={() => {
        if (name.length > 3) {
        dispatch(todoActions.setTodo({
        ...todo,
        name: name
      }))};  setEditable(!editable)}} >
         { editable ? <AiOutlineCheck />  : <BsPencil />}
      </button>
      <button className="todo-button todo-button-important" onClick={() => {
        dispatch(importantTodoActions.addImportantTodo(todo));
        dispatch(todoActions.deleteTodo(todo.id))
      }} >
         <AiOutlineStar />
      </button>
      <button className="todo-button todo-button-delete" onClick={() => dispatch(todoActions.deleteTodo(todo.id)) } >
        <RiDeleteBin6Line />
      </button>
    </animated.div>
  );
};

