import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../Main/Main'
import { useDispatch } from 'react-redux';
import { todoActions } from '../../../store/Todo/action' 
import { BsCircle, BsPencil } from 'react-icons/bs';
import { AiOutlineStar, AiOutlineCheck, AiOutlineCheckCircle } from 'react-icons/ai';
import { RiDeleteBin6Line } from 'react-icons/ri'
import { ContextMenu } from './ContextMenu/ContextMenu'
import { CustomMenu } from './ContextMenu/CustomMenu/CustomMenu'
import { useSpring, animated } from 'react-spring'
import './style.sass';

export const Todo = ({todo}) => {
  let dispatch = useDispatch()
  const [editable, setEditable] = useState(false)
  const [name, setName] = useState(``)
  const [mouse, setMouse] = useState(false) 
  const [todoFocus, setTodoFocus] = useState(false)
  const theme = useContext(ThemeContext)
  const animate = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 }
  })

  // Сейчас можно отмечать каждое TODO, не зависимо от того отмнчен ли другой. Сделай так чтобы когда отмечался другой TODO,
  // у преведущёго стили снимались. Моя ошибка сорян :3
  // я полумал и придумал способ со следующим числом, скорее всего это нужно делать через store

  return (
    <animated.div className={`${todoFocus ? `todo-focus` : `` } todo todo-${theme}`} style={animate} onClick={() => setTodoFocus(!todoFocus)} >
      <ContextMenu menu={<CustomMenu />} />
      <button className="todo-button check" onMouseOver={() => setMouse(true) } onMouseOut={() => setMouse(false)}  >
        { mouse ? <AiOutlineCheckCircle/> :  <BsCircle />}
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
      <button className="todo-button todo-button-important" >
         <AiOutlineStar />
      </button>
      <button className="todo-button todo-button-delete" onClick={() => dispatch(todoActions.deleteTodo(todo.id)) } >
        <RiDeleteBin6Line />
      </button>
    </animated.div>
  );
};

