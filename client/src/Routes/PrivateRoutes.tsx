import { IUser } from '../Interfaces/IUser'
import { Navigate, Outlet } from 'react-router-dom'
function PrivateRoutes() {
    const users: IUser[] = JSON.parse(localStorage.getItem('users') || '[]')

  return users.length === 2 ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace />
  )
}

export default PrivateRoutes