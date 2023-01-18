import { Route, Routes, BrowserRouter } from 'react-router-dom'
import FormLogin from './pages/login'
import RandomUsers from './pages/RandomUsers'
import Cats from './pages/HttpCats'
import RandomDogs from './pages/randomDogs'
import UsersPage from './pages/UsersPage'
import CreatePage from './pages/CreatePage'
import UpdatePage from './pages/UpdatePage'

  function AppRouter() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' index element={<FormLogin/>} />
          <Route path='/RandomUsers' index element={<RandomUsers/>} />
          <Route path='/CatsHttp' index element={<Cats/>} />
          <Route path='/RandomDogs' index element={<RandomDogs/>} />
          <Route path='/Users' index element={<UsersPage/>} />
          <Route path='/Users/create' index element={<CreatePage/>} />
          <Route path='/Users/:id' index element={<UpdatePage/>} />
        </Routes>
      </BrowserRouter>
    )
  }
  
  export default AppRouter
  