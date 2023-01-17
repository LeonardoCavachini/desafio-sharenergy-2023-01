import { Route, Routes, BrowserRouter } from 'react-router-dom'
import FormLogin from './pages/login'
import RandomUsers from './pages/RandomUsers'

  function AppRouter() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' index element={<FormLogin/>} />
          <Route path='/RandomUsers' index element={<RandomUsers/>} />
        </Routes>
      </BrowserRouter>
    )
  }
  
  export default AppRouter
  