import { useEffect, useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { SectionContainer } from '../components/SectionContainer';
import { SectionCard } from '../components/SectionCard';
import UserCard from '../components/UserCard';
import CreateBtn from '../components/CreateBtn';
import { Users } from '../interfaces';
import { fetchUsers } from '../service/api';


const UsersPage = () => {

  const [usersObj, setUsersObj] = useState<Users[]>([])
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const loadUser = async() => {
    const token = JSON.parse(localStorage.getItem('token') as string)
    const getUsers = await fetchUsers(token)
    setUsersObj(getUsers)
  }

  const createUser = () => {
    navigate('/Users/create');
  }

  const getId = (id: string) =>{
    navigate(`/Users/${id}`);
  }

  useEffect(() => {
    loadUser()
  },[])

  return (
    <>
      <Header open={open} setOpen={setOpen}/>
      <SectionContainer>
        <CreateBtn onClick={() => createUser()}/>
        <SectionCard>
          {usersObj.map((el, idx) => <div onClick={() => getId(el._id)} key={idx}><UserCard props={el} /></div>)}
        </SectionCard>
      </SectionContainer>
    </>
  )
};

export default UsersPage;
