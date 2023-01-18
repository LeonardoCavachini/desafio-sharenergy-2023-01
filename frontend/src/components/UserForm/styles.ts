import styled from "styled-components";

export const Main = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    min-height: 70vh;
  }
  @media (min-width: 1045px) and (max-width: 1680px) {
    min-height: 85vh;
  }
`;

export const Form = styled.form`
  min-height: 30vh;
  width: 25rem;
  padding: 13rem;
  background: #F5F5F5;
  border-radius: 5%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    padding: 5rem;
    min-height: 50vh;
  }
  @media (min-width: 1045px) and (max-width: 1680px) {
    padding: 4rem;
  }
`;
export const Input = styled.input`
  font-size: ${({ theme }) => theme.sizes.medium};
  font-family: ${({ theme }) => theme.font.default};
  color: ${({ theme }) => theme.colors.font};
  font-weight: 700;
  outline: none;
  border: none;
  background: transparent;
  margin-top: 0.2rem;
`;
export const InputLabel = styled.label`
  font-size: 1.3rem;
  font-family: ${({ theme }) => theme.font.default};
`;
export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  height: 4.5rem;
  border: solid;
  border-width: 0.05rem;
  border-color: #ccc;
  border-radius: 8px;
  padding: 0.5rem;
  transition: 0.5s;
  &:hover {
    background: #ccc;
  }
`;
export const Btn = styled.button`
  margin-top: 3.5rem;
  font-family: ${({ theme }) => theme.font.default};
  font-size: ${({ theme }) => theme.sizes.medium};
  font-weight: bold;
  border-radius: 0.4rem;
  height: 3.5rem;
  background-color: #00A2A2;
  width: 100%;
  &:hover {
    background: #ccc;
  }
`;
export const Footer = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;