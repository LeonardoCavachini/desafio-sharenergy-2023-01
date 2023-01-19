import * as styled from './styles';
import { BiLogOut } from "react-icons/bi";
import { IoClose, IoMenuOutline } from "react-icons/io5";
import {  useNavigate, Link } from 'react-router-dom';

const Header = ({ open, setOpen }: any) => {

  const navigate = useNavigate()

  return (
    <styled.box>
      <styled.logo src='https://www.sharenergy.com.br/wp-content/uploads/2022/12/logo_color.png' />
      <styled.titleBox>
        <Link to={'/RandomUsers'}>
          <styled.title>Home</styled.title>
        </Link>
        <Link to={'/CatsHttp'}>
        <styled.title>HttpCats</styled.title>
        </Link>
        <Link to={'/RandomDogs'}>
        <styled.title>RandomDog</styled.title>
        </Link>
        <Link to={'/Users'}>
        <styled.title>Users</styled.title>
        </Link>
      </styled.titleBox>
      <styled.IconClose>
        <IoMenuOutline size={45} onClick={() => setOpen(true)}/>
      </styled.IconClose>
      <styled.StyledBurger props={open}>
      <IoClose size={40} onClick={() => setOpen(false)}/>
      <styled.links>
      <Link to={'/RandomUsers'}>
          <styled.title>Home</styled.title>
        </Link>
        <Link to={'/CatsHttp'}>
        <styled.title>HttpCats</styled.title>
        </Link>
        <Link to={'/RandomDogs'}>
        <styled.title>RandomDog</styled.title>
        </Link>
        <Link to={'/Users'}>
        <styled.title>Users</styled.title>
        </Link>
        </styled.links>
      </styled.StyledBurger>
      <styled.icon onClick={() => navigate('/') }><BiLogOut size={25}/></styled.icon>
    </styled.box>
  )
}

export default Header