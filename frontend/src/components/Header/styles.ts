import styled from "styled-components"

export const box = styled.header`
  width: 100%;
  background: #301860;
  min-height: 13vh;
  display: flex;
  
`
export const title = styled.h2`
    margin-top:4.5rem;
    color: #fafafa;
    font-family: ${({theme}) => theme.font.header};
    font-size: ${({ theme }) => theme.sizes.medium};
    font-weight: bold;
    @media (min-width: 1045px) and (max-width: 1680px) {
      margin-top: 2rem;
  }
`
export const icon = styled.div`
  position: absolute;
  cursor: pointer;
  margin-left: 89%;
  margin-top: 5.5vh;
  color: #fafafa;
  @media (max-width: 768px) {
    margin-left: 75%;
    margin-top: 14%;
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
  padding-bottom: 1%;
  margin-left: 1%;
  width: 40%;
`;