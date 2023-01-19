import styled from "styled-components";

export const imageBox = styled.div`
  margin-left: 12vw;
  margin-top: 1vw;
`
export const Img = styled.img`
  height: 100vh;
  max-width:50rem;
  max-height:60vh;
  border-radius: 2rem;

  @media (max-width: 768px) {
    position: absolute;
    left: 2rem;
    width: 35rem;
    max-height:50vh;
  }

  @media (min-width: 1045px) and (max-width: 1680px) {
    position: absolute;
    left: 36rem;
    max-height:70vh;
  }
`;
