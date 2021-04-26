import { LOGIN_ROUTE, TODO_ROUTE } from "../../utilities/consts";
import { Login } from "../Login/Login";
import { Main } from '../Main/Main'
import * as FaIcon  from 'react-icons/fa'
import * as AiIcon from 'react-icons/ai'
import { BiTask } from 'react-icons/bi'

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Login
  }
]

export const privateRoutes = [
  {
    path: '/todo/tasks',
    Component: Main
  }
]

export const SidebarData = [
  {
    title: 'MyDay',
    path: 'my-day',
    icon: <AiIcon.AiFillHome />,
    cName: 'nav-text'
  },
 
  {
    title: 'Important',
    path: 'important',
    icon: <AiIcon.AiFillFund />,
    cName: 'nav-text'

  },
  
  {
    title: 'Planed',
    path: 'planed',
    icon: <AiIcon.AiFillFlag />,
    cName: 'nav-text'
  },
 
  {
    title: 'Tasks',
    path: 'tasks',
    icon: <BiTask />,
    cName: 'nav-text'
  },
]