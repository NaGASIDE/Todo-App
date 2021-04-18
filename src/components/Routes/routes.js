import { LOGIN_ROUTE, TODO_ROUTE } from "utilities/consts";
import { Login } from "../Login/Login";
import { TodoList } from '../TodoList/TodoList'

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Login
  }
]

export const privateRoutes = [
  {
    path: TODO_ROUTE,
    Component: TodoList
  }
]