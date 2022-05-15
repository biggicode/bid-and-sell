import styled from "styled-components";
import { Link } from "react-router-dom";

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
`;

export const Icon = styled.i`
  font-size: 3rem;
  width: 40px;
  height: 40px;
  border-radius: 7px;
  color: ${({ theme }) => theme.colors.primary};

  transform: rotate(45deg);
  background: linear-gradient(to left, #ff9f7c, #bb3fdd);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  /* border-left: 2px solid ${({ theme }) => theme.colors.white}; */
  padding-left: 1rem;
`;
