import styled from "styled-components"

export const Form = styled.form`
  border: 2px solid #333;
  border-radius: 5px;
  grid-column: span 4;
`

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.dark};
`
