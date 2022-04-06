import styled from "styled-components"

export const Logo = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.light};
`

export const Icon = styled.i`
  font-size: 2rem;
`

export const Text = styled.p`
  border-left: 2px solid ${({ theme }) => theme.colors.light};
  padding-left: 3px;
`
