import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import * as styled from './styles'
export const PaginationRight = ({
  onClick,
}: {
  onClick: React.ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
}) => {
  return (
    <>
      <styled.btn onClick={onClick}><BiChevronRight size={25}/></styled.btn>    
    </>
  )
};
export const PaginationLeft = ({
  onClick,
}: {
  onClick: React.ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
}) => {
  return (
    <>
  
        <styled.btn onClick={onClick}><BiChevronLeft size={25}/></styled.btn>

    
    </>
  )
};
