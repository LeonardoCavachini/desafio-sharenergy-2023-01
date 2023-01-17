import * as styled from './styles';
import { SectionCard } from '../SectionCard'

const UserRandomCard = ({props}:any) => {
  const {name, picture, email, login, dob} = props
  
  return (
      <styled.Container>
        <styled.title>{`${name.title} ${name.first} ${name.last}`}</styled.title>
        <styled.image src={picture.large} alt='user-image'/>
        <styled.title>{login.username}</styled.title>
        <styled.title>{email}</styled.title>
        <styled.title>{`${dob.age} anos`}</styled.title>
      </styled.Container>
  )
}
export default UserRandomCard