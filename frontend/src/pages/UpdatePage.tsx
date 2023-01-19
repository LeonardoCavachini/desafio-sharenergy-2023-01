import { useState } from 'react';
import Header from '../components/Header';
import UserForm from '../components/UserForm'

const UpdatePage = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
    <Header open={open} setOpen={setOpen}/>
    <UserForm mode='update'/>
    </>
  )
};

export default UpdatePage;
