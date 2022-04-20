import styled from "styled-components"
import { Link as RouterLink } from "react-router-dom"

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
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const CardImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center;
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

export const AuctionTitle = styled.p`
  text-align: center;
`

export const Link = styled(RouterLink)`
  padding: 1rem 0.5rem;
  color: ${({ theme }) => theme.colors.light};
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.primary};
`
