import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import { SidebarData } from '../../Routes/routes'
import { IconContext } from 'react-icons'
import * as FaIcon from 'react-icons/fa'
import * as AiIcon from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { ThemeContext } from '../Main'
import './Navbar.sass'

export function Navbar() {
  let todos = useSelector(state => state)

  const [sidebar, setSidebar] = useState(false)
  const theme = useContext(ThemeContext) 


  const showSidebar = () => setSidebar(!sidebar)
  return (
    <>
    <IconContext.Provider value={{color: `#919191`}} >
      <div className={`navbar navbar-${theme} `}>
        <Link to='#' className='menu-bars' >
          <FaIcon.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? `nav-menu active-${theme}` : 'nav-menu'}>
        <ul className='nav-menu-item' onClick={showSidebar} >
          <li className='navbar-toggle' >
            <Link to='#' className='menu-bars' >  
             <AiIcon.AiOutlineClose />
            </Link>
          </li>  
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title} <span>{todos.length < 1 ? `` : todos.length}</span> </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </IconContext.Provider>
    </>
  )
}
