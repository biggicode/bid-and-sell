import styled from "styled-components"

export const Header = styled.header`
  height: 64px;
  padding: 0 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #f1f1f1;
`
