import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 65vh;
  width: 100vw;
  max-width: 50vw;
  margin: 0 auto;
  @media (min-width: 1045px) and (max-width: 1680px) {
    max-width: 80vw;
    margin-left: 13.5rem;
  }
  @media (max-width: 768px) {
    max-width: 90vw;
  }
`