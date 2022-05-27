import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./redirect-page.style";

const RedirectPage = () => {
  const [seconds, setSeconds] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const myTimeout = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(myTimeout);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds - 1);
      console.log("executat");
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <S.Container>
      <S.ContainerTitle>
        Pentru a accesa aceasta pagina trebuie sa fiti autentificati !
      </S.ContainerTitle>
      <S.ContainerSubtitle>
        Veti fi redirectionat in {seconds} secunde.
      </S.ContainerSubtitle>
    </S.Container>
  );
};

export default RedirectPage;
