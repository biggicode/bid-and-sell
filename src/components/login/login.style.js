import styled from "styled-components"

export const Form = styled.form`
  border: 2px solid #333;
  border-radius: 5px;
  grid-column: 1/-1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  margin: 1rem auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 400px;
  }
`

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.dark};
`

export const Input = styled.input`
  padding: 0.5rem;
`

export const Submit = styled.button`
  margin: 1.5rem 0;
  padding: 0.5rem 1rem;
  border-radius: 6px;
`

export const Button = styled.button`
  border-radius: 5px;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
