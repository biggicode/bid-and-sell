import Row from "../grid-system/row"
import Grid from "../grid-system/grid"
import AuctionCard from "../auction-card"

const Auctions = () => {
  //TO DO: protect auction id with usefull 1:42
  return (
    <Row>
      <Grid fullHeight={false} addPadding={false}>
        <AuctionCard />
        <AuctionCard />
        <AuctionCard />
      </Grid>
    </Row>
  )
}

export default Auctions
