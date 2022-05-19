import styled from "styled-components";

export const Circle = styled.div`
  ${({ top }) => (top ? `top: ${top}` : "")};
  ${({ bottom }) => (bottom ? `bottom: ${bottom}` : "")};
  ${({ right }) => (right ? `right: ${right}` : "")};
  ${({ left }) => (left ? `left: ${left}` : "")};

  z-index: -1;

  position: absolute;
  border-radius: 50%;
  width: ${({ type }) => (type === "black" ? "90px" : "160px")};
  height: ${({ type }) => (type === "black" ? "90px" : "160px")};
  background: ${({ type }) =>
    type === "black"
      ? "linear-gradient(45deg, #000000, #343434)"
      : "linear-gradient(45deg, #B42FBE, #CC60BD, #FFCBBA)"};
`;
