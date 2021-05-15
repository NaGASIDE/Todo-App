import React from 'react'
import ReactDOM from 'react-dom'
import './style.sass'

export const LogOutModal = ( { open, children, onClose} ) => {
  if (!open) {return null}

  return ReactDOM.createPortal(
    (
      <div className='logout-modal-close' onClick={onClose} >
       {children}
      </div>
    ), document.getElementById(`portal`)
  )
}