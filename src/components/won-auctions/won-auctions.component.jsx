import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { collection, query, where, onSnapshot } from "firebase/firestore";

import { db } from "../../config/firebase";
import LiveTrophyCard from "../live-trophy-card";

//To do: refresh

const WonAuctions = () => {
  const currentUser = useSelector(({ user }) => user.currentUser);
  const [wonAuctions, setWonAuctions] = useState([]);

  useEffect(() => {
    if (!currentUser) return;
    const q = query(
      collection(db, "finished"),
      where("winnerId", "==", currentUser.uid)
    );

    onSnapshot(q, (querySnapshot) => {
      const list = [];
      querySnapshot.forEach((doc) => {
        list.push(doc.data());
      });

      setWonAuctions(list);
    });
  }, [currentUser]);

  console.log(wonAuctions);

  return (
    <>
      {wonAuctions.map((auction) => (
        <LiveTrophyCard
          key={auction.imagePath}
          title={auction.auctionTitle}
          winnerEmail={auction.winnerEmail}
          currentPrice={auction.currentPrice}
        />
      ))}
    </>
  );
};

export default WonAuctions;
