import styled from "styled-components";
import { Link } from "react-router-dom";

export const Form = styled.form`
  grid-column: 1/-1;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 1rem;
  margin: 1rem auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 400px;
  }
`;

export const FormTitle = styled.h2`
  text-align: center;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.grey};
`;

export const Input = styled.input`
  display: flex;
  justify-content: center;
  padding-left: 1.25rem;
  color: ${({ theme }) => theme.colors.grey};
  background-color: ${({ theme }) => theme.colors.primary};
  height: 60px;
  border-radius: 15px;
  font-size: 1rem;
  border: 3px solid #2f2f3c;

  &:focus {
    outline: none;
    border: 3px solid #ff9f7c;
  }
`;

export const Submit = styled.button`
  height: 70px;
  border-radius: 13px;
  background: linear-gradient(to left, #ff9f7c, #bb3fdd);
  font-size: 1.25rem;
  //Semi-bold
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  padding-left: 0.25rem;
`;

export const CenteredP = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  text-align: center;
`;
