import styled, { css } from "styled-components"

export const box = styled.header`
  background-color: #301860;
  min-height: 13vh;
  display: flex;
  width: 103vw;
  @media (max-width: 768px) {
    width: 45rem;
  }
`
export const title = styled.h2`
  margin-top:4.5rem;
  color: #fafafa;
  font-family: ${({theme}) => theme.font.header};
  font-size: ${({ theme }) => theme.sizes.medium};
  font-weight: bold;
`
export const icon = styled.div`
  position: absolute;
  cursor: pointer;
  margin-left: 89%;
  margin-top: 5.5vh;
  color: #fafafa;
  @media (max-width: 768px) {
    margin-left: 85%;
    margin-top: 5%;
  }
`
export const logo = styled.img`
  margin-top: 2%;
  margin-left: 8.5%;
  max-width: 20rem;
  max-height: 4rem;
`
export const titleBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 1.5%;
  margin-left: 1%;
  width: 20%;
  @media (min-width: 1045px) and (max-width: 1680px) {
    width: 30%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledBurger = styled.section`
  position: absolute;
  backdrop-filter: blur(2px);
  width: 100%;
  height: 100%;
  top:0;
  left:0;
  right:0;
  bottom:0;
  z-index:5;
  display:flex;
  align-items: center;
  justify-content: center;

  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(33,9,121,0.22452731092436973) 35%, rgba(0,212,255,1) 100%);
  
  opacity: 0;
  pointer-events: none;
  transition: .5s;
  transform: translateX(50px);

  svg {
    position:absolute;
    top: 1rem;
    right: 1rem;
    transform: rotate(45deg);
    transition: .7s;
  }
  ${({props}:any) => props && css`
    opacity: 1;
    pointer-events: auto;
    transform: translateX(0px);
    svg {
     transform: rotate(0deg) ;
    }
    nav {
      transform: scale(1);
    }
  `}
`;
export const links = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  transform: scale(0.6);
`

export const IconClose = styled.div`
  position: absolute;
  top:6rem;

  @media (min-width: 1045px) {
    display: none;
  }
`;
