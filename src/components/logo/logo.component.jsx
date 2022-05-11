import * as S from "./logo.style";

const Logo = () => {
  return (
    <S.Logo to="/">
      <S.Icon className="icon__auction" />
      <S.Text>Bid & Sell</S.Text>
    </S.Logo>
  );
};

export default Logo;
