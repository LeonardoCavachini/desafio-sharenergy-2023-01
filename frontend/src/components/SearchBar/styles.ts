import styled from "styled-components"

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
  width: 10%;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  height: 4.5rem;
  border: solid;
  border-width: 0.05rem;
  border-color: #ccc;
  border-radius: 8px;
  padding-top: 1rem;
  padding-left: 1.5rem;
  transition: 0.5s;
  &:hover {
    background: #ccc;
  }
  @media (min-width: 1045px) and (max-width: 1680px) {
    width: 12%;
  }

  @media (max-width: 768px) {
    width: 50%;
  }
`;