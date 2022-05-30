import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

import { db } from "../../config/firebase";
import LiveTrophyCard from "../live-trophy-card";

//To do: refresh

const WonAuctions = () => {
  const currentUser = useSelector(({ user }) => user.currentUser);
  const [wonAuctions, setWonAuctions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) return navigate("/redirectioneaza");
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

  return (
    <>
      {wonAuctions.map((auction) => (
        <LiveTrophyCard
          key={auction.imagePath}
          title={auction.auctionTitle}
          currentPrice={auction.currentPrice}
          creatorEmail={auction.creatorEmail}
          creatorName={auction.creatorName}
        />
      ))}
    </>
  );
};

export default WonAuctions;
