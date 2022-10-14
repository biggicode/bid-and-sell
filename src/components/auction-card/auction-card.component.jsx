import { useEffect, useState } from "react";

import * as S from "./auction-card.style";
import { storage } from "../../config/firebase";
import { ref, getDownloadURL } from "firebase/storage";
import { GetAuctionTime } from "../../utils/auction-time";

const AuctionCard = ({
  auctionTitle,
  startingPrice,
  currentPrice,
  imagePath,
  dueDate,
  id,
}) => {
  const [imgUrl, setImageUrl] = useState("");
  const pathReference = ref(storage, imagePath);
  const [remainingTime, setRemainingTime] = useState({});

  useEffect(() => {
    getDownloadURL(pathReference)
      .then((url) => {
        setImageUrl(url);
      })
      .catch((error) => {
        console.log("Can't get image card url", error);
      });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setRemainingTime(GetAuctionTime(dueDate));
    }, 1000 * 5);
  });

  return (
    <S.Card>
      <S.CardHeader>
        {remainingTime === "expired"
          ? "Expired"
          : `${remainingTime.hours}:${remainingTime.minutes}`}
      </S.CardHeader>
      <S.CardBody>
        <S.CardImg src={imgUrl} />
        <S.AuctionTitle>{auctionTitle}</S.AuctionTitle>
        <S.PriceSection>
          <S.Price>
            <p>Pret de pornire</p>
            <p>{startingPrice}LEI</p>
          </S.Price>
          <S.Price>
            <p>Pretul curent</p>
            <p>{currentPrice}LEI</p>
          </S.Price>
        </S.PriceSection>
        <S.ButtonSection>
          <S.Link to={`/auction/${id}`}>Liciteaza!</S.Link>
        </S.ButtonSection>
      </S.CardBody>
    </S.Card>
  );
};

export default AuctionCard;
