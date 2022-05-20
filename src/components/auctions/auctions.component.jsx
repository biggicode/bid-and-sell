import { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  setDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../config/firebase";

import Row from "../grid-system/row";
import Grid from "../grid-system/grid";
import AuctionCard from "../auction-card";

//TO DO: display a message when is no auctions

const Auctions = () => {
  const [auctionsList, setAuctionsList] = useState([]);
  const moveDocument = async (id, auction) => {
    await setDoc(doc(db, "finished", id), auction);
    await deleteDoc(doc(db, "auctions", id));
  };

  useEffect(() => {
    onSnapshot(collection(db, "auctions"), (querySnapshot) => {
      const list = [];
      querySnapshot.forEach((document) => {
        //added
        let now = new Date();
        console.log("code executed");
        if (Number(document.data().dueDate) < now.getTime()) {
          moveDocument(document.id, document.data());
        }
        //added
        list.push({ id: document.id, ...document.data() });
      });

      setAuctionsList(list);
      console.log(list);
    });
  }, []);

  //TO DO: protect auction id with usefull 1:42
  return (
    <Row>
      <Grid fullHeight={false} addPadding={false}>
        {auctionsList.map((auction) => {
          return (
            <AuctionCard
              auctionTitle={auction.auctionTitle}
              startingPrice={auction.startingPrice}
              currentPrice={auction.currentPrice}
              imagePath={auction.imagePath}
              dueDate={auction.dueDate}
              key={auction.id}
              id={auction.id}
            />
          );
        })}
      </Grid>
    </Row>
  );
};

export default Auctions;
