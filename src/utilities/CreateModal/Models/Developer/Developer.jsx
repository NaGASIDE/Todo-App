import React from 'react'
import { SVGLogo } from './SVGLogo/SVGLogo'
import { AiFillStar } from 'react-icons/ai'
import { FaWhatsappSquare, FaTelegram, FaDiscord } from 'react-icons/fa'
import './style.sass'

export const Developer = () => {
  return (
    <div className='developer' >
      <h2 className='developer-title'>Developer</h2>
      <div className='developer-photo dev-photo-1' />
      <div className='developer-photo dev-photo-2' />
      <div className='developer-photo dev-photo-3' />
      <div className='developer-name'><AiFillStar className='developer-name-star'/>{'  '} БEKЗAT</div>
      <div className='developer-about-myself developer-block' ><p>  Мой опыт в сфере веб-разработки  один год, пишу SPA приложения на REACT.JS. 
        Умею работать с такими технологиями как react.js, redux, javascript, typescript, react-router-dom, git, react-spring, sass, css, html.</p> 
      </div>
      <div className='developer-links developer-block' >
        <FaWhatsappSquare />
        <FaTelegram />
        <SVGLogo photo={`vk-logo`}  />
        <SVGLogo photo={`hh-logo`}  />
        <FaDiscord />
      </div>
    </div>
  )
}