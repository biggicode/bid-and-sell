import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Card = styled.div`
  border: 3px solid #2f2f3c;
  border-radius: 0.75rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
  grid-column: span 4;
`;

export const CardHeader = styled.div`
  border-bottom: 3px solid #2f2f3c;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
  background: linear-gradient(to left, #ff9f7c, #bb3fdd);
  border-radius: 0.75rem 0.75rem 0 0;
  padding: 0.5rem 1rem;
  font-size: 2rem;
  color: #fff;
  text-align: center;
`;

export const CardBody = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const CardImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center;
  border-radius: 1rem;
`;

export const PriceSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Price = styled.div`
  text-align: center;
  border-radius: 1rem;
  border: 3px solid #2f2f3c;
  width: 130px;
  text-align: center;
  padding: 0.75rem 0;
`;

export const ButtonSection = styled.div`
  padding: 0.5rem 1rem;
  text-align: center;
`;

export const AuctionTitle = styled.p`
  border: 3px solid #2f2f3c;
  margin: 0 auto;
  padding: 0.75rem 1rem;
  text-align: center;
  border-radius: 1rem;
`;

export const Link = styled(RouterLink)`
  padding: 0.75rem 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  font-size: 1.25rem;
  background: linear-gradient(to left, #ff9f7c, #bb3fdd);
  border-radius: 0.75rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
`;
