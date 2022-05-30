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
import { useNavigate } from "react-router-dom";

import { db, storage } from "../../config/firebase";
import * as S from "./auction.style";
import { GetAuctionTime } from "../../utils/auction-time";

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

      if (!fetchedDoc) navigate("/");

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
    // console.log("time checked");
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
      winnerName: currentUser.displayName,
    });
  };

  const handleAmountSubmit = async (e) => {
    e.preventDefault();

    if ((bidAmount <= auction.currentPrice) | !bidAmount) return;

    await updateDoc(auctionRef, {
      currentPrice: bidAmount,
      winnerEmail: currentUser.email,
      winnerId: currentUser.uid,
      winnerName: currentUser.displayName,
    });
  };

  return (
    <>
      <S.AuctionTitle>{auction?.auctionTitle}</S.AuctionTitle>
      <S.Img src={imageUrl} alt="auction image with the object" />
      <S.RightSection>
        <S.GreySection>
          Timp ramas:{" "}
          <span>
            {remainingTime.hours} ore {remainingTime.minutes}minute
          </span>
        </S.GreySection>
        <S.GreySection>
          Pretul curent: <span>{auction?.currentPrice}LEI</span>
        </S.GreySection>
        {currentUser?.uid === auction?.winnerId && (
          <S.GreySection>
            Dumneavoastra sunteti actualul castigator!
          </S.GreySection>
        )}
        {currentUser ? (
          currentUser.uid === auction?.creatorId ? (
            <p>
              Nu puteti licita la propria licitatie. Puteti vedea actualul
              castigator in sectiunea "Licitatile mele".
            </p>
          ) : (
            <>
              <S.BidForm onSubmit={handleAmountSubmit}>
                <S.FormTitle>Plasati o suma:</S.FormTitle>
                <S.InputBidForm
                  type="number"
                  min={auction?.currentPrice}
                  value={bidAmount}
                  onChange={(e) => setBidAmount(e.target.value)}
                />
                <S.SubmitBidForm>Plasati suma</S.SubmitBidForm>
              </S.BidForm>
              <S.Button onClick={placeTenPercent}>Plasati 10%</S.Button>
            </>
          )
        ) : (
          <div>
            Pentru a putea participa la aceasta licitatie trebuie sa te{" "}
            <S.StyledLink to="/register">inregistrezi</S.StyledLink> sau sa te{" "}
            <S.StyledLink to="/login">autentifici!</S.StyledLink>
          </div>
        )}
      </S.RightSection>
      <S.Description>
        <S.DescriptionTitle>Descriere</S.DescriptionTitle>
        {auction?.description}
      </S.Description>
    </>
  );
};

export default Auction;
