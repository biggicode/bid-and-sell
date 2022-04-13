import styled from "styled-components"

export const Form = styled.form`
  background-color: #cfdbd5;
  padding: 2rem;
  margin-bottom: 4rem;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  grid-column: 1/-1;
`

export const Title = styled.h2`
  font-size: 3rem;
`

export const SemiTitle = styled.h3`
  font-size: 2rem;
`

export const Label = styled.label`
  display: block;
`

export const Input = styled.input`
  padding: 20px;
  border-color: transparent;
  border-radius: 5px;
  width: 50%;
`

export const TextArea = styled.textarea`
  width: 50%;
  resize: none;
  height: 200px;
  padding: 10px;
  border: none;
`

export const Separator = styled.div`
  height: 10px;
  width: 100%;
  background-color: white;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    background-color: white;
    height: 10px;
    width: 2rem;
    right: -2rem;
  }

  &::before {
    content: "";
    position: absolute;
    background-color: white;
    height: 10px;
    width: 2rem;
    left: -2rem;
  }
`

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.danger};
  color: ${({ theme }) => theme.colors.dark};
  padding: 1rem 2rem;
  font-size: 1.5rem;
  border: none;
  border-radius: 1.75rem;
  width: 50%;
  font-weight: 700;
  box-shadow: 1px 2px 2px #000;
  transition: 250ms;
  cursor: pointer;
`
