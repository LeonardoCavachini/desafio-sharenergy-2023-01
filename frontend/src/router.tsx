import { Route, Routes, BrowserRouter } from 'react-router-dom'
import FormLogin from './pages/login'
import RandomUsers from './pages/RandomUsers'
import Cats from './pages/HttpCats'

  function AppRouter() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' index element={<FormLogin/>} />
          <Route path='/RandomUsers' index element={<RandomUsers/>} />
          <Route path='/CatsHttp' index element={<Cats/>} />
        </Routes>
      </BrowserRouter>
    )
  }
  
  export default AppRouter
  