import styled from "styled-components";
import { Link } from "react-router-dom";

export const Introduction = styled.div`
  grid-column: 1/-1;
  height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledP = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-size: 1rem;
`;

export const Title = styled.h2`
  font-weight: 900;
  white-space: nowrap;
  font-size: 3rem;
  background: -webkit-linear-gradient(
    ${({ theme }) => theme.colors.linearStart},
    ${({ theme }) => theme.colors.linearEnd}
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const SemiTitle = styled.p`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.linearStart};
  font-size: 2rem;
  grid-column: 1/-1;
  padding: 2rem 0;
  text-align: center;
  text-shadow: 2px 2px #000;
`;

export const StyledLink = styled(Link)`
  color: #fff;
`;

export const StepsContainer = styled.div`
  grid-column: 1/-1;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const Step = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const StepText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ alignRight }) => (alignRight ? "text-align: right;" : "")};
`;

export const Circle = styled.div`
  min-width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 5px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.linearStart};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
`;
