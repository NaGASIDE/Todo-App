import React from 'react';
import { useSpring, animated } from 'react-spring'
import './style.sass'

export function Logo() {

  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true
  })
  return (
    <>
      <div className='logo' />
      <animated.p className='textLogo' style={props} >Todo</animated.p>
    </>
  )
}