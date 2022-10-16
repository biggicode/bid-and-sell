import styled from "styled-components";
import { Link } from "react-router-dom";

export const AuctionTitle = styled.h2`
  grid-column: 1/-1;
  font-size: 3rem;
  text-shadow: 3px 6px #000;
  overflow: hidden;
  text-overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-column: span 8;
  }
`;

export const GreySection = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryDarker};
  border: 3px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.25rem;
  font-size: 1rem;
  height: 56px;
`;

export const BidForm = styled.form`
  background-color: ${({ theme }) => theme.colors.primaryDarker};
  border: 3px solid ${({ theme }) => theme.colors.border};
  border-radius: 1rem;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
`;

export const InputBidForm = styled.input`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
  padding: 1rem;
  border: 3px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.5rem;

  &:focus {
    outline: none;
    border-color: #ff9f7c;
  }
`;

export const SubmitBidForm = styled.button`
  background-color: ${({ theme }) => theme.colors.linearEnd};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
  padding: 1rem 2rem;
  font-size: 1.5rem;
  border: none;
  border-radius: 1.75rem;
  width: 100%;
  font-weight: 700;
  transition: 250ms;
  cursor: pointer;
`;

export const FormTitle = styled.p`
  font-weight: 700;
`;

export const Button = styled.button`
  background: linear-gradient(
    to left,
    ${({ theme }) => theme.colors.linearStart},
    ${({ theme }) => theme.colors.linearEnd}
  );
  color: ${({ theme }) => theme.colors.dark};
  padding: 1rem 2rem;
  font-size: 1.5rem;
  color: #fff;
  border: none;
  border-radius: 1.75rem;
  width: 100%;
  font-weight: 700;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
  transition: 250ms;
  cursor: pointer;
`;

export const Img = styled.img`
  grid-column: 1/-1;
  border-radius: 1rem;
  width: 100%;
  height: 550px;
  object-fit: cover;
  object-position: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-column: span 8;
  }
`;

export const Description = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryDarker};
  border: 3px solid ${({ theme }) => theme.colors.border};
  border-radius: 1rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
  padding: 1.25rem;
  font-size: 1rem;
  grid-column: 1/-1;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-column: span 8;
  }
`;

export const DescriptionTitle = styled.h3`
  text-shadow: 3px 6px #000;
  padding-bottom: 1rem;
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  grid-column: 1/-1;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-column: 9 / span 4;
    grid-row: 1 / span 2;
  }
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.linearStart};
`;
