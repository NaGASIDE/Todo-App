import React from 'react'
import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring'
import './style.sass'

export const LogOutModal = ( { open, children, onClose} ) => {
  const animate = useSpring({
    to: {opacity: 1},
    from: {opacity: 0}
  })

  if (!open) {return null}

  return ReactDOM.createPortal(
    (
      <animated.div  style={animate} className='logout-modal-close'  onClick={onClose} >
       {children}
      </animated.div>
    ), document.getElementById(`portal`)
  )
}