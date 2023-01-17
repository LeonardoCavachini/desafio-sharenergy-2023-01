import { useEffect, useState } from 'react';
import { fetchLogin } from '../../service/api'
import * as styled from './styles';
import {  useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'
import ErrorTitle from '../ErrorTitle'

const Form = () => {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [remember, setRemember] = useState(false)
  
  const navigate = useNavigate();
  useEffect(() => {
    setUsername(Cookies.get('username') as string),
    setPassword(Cookies.get('password') as string);
  },[])

  const saveLocalStorage = (res:string, key:string) => {
    localStorage.setItem(key, JSON.stringify(res));
  };

  const handleSubmit = async (event:any) => {
    event.preventDefault();
    if (remember) {
      Cookies.set('username', username, { expires: 3 })
      Cookies.set('password', password, { expires: 3 })
    }
    try {
      const getToken = fetchLogin(username,password)
      saveLocalStorage(await getToken, 'token')

      navigate("/RandomUsers")
    } catch (err){
      setError('Nome ou Senha incorretos.')
    }
    
   
  }

  return (
    <styled.Main>
      <styled.Form onSubmit={(e) => handleSubmit(e)}>
      <styled.logo src='https://www.sharenergy.com.br/wp-content/uploads/2022/12/logo_color.png'/>
        <styled.InputContainer>
          <styled.InputLabel htmlFor='username'>Nome</styled.InputLabel>
          <styled.Input id='username' value={username} onChange={ ({ target }) => setUsername(target.value) } placeholder='type here'/>
        </styled.InputContainer>
        <styled.InputContainer>
          <styled.InputLabel htmlFor='password'>Senha</styled.InputLabel>
          <styled.Input id='password' value={password} onChange={ ({ target }) => setPassword(target.value) } placeholder='type here'/>
        </styled.InputContainer>
        {error ? <ErrorTitle title='Nome ou senha incorretos'></ErrorTitle> : ''}
          <styled.InputLabel htmlFor='remember'>Lembrar-me</styled.InputLabel>
          <styled.Input id='remember' type="checkbox" onChange={(e) => setRemember(e.target.checked)}/>
        <styled.Btn type="submit">Entrar</styled.Btn>
        <styled.Footer />
      </styled.Form>
    </styled.Main>
  )
}
export default Form
