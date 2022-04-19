import { useEffect, useState } from "react"
import { collection, onSnapshot } from "firebase/firestore"
import { db } from "../../config/firebase"

import Row from "../grid-system/row"
import Grid from "../grid-system/grid"
import AuctionCard from "../auction-card"

const Auctions = () => {
  const [auctionsList, setAuctionsList] = useState([])

  useEffect(() => {
    onSnapshot(collection(db, "auctions"), (querySnapshot) => {
      const list = []
      querySnapshot.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() })
      })

      setAuctionsList(list)
      console.log(list)
    })
  }, [])
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
              key={auction.id}
              id={auction.id}
            />
          )
        })}
      </Grid>
    </Row>
  )
}

export default Auctions
