import styled from "styled-components";

export const DesktopUserNav = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.15rem;
`;

export const Chevron = styled.i`
  ${({ open }) => (open ? "transform: rotate(180deg);" : "")}
`;
