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
`;

export const UserNavBody = styled.div`
  display: flex;
  background-color: red;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem;
  position: absolute;
  bottom: -100px;
  right: 0px;
  width: 150px;
`;

export const Chevron = styled.i`
  ${({ open }) => (open ? "transform: rotate(180deg);" : "")}
`;
