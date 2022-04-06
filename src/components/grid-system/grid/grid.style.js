import styled from "styled-components"

export const Grid = styled.div`
  display: grid;
  gird-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  padding: 1rem 2rem 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 1rem;
    padding: 1rem 5rem 1rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(12, 1fr);
    padding: 1rem 8rem 1rem;
  }
`
