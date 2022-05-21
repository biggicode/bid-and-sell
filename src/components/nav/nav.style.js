import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    border: 3px solid ${({ theme }) => theme.colors.border};
    box-shadow: 0 3px 6px #000;
    flex-direction: column;
    position: fixed;
    transform: ${({ openNav }) =>
      openNav ? "translateX(0)" : "translateX(100%)"};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    background-color: ${({ theme }) => theme.colors.primaryDarker};
    transition: transform 250ms ease-in-out;
  }
`;

export const Link = styled(RouterLink)`
  padding: 1rem 0.5rem;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;

  &:hover {
    color: #ff9f7c;
  }
`;

export const ProfileDiv = styled.div`
  color: white;
  display: flex;
  gap: 0.25rem;
`;

export const LogOutButton = styled.button`
  padding: 1rem;
  font-weight: 600;
  color: #fff;
  background-color: #bb3fdd;
  border-radius: 0.5rem;
  box-shadow: 0 3px 6px #000;
  border: 1px solid ${({ theme }) => theme.colors.border};
  cursor: pointer;
`;
