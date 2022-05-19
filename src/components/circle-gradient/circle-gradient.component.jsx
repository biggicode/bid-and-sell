import * as S from "./circle-gradient.style";

const CircleGradient = ({ type, top, bottom, left, right }) => {
  return (
    <S.Circle
      top={top}
      bottom={bottom}
      left={left}
      right={right}
      type={type}
    ></S.Circle>
  );
};

export default CircleGradient;
