import { LOGIN_ROUTE, TODO_ROUTE } from "../../utilities/consts";
import { Login } from "../Login/Login";
import { Main } from '../Main/Main'
import * as FaIcon  from 'react-icons/fa'
import * as AiIcon from 'react-icons/ai'
import { BiTask, BiTaskX } from 'react-icons/bi'

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
    title: 'Tasks',
    path: 'tasks',
    icon: <BiTaskX />,
    cName: 'nav-text'
  },
  {
    title: 'Complite',
    path: 'complite',
    icon: <BiTask />,
    cName: 'nav-text'
  },
]