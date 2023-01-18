import * as styled from './styles';

const RefreshBtn = ({onClick}: {onClick: React.ButtonHTMLAttributes<HTMLButtonElement>["onClick"]}) => {
  return (
    <>
     <styled.Btn onClick={onClick}>Refresh</styled.Btn>
    </>
  )
};

export default RefreshBtn;
