import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../../../Main'
import { useDispatch } from 'react-redux';
import { ComploteActions } from '../../../../../../store/Complite/action'
import { importantTodoActions }  from '../../../../../../store/Imporatnt/action'
import { BsCircle, BsPencil, BsPlusCircle  } from 'react-icons/bs';
import { AiOutlineStar, AiOutlineCheck} from 'react-icons/ai';
import { RiDeleteBin6Line } from 'react-icons/ri'
import { ContextMenu } from '../../../../../TodoList/Todo/ContextMenu/ContextMenu'
import { CustomMenu } from '../../../../../TodoList/Todo/ContextMenu/CustomMenu/CustomMenu'
import { useSpring, animated } from 'react-spring'
import './style.sass';

export const ImportantTodo = ({todo}) => {
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


  // Сейчас можно отмечать каждое TODO, не зависимо от того отмнчен ли другой. Сделай так чтобы когда отмечался другой TODO,
  // у преведущёго стили снимались. Моя ошибка сорян :3
  // я полумал и придумал способ со следующим числом, скорее всего это нужно делать через store

  return (
    <animated.div className={`${todoFocus ? `todo-focus` : `` } todo todo-${theme}`} style={animate} onClick={() => setTodoFocus(!todoFocus)} >
      <ContextMenu menu={<CustomMenu />} />
      <button className="todo-button check" onClick={() => {
        dispatch(ComploteActions.conpliteTodo(todo));
        dispatch(importantTodoActions.deleteImportantTodo(todo.id))
      }} onMouseOver={() => setMouse(true) } onMouseOut={() => setMouse(false)} >
        { mouse ? <BsPlusCircle /> :  <BsCircle />}
      </button>
      <p className="todo-text">{editable ? <input className='todo-text-edit' type='text' value={name} onChange={(e) => setName(e.target.value)} /> : todo.name}</p>
      <button className="todo-button todo-button-edit" onClick={() => {
        if (name.length > 3) {
        dispatch(importantTodoActions.setImportantTodo({
        ...todo,
        name: name
      }))};  setEditable(!editable)}} >
         { editable ? <AiOutlineCheck />  : <BsPencil />}
      </button>
      <button className="todo-button todo-button-important" onClick={() => {
        dispatch(importantTodoActions.addImportantTodo(todo));
        dispatch(importantTodoActions.deleteImportantTodo(todo.id))
      }} >
         <AiOutlineStar />
      </button>
      <button className="todo-button todo-button-delete" onClick={() => dispatch(importantTodoActions.deleteImportantTodo(todo.id)) } >
        <RiDeleteBin6Line />
      </button>
    </animated.div>
  );
};