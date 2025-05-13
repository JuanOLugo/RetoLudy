
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import PrivateRoutes from './Routes/PrivateRoutes'
import Page from './Pages/Auth/Page'
import GamePage from './Pages/Game/GamePage'


function App() {
  
  return (
    <BrowserRouter> 
      <Routes>
        <Route element={<PrivateRoutes/>}>
          <Route path='/' element={<GamePage/>} />
        </Route>
        <Route path='/login' element={<Page/>} />
        <Route path='*' element={<Navigate to="/"/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
