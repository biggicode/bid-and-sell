import styled from "styled-components";
import { Link } from "react-router-dom";

export const DesktopUserNav = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.15rem;
  color: white;
  cursor: pointer;
`;

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  border-bottom: 3px solid ${({ theme }) => theme.colors.border};
  padding: 0.5rem 0;

  &:hover {
    color: #ff9f7c;
    border-color: #ff9f7c;
  }
`;

export const UserNavBody = styled.div`
  display: flex;
  background-color: red;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem;
  position: absolute;
  bottom: -140px;
  right: 0px;
  width: 160px;
  background-color: ${({ theme }) => theme.colors.primaryDarker};
  box-shadow: 0 3px 6px #000;
`;

export const Chevron = styled.i`
  ${({ open }) => (open ? "transform: rotate(180deg);" : "")}
`;

export const LogOutButton = styled.button`
  padding: 0.5rem;
  font-weight: 600;
  color: #fff;
  background-color: #bb3fdd;
  border-radius: 0.5rem;
  box-shadow: 0 3px 6px #000;
  border: 1px solid ${({ theme }) => theme.colors.border};
  cursor: pointer;
`;
