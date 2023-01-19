import styled from "styled-components";

export const ContainerPagination = styled.div`
  display: flex;
  max-width: 5rem;
  margin: 1.5rem auto;

  @media (max-width: 768px) {
    margin-top: 240rem;
  }

  @media (min-width: 1045px) and (max-width: 1680px) {
    margin-top: 20rem;
  }
`