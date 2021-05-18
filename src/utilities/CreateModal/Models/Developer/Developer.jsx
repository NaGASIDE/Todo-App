import React from 'react'
import { SVGLogo } from './SVGLogo/SVGLogo'
import { AiFillStar } from 'react-icons/ai'
import { useSpring, animated } from 'react-spring'
import './style.sass'

export const Developer = () => {
  const animate = useSpring({
    to: {opacity: 1},
    from: {opacity: 0}
  })
  return (
    <animated.div className='developer' style={animate} >
      <h2 className='developer-title'>Developer</h2>
      <div className='developer-photo dev-photo-1' />
      <div className='developer-photo dev-photo-2' />
      <div className='developer-photo dev-photo-3' />
      <div className='developer-name'><AiFillStar className='developer-name-star'/>{'  '} БEKЗAT</div>
      <div className='developer-about-myself developer-block' ><p>  Мой опыт в сфере веб-разработки  один год, пишу SPA приложения на REACT.JS. 
        Умею работать с такими технологиями как react.js, redux, javascript, typescript, react-router-dom, git, react-spring, sass, css, html.</p> 
      </div>
      <div className='developer-links developer-block' >
        <SVGLogo photo={`wtsap-logo`} />
        <SVGLogo photo={`tele-logo`} />
        <SVGLogo photo={`vk-logo`} />
        <SVGLogo photo={`hh-logo`} />
        <SVGLogo photo={`dis-logo`} />
      </div>
    </animated.div>
  )
}