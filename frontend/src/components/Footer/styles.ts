import styled from "styled-components";

export const Conatiner = styled.div`
  width: 103vw;
  background-color: #301860;
  @media (max-width: 768px) {
    width: 45rem;
    margin-top: 9rem;
  }
`;

export const title = styled.h1`
  font-size: ${({ theme }) => theme.sizes.small};
  font-family: ${({ theme }) => theme.font.default};
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  padding-top: 6rem;
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.sizes.xsmall};
    margin-left: -5rem;
    padding-top: 4.5rem;
  }
`