import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { collection, query, where, onSnapshot } from "firebase/firestore";

import { db } from "../../config/firebase";

const WonAuctions = () => {
  const currentUser = useSelector(({ user }) => user.currentUser);
  const [wonAuctions, setWonAuctions] = useState([]);

  useEffect(() => {
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
  }, []);

  console.log(wonAuctions);

  return <div>Won auctions</div>;
};

export default WonAuctions;
