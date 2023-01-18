import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  max-height: 50rem;
  width:37.5rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  @media (min-width: 1045px) and (max-width: 1680px) {
    max-width: 100%;
    
  };
`;

export const title = styled.h1`
  margin-top:2rem;
  margin-bottom:2rem;
  font-family: ${({theme}) => theme.font.default};
  font-size: 2rem;
  font-weight: bold;
  @media (min-width: 1045px) and (max-width: 1680px) {
    margin-top: 2rem;
  }
`;

export const BtnDel = styled.button`
  cursor:pointer;
  width:150rem;
  border: none;
`;
export const BtnDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 3rem;
  margin-bottom: 2rem;
`;