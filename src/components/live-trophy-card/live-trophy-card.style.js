import styled from "styled-components";

export const Card = styled.div`
  grid-column: span 4;
  display: flex;
  height: 520px;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.primaryDarker};
  border: 3px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.5rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
`;

export const IconBadge = styled.div`
  position: absolute;
  top: -10px;
  left: 30px;
  padding: 30px 1rem 18px 1rem;
  background: linear-gradient(
    to bottom,
    ${({ theme, type }) =>
      type === "live" ? "#EF8893" : theme.colors.linearStart},
    ${({ theme, type }) =>
      type === "live" ? "#FF0000" : theme.colors.linearEnd}
  );
  box-shadow: 0 1px 2px #000;

  &::before {
    content: "";
    width: 0;
    height: 0;
    border-bottom: 10px solid ${({ theme }) => theme.colors.linearStart};
    border-right: 10px solid transparent;
    position: absolute;
    top: 0;
    right: -9px;
    /* z-index: 2; */
  }
`;

export const IconUnderline = styled.div`
  height: 3px;
  left: 0;
  right: 0;
  position: absolute;
  top: 93px;
  background-color: ${({ theme, type }) =>
    type === "live" ? "#FF0000" : theme.colors.linearEnd};
`;

export const CardHeader = styled.div`
  padding: 2rem 2rem 2rem 6rem;
  border-bottom: 3px solid ${({ theme }) => theme.colors.border};
  position: relative;

  p {
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const CardBody = styled.div`
  padding: 0.75rem;
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
`;

export const BodyTitle = styled.p`
  font-weight: 700;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.linearStart};
`;

export const CardFooter = styled.div`
  display: flex;
  padding: 0.75rem;
  justify-content: space-between;
`;

export const DeleteButton = styled.div`
  padding: 1rem;
  font-weight: 700;
  background-color: #a11f20;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
`;

export const MailButton = styled.a`
  text-decoration: none;
  padding: 1rem;
  font-weight: 700;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.linearEnd};
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
`;
