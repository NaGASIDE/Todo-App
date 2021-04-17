import React from 'react'
import ReactDOM from 'react-dom'

export function Modal( { open, children, onClose}) {
  if (!open) {return null}

  return ReactDOM.createPortal((
    <div>
      <button onClick={onClose} >Close model</button>
     {children}
    </div>),
  document.getElementById('portal') )
}
