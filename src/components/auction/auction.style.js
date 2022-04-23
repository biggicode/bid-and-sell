import styled from "styled-components";

export const AuctionTitle = styled.h2`
  grid-column: span 8;
  font-size: 3rem;
`;

export const GreySection = styled.div`
  background-color: #f7f7f7;
  grid-column: span 4;
  padding: 1.25rem;
  font-size: 1rem;
  height: 56px;
`;

export const PriceSection = styled.div`
  grid-column: span 4;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.danger};
  color: ${({ theme }) => theme.colors.dark};
  padding: 1rem 2rem;
  font-size: 1.5rem;
  border: none;
  border-radius: 1.75rem;
  width: 100%;
  font-weight: 700;
  box-shadow: 1px 2px 2px #000;
  transition: 250ms;
  cursor: pointer;
`;

export const Img = styled.img`
  grid-column: span 8;
  width: 100%;
  height: 550px;
  object-fit: cover;
  object-position: center;
`;

export const Description = styled.div`
  background-color: #f7f7f7;
  grid-column: span 8;
  padding: 1.25rem;
  font-size: 1rem;
`;
