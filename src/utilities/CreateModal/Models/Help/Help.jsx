import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { useSpring, animated } from 'react-spring'
import './style.sass'
export const Help = () => {
  const animate = useSpring({
    to: {opacity: 1},
    from: {opacity: 0}
  })
  return (
    <animated.div style={ animate } >
      <h2 className='help' >Help</h2>
      <p className='help-text-block' >
        <h4 className='help' > Что такое TODO App ? </h4>
        Это простой список задач. Нужен он для того чтобы контролировать и не забывать дела, которые нужно сделать за день.<br/> Надеюсь вам понравится {`:)`}
      </p>
      <p className='help-text-block' >
        <h4 className='help' > Этой помощи не достаточно ? </h4>
        Если вам нужна помощь то, вы можете написать мне.<br/> Все контактные данные находятся под этим значком. <br/> <AiOutlineUser className='help-developer-icon' />
      </p>
    </animated.div>
  )
}