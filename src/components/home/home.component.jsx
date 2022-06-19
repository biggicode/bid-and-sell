import * as S from "./home.style";
import CircleGradient from "../circle-gradient";

const Home = () => {
  return (
    <>
      <S.Introduction>
        <S.Title>Bid & Sell </S.Title>
        <S.StyledP>
          Doar <S.StyledLink to="/auctions">liciteaza</S.StyledLink> si{" "}
          <S.StyledLink to="/sell">vinde</S.StyledLink>.
        </S.StyledP>
      </S.Introduction>
      <S.SemiTitle>Cum functioneaza?</S.SemiTitle>
      <S.StepsContainer>
        <S.Step>
          <S.Circle>1</S.Circle>
          <S.StepText>
            <p>
              Este necesar se detineti un cont pentru a participa la o licitatie
              implicit pentru a crea una. Inregistreaza-te accesand butonul de
              <S.StepLink to="/register"> Inregistrare</S.StepLink>! Daca ai
              deja un cont existent apasa butonul de{" "}
              <S.StepLink to="/login">Autentificare</S.StepLink>. Aceste butoane
              le gasiti in partea dreapta sus a paginii.
            </p>
          </S.StepText>
        </S.Step>
        <S.Step>
          <S.StepText alignRight={true}>
            <p>
              Creeaza o licitatie accesand pagina{" "}
              <S.StepLink to="/sell">Vinde</S.StepLink> din bara de navigatie
              sau participa la o licitatie aflata in desfasurare. Pentru a vedea
              licitatiile aflate in desfasurare accesati pagina{" "}
              <S.StepLink to="/auctions">Licitatii</S.StepLink>.
            </p>
          </S.StepText>
          <S.Circle>2</S.Circle>
        </S.Step>
        <S.Step>
          <S.Circle>3</S.Circle>
          <S.StepText>
            <p>
              Licitatiile create de catre tine le poti gasi apasand pe linkul
              <S.StepLink to="/licitatilemele"> Licitatile mele</S.StepLink>.
              Acolo poti contacta castigatorul prin intermediul adresei de
              email. Daca ati participat la o licitatie si sunteti castigator
              puteti contacta proprietarul accesand sectiunea{" "}
              <S.StepLink to="/licitatiicastigate">
                Licitatii castigate
              </S.StepLink>{" "}
              unde veti gasi emailul acestuia.
            </p>
          </S.StepText>
        </S.Step>
      </S.StepsContainer>
      <CircleGradient top="300px" type="black" />
      <CircleGradient bottom="300px" right="50px" type="black" />
      <CircleGradient top="20px" right="50px" />
      <CircleGradient bottom="100px" left="-20px" />
    </>
  );
};

export default Home;
