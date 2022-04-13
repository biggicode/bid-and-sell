import styled from "styled-components"

export const Card = styled.div`
  border: 2px solid #000;
  border-radius: 0.25rem;
  grid-column: span 4;
`

export const CardHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 0.5rem 1rem;
  font-size: 2rem;
  color: #fff;
  text-align: center;
`

export const CardBody = styled.div`
  padding: 0.5rem;
`

export const CardImg = styled.img`
  max-width: 100%;
`

export const PriceSection = styled.div`
  display: flex;
  justify-content: space-around;
`

export const Price = styled.div`
  text-align: center;
`

export const ButtonSection = styled.div`
  padding: 0.5rem 1rem;
  text-align: center;
`
