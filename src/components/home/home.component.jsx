import * as S from "./home.style";
import CircleGradient from "../circle-gradient";

const Home = () => {
  return (
    <>
      <S.Introduction>
        <S.Title>Bid & Sell </S.Title>
        <S.StyledP>Doar liciteaza si vinde.</S.StyledP>
      </S.Introduction>
      <S.SemiTitle>Cum functioneaza?</S.SemiTitle>
      <CircleGradient top="300px" type="black" />
      <CircleGradient bottom="300px" right="50px" type="black" />
      <CircleGradient top="20px" right="50px" />
      <CircleGradient bottom="100px" left="-20px" />
    </>
  );
};

export default Home;
