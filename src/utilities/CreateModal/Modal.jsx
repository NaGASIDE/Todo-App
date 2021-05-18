import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import ReactDOM from 'react-dom'
import './style.sass'

export function Modal( { open, children, onClose}) {
  if (!open) {return null}

  return ReactDOM.createPortal((
    <div className="model" >
      <div className='model-plate'>
      <button className='model-plate-button' onClick={onClose}  ><AiOutlineClose /></button>
     {children}
      </div>
    </div>),
  document.getElementById('portal'))
}
