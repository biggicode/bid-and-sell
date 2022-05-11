import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
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
  color: ${({ theme }) => theme.colors.light};
  text-decoration: none;
`;

export const ProfileDiv = styled.div`
  color: white;
  display: flex;
  gap: 0.25rem;
`;
