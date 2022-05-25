import styled from "styled-components";

export const Introduction = styled.div`
  grid-column: 1/-1;
  height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledP = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-size: 1rem;
`;

export const Title = styled.h2`
  font-size: 3rem;
  background: -webkit-linear-gradient(
    ${({ theme }) => theme.colors.linearStart},
    ${({ theme }) => theme.colors.linearEnd}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const SemiTitle = styled.p`
  font-size: 2rem;
  grid-column: 1/-1;
  padding: 2rem;
  text-align: center;
  text-shadow: 2px 2px #000;
`;
