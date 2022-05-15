import styled from "styled-components";

export const Button = styled.button`
  height: 60px;
  border: 3px solid #2f2f3c;
  border-radius: 15px;
  color: ${({ theme }) => theme.colors.grey};
  display: flex;
  align-items: center;
  justify-content: center;
`;
