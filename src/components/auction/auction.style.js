import styled from "styled-components";

export const AuctionTitle = styled.h2`
  grid-column: 1/-1;
  font-size: 3rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-column: span 8;
  }
`;

export const GreySection = styled.div`
  background-color: #f7f7f7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.25rem;
  font-size: 1rem;
  height: 56px;
`;

export const BidForm = styled.form`
  background-color: #f7f7f7;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const InputBidForm = styled.input`
  padding: 0.5rem;
`;

export const SubmitBidForm = styled.button`
  background-color: ${({ theme }) => theme.colors.warning};
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

export const FormTitle = styled.p`
  font-weight: 900;
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
  grid-column: 1/-1;
  width: 100%;
  height: 550px;
  object-fit: cover;
  object-position: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-column: span 8;
  }
`;

export const Description = styled.div`
  background-color: #f7f7f7;
  padding: 1.25rem;
  font-size: 1rem;
  grid-column: 1/-1;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-column: span 8;
  }
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  grid-column: 1/-1;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-column: 9 / span 4;
    grid-row: 1 / span 2;
  }
`;
