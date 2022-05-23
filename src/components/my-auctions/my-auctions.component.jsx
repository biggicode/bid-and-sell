import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { collection, query, where, onSnapshot } from "firebase/firestore";

import { db } from "../../config/firebase";
import LiveTrophyCard from "../live-trophy-card";

//To do: make auction delete and refresh

const MyAuctions = () => {
  const currentUser = useSelector(({ user }) => user.currentUser);
  const [liveAuctions, setLiveAuctions] = useState([]);
  const [finishedAuctions, setFinishedAuctions] = useState([]);

  useEffect(() => {
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
  }, []);

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
          currentPrice={auction.currentPrice}
          imagePath={auction.imagePath}
          showDelete={true}
        />
      ))}
    </>
  );
};

export default MyAuctions;
