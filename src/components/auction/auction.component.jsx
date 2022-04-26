import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, onSnapshot } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";

import { db, storage } from "../../config/firebase";
import * as S from "./auction.style";

const Auction = () => {
  const { id } = useParams();

  const [auction, setAuction] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    onSnapshot(doc(db, "auctions", id), (doc) => {
      setAuction(doc.data());
    });
  }, []);

  const getImageUrl = () => {
    if (!auction) return;

    getDownloadURL(ref(storage, auction.imagePath))
      .then((url) => setImageUrl(url))
      .catch((error) => {
        console.log("Can't get image url in auction page", error);
      });
  };

  getImageUrl();

  console.log(auction);

  return (
    <>
      <S.AuctionTitle>{auction?.auctionTitle}</S.AuctionTitle>
      <S.GreySection>Time remaining: 24h 20min</S.GreySection>
      <S.Img src={imageUrl} />
      <S.PriceSection>
        <S.GreySection>Current Price: {auction?.currentPrice}</S.GreySection>
        <S.Button>Place bid!</S.Button>
      </S.PriceSection>
      <S.Description>
        <h3>Description</h3>
        {auction?.description}
      </S.Description>
    </>
  );
};

export default Auction;
