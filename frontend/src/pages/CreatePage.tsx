import { useEffect, useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import UserForm from '../components/UserForm'

const CreatePage = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const checkToken = () => {
    const token = JSON.parse(localStorage.getItem('token') as string)
    if (!token) {
      navigate('/');
    }
  }

  useEffect(() => {
    checkToken()
  },[])
  
  return (
    <>
    <Header open={open} setOpen={setOpen}/>
    <UserForm mode='create'/>
    </>
  )
};

export default CreatePage;
