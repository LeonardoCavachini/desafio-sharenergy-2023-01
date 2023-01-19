import React, { useState } from 'react';
import Header from '../components/Header';
import UserForm from '../components/UserForm'

const CreatePage = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
    <Header open={open} setOpen={setOpen}/>
    <UserForm mode='create'/>
    </>
  )
};

export default CreatePage;
