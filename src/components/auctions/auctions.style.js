import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 75vh;
  grid-column: 1/-1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const ContainerTitle = styled.p`
  font-size: 2rem;
  text-shadow: 2px 2px #000;
  color: ${({ theme }) => theme.colors.linearStart};
`;

export const ContainerSubtitle = styled.p`
  font-size: 1rem;
`;

export const StyledLink = styled(Link)`
  font-weight: 600;
  color: #fff;
`;
