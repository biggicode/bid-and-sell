import styled from "styled-components";

export const Card = styled.div`
  grid-column: span 4;
  display: flex;
  flex-direction: column;
  height: 500px;
  background-color: ${({ theme }) => theme.colors.primaryDarker};
  border: 3px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.5rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
`;

export const CardHeader = styled.div`
  padding: 5rem 1rem 1rem;
  border-bottom: 3px solid ${({ theme }) => theme.colors.border};
`;

export const CardBody = styled.div`
  padding: 0.75rem;
  flex-grow: 2;
`;

export const CardFooter = styled.div`
  display: flex;
  padding: 0.75rem;
  justify-content: space-between;
`;
