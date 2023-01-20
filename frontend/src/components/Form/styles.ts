import styled from "styled-components";

export const Main = styled.div`
  margin-top: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 20rem;
    margin-top: 2rem;
    margin-left: 7.6rem;
  }
  @media (min-width: 1045px) and (max-width: 1680px) {
    margin-left: 55rem;
    margin-top: 2rem;
  }
`;

export const Form = styled.form`
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
  width: 10rem;;
  background-color: #00A2A2;
  &:hover {
    background: #ccc;
  }
`;
export const Footer = styled.div`
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Link = styled.a`
  font-weight: bold;
  font-size: 1.5rem;
  cursor: pointer;
`;
export const inputError = styled.p`
  position: absolute;
  font-size: 1.2rem;
  color: red;
  top: 7.5rem;
  font-family: ${({ theme }) => theme.font.default};
`;
export const logo = styled.img`
  margin-top: -8rem;
  margin-bottom: 5rem;
  max-width: 20rem;
  max-height: 4rem;
  @media (max-width: 1680px) {
    margin-top: 0rem;
    margin-bottom: 1rem;
  }
`