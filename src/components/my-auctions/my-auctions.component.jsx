import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

import { db } from "../../config/firebase";
import LiveTrophyCard from "../live-trophy-card";

//To do: make auction delete and refresh

const MyAuctions = () => {
  const currentUser = useSelector(({ user }) => user.currentUser);
  const [liveAuctions, setLiveAuctions] = useState([]);
  const [finishedAuctions, setFinishedAuctions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) return navigate("/redirectioneaza");
    const liveQ = query(
      collection(db, "auctions"),
      where("creatorId", "==", currentUser.uid)
    );

    const finishedQ = query(
      collection(db, "finished"),
      where("creatorId", "==", currentUser.uid)
    );

    onSnapshot(liveQ, (querySnapshot) => {
      const list = [];
      querySnapshot.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
      });

      setLiveAuctions(list);
    });

    onSnapshot(finishedQ, (querySnapshot) => {
      const list = [];
      querySnapshot.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
      });

      setFinishedAuctions(list);
    });
  }, [currentUser]);

  console.log("live auctions:", liveAuctions);
  console.log("finsihed auctions:", finishedAuctions);

  return (
    <>
      {liveAuctions.map((auction) => (
        <LiveTrophyCard
          type="live"
          key={auction.id}
          id={auction.id}
          title={auction.auctionTitle}
          winnerEmail={auction.winnerEmail}
          winnerName={auction.winnerName}
          currentPrice={auction.currentPrice}
          imagePath={auction.imagePath}
          showDelete={true}
        />
      ))}
      {finishedAuctions.map((auction) => (
        <LiveTrophyCard
          key={auction.id}
          id={auction.id}
          title={auction.auctionTitle}
          winnerEmail={auction.winnerEmail}
          winnerName={auction.winnerName}
          currentPrice={auction.currentPrice}
          imagePath={auction.imagePath}
          showDelete={true}
        />
      ))}
    </>
  );
};

export default MyAuctions;
