import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { db, storage } from "../../config/firebase";
import * as S from "./auction.style";

const Auction = () => {
  const currentUser = useSelector(({ user }) => user.currentUser);
  const { id } = useParams();
  const auctionRef = doc(db, "auctions", id);

  const [auction, setAuction] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    onSnapshot(auctionRef, (doc) => {
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

  const placeTenPercent = async () => {
    await updateDoc(auctionRef, {
      currentPrice: Math.trunc(auction.currentPrice * 1.1),
    });
  };

  console.log(auction);

  return (
    <>
      <S.AuctionTitle>{auction?.auctionTitle}</S.AuctionTitle>
      <S.GreySection>Time remaining: 24h 20min</S.GreySection>
      <S.Img src={imageUrl} />
      <S.PriceSection>
        <S.GreySection>Current Price: {auction?.currentPrice}</S.GreySection>
        {currentUser ? (
          <S.Button onClick={placeTenPercent}>Place bid! + 10%</S.Button>
        ) : (
          <div>
            In order to participate on this auction you have to{" "}
            <Link to="/register">register</Link> or{" "}
            <Link to="/login">log in!</Link>
          </div>
        )}
      </S.PriceSection>
      <S.Description>
        <h3>Description</h3>
        {auction?.description}
      </S.Description>
    </>
  );
};

export default Auction;
