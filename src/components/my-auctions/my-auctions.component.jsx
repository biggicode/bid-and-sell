import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { collection, query, where, onSnapshot } from "firebase/firestore";

import { db } from "../../config/firebase";

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
  }, []);

  return <div>my auctions</div>;
};

export default MyAuctions;
