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
  color: #fff;
  text-align: center;
  font-size: 3rem;
`;
