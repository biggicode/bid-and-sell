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
import * as S from "./auctions.style";

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

  //to do: update clockdown to 1 sec
  return auctionsList.length === 0 ? (
    <S.Container>
      <S.ContainerTitle>
        In acest moment nu este nicio licitatie in desfasurere.
      </S.ContainerTitle>
      <S.ContainerSubtitle>
        <S.StyledLink to="/sell">Creati</S.StyledLink> o licitatie.
      </S.ContainerSubtitle>
    </S.Container>
  ) : (
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
