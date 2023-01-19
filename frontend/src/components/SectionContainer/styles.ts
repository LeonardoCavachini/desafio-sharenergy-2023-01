import styled from "styled-components"

export const Container = styled.div`
  height: 600vh;
  width: 100vw;
  max-width: 50vw;
  max-height: 100vh;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 35rem;
    margin-left: 2rem;
    max-height: 335vh;
    max-height: 51.7vh;
  }
  @media (min-width: 1045px) and (max-width: 1680px) {
    margin-left: 5rem;
  }
`