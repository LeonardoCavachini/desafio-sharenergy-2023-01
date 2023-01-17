import { Route, Routes, BrowserRouter } from 'react-router-dom'
import FormLogin from './pages/login'

  function AppRouter() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' index element={<FormLogin/>} />
        </Routes>
      </BrowserRouter>
    )
  }
  
  export default AppRouter
  