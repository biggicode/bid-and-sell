import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Header = styled.header`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 64px;
  padding: 0 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border-bottom: 2px solid #f1f1f1; */
`;

export const Link = styled(RouterLink)`
  padding: 1rem 0.5rem;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;

  ${({ type }) =>
    type === "register"
      ? "height: 40px; border: 2px solid #707070; border-radius: 10px; padding: 0.5rem 0.25rem;"
      : ""}
`;
