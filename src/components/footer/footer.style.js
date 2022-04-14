import styled from "styled-components"

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column: 1/-1;
  height: 4rem;
`

export const FooterText = styled.p`
  font-size: 1rem;
  color: white;
`
