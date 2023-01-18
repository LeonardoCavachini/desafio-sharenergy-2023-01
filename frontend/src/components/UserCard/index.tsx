import * as styled from './styles';
import { BiTrash } from "react-icons/bi";
import {fetchDeleteUser} from '../../service/api'

const UserCard = ({props}:any, {icon}: any) => {
  const {_id, name, tel, email, cpf, address} = props

  const BtnDelete = async(e: any) => {
    e.stopPropagation()
    const localToken = JSON.parse(localStorage.getItem('token') as string);
    await fetchDeleteUser(_id, localToken)
    location.reload()
  }
  
  return(
    <styled.Container>
    <styled.title>{`Nome: ${name}`}</styled.title>
    <styled.title>{`tel: ${tel}`}</styled.title>
    <styled.title>{`Email: ${email}`}</styled.title>
    <styled.title>{`CPF: ${cpf}`}</styled.title>
    <styled.title>{`Endereço: ${address}`}</styled.title>
    <styled.BtnDiv>
      <styled.BtnDel onClick={(e) => BtnDelete(e)}><BiTrash size={25}/></styled.BtnDel>
    </styled.BtnDiv>
  </styled.Container>
  )
}

export default UserCard;
