import * as styled from './styles';

const CreateBtn = ({onClick}: {onClick: React.ButtonHTMLAttributes<HTMLButtonElement>["onClick"]}) => {
  return(
    <>
    <styled.Btn onClick={onClick}>Create User</styled.Btn>
    </>
  )
}

export default CreateBtn