import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  doc,
  onSnapshot,
  updateDoc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { db, storage } from "../../config/firebase";
import * as S from "./auction.style";
import { GetAuctionTime } from "../../utils/auction-time";
//TO DO: validate image type
//TO DO: go into firebase console and update read/write
//To do: nu lasa userul sa isi faca bid la propria oferta

const Auction = () => {
  const currentUser = useSelector(({ user }) => user.currentUser);
  const { id } = useParams();
  const auctionRef = doc(db, "auctions", id);

  const [auction, setAuction] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [bidAmount, setBidAmount] = useState("");
  const [remainingTime, setRemainingTime] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    onSnapshot(auctionRef, (document) => {
      let fetchedDoc = document.data();

      console.log("Document fetched");
      setAuction(fetchedDoc);
      // setBidAmount()
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (!auction) return;
      setRemainingTime(GetAuctionTime(auction.dueDate));
    }, 1000 * 5);
  });

  useEffect(() => {
    let now = new Date();
    console.log("time checked");
    if (auction && Number(auction.dueDate) < now.getTime()) {
      const moveDocument = async () => {
        await setDoc(doc(db, "finished", id), auction);
        await deleteDoc(doc(db, "auctions", id));
        navigate("/");
      };

      moveDocument();
    }
  });

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
      winnerEmail: currentUser.email,
      winnerId: currentUser.uid,
    });
  };

  const handleAmountSubmit = async (e) => {
    e.preventDefault();

    if ((bidAmount <= auction.currentPrice) | !bidAmount) return;

    await updateDoc(auctionRef, {
      currentPrice: bidAmount,
      winnerEmail: currentUser.email,
      winnerId: currentUser.uid,
    });
  };

  console.log(auction);

  return (
    <>
      <S.AuctionTitle>{auction?.auctionTitle}</S.AuctionTitle>
      <S.Img src={imageUrl} />
      <S.RightSection>
        <S.GreySection>
          Time remaining:{" "}
          <span>
            {remainingTime.hours} ore {remainingTime.minutes}minute
          </span>
        </S.GreySection>
        <S.GreySection>
          Current Price: <span>{auction?.currentPrice}$</span>
        </S.GreySection>
        {currentUser ? (
          <>
            <S.BidForm onSubmit={handleAmountSubmit}>
              <S.FormTitle>Place amount</S.FormTitle>
              <S.InputBidForm
                type="number"
                min={auction?.currentPrice}
                value={bidAmount}
                onChange={(e) => setBidAmount(e.target.value)}
              />
              <S.SubmitBidForm>Submit my bid amount</S.SubmitBidForm>
            </S.BidForm>
            <S.Button onClick={placeTenPercent}>Place bid! + 10%</S.Button>
          </>
        ) : (
          <div>
            In order to participate on this auction you have to{" "}
            <Link to="/register">register</Link> or{" "}
            <Link to="/login">log in!</Link>
          </div>
        )}
      </S.RightSection>
      <S.Description>
        <S.DescriptionTitle>Description</S.DescriptionTitle>
        {auction?.description}
      </S.Description>
    </>
  );
};

export default Auction;
