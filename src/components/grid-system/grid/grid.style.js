import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;

  ${({ addPadding }) => addPadding && `padding: 1rem 2rem 1rem;`}
  ${({ fullHeight }) => fullHeight && `min-height: 100vh;`}
  

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 1rem;
    ${({ addPadding }) => addPadding && `padding: 1rem 5rem 1rem;`}
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(12, 1fr);
    ${({ addPadding }) => addPadding && `padding: 1rem 8rem 1rem;`}
  }
`;
