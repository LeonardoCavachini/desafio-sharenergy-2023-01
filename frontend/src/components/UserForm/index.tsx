import { useEffect, useState } from 'react';
import * as styled from './styles';
import { fetchCreatUsers, fetchUpdateUsers, fetchUsersById } from '../../service/api'
import {  useNavigate, useParams } from 'react-router-dom';

const UserForm = ({mode}: any) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')
  const [cpf, setCpf] = useState('')
  const [address, setAddress] = useState('')
  const [token, setToken] = useState('')

  const navigate = useNavigate();

  const { id } = useParams<{id: string}>();

  const LoadUSer = async(id: string | undefined, token: string) => {
    const user = await fetchUsersById(id, token)
    setName(user.name)
    setEmail(user.email)
    setTel(user.tel)
    setCpf(user.cpf)
    setAddress(user.address)
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (mode==='create') {
      await fetchCreatUsers(name,email,tel,cpf,address,token)
    } else {
      await fetchUpdateUsers(id, name,email,tel,cpf,address,token)
    }
    navigate('/Users');
  }

  useEffect(() => {
    const localToken = JSON.parse(localStorage.getItem('token') as string);
    if (!localToken) {
      navigate('/');
    } else {
      setToken(localToken)
    }
    if(mode !== 'create') {
      LoadUSer(id, localToken)
    }
  },[])

  return (
    <styled.Main>
      <styled.Form onSubmit={(e) => handleSubmit(e)}>
        <styled.InputContainer>
          <styled.InputLabel htmlFor='name'>Nome</styled.InputLabel>
          <styled.Input id='name' value={name} onChange={ ({ target }) => setName(target.value) } placeholder='type here'/>
        </styled.InputContainer>
        <styled.InputContainer>
          <styled.InputLabel htmlFor='email'>Email</styled.InputLabel>
          <styled.Input id='email' value={email} onChange={ ({ target }) => setEmail(target.value) } placeholder='type here'/>
        </styled.InputContainer>
        <styled.InputContainer>
          <styled.InputLabel htmlFor='phone'>Telefone</styled.InputLabel>
          <styled.Input id='phone' value={tel} onChange={ ({ target }) => setTel(target.value) } placeholder='type here'/>
        </styled.InputContainer>
        <styled.InputContainer>
          <styled.InputLabel htmlFor='cpf'>CPF</styled.InputLabel>
          <styled.Input id='cpf' value={cpf} onChange={ ({ target }) => setCpf(target.value) } placeholder='type here'/>
        </styled.InputContainer>
        <styled.InputContainer>
          <styled.InputLabel htmlFor='address'>Endereço</styled.InputLabel>
          <styled.Input id='address' value={address} onChange={ ({ target }) => setAddress(target.value) } placeholder='type here'/>
        </styled.InputContainer>
        <styled.Btn type="submit">{mode==='create'?'Criar':'Atualizar'}</styled.Btn>
        <styled.Footer />
      </styled.Form>
    </styled.Main>
  )
};

export default UserForm;
