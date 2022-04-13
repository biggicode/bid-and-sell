import * as S from "./auction-card.style"
import car from "./car.jpg"

const AuctionCard = () => {
  return (
    <S.Card>
      <S.CardHeader>23:10</S.CardHeader>
      <S.CardBody>
        <S.CardImg src={car} />
        <S.PriceSection>
          <S.Price>
            <p>Starting Price</p>
            <p>$ 100</p>
          </S.Price>
          <S.Price>
            <p>Current Price</p>
            <p>$ 125</p>
          </S.Price>
        </S.PriceSection>
        <S.ButtonSection>
          <button type="button">Place bid!</button>
        </S.ButtonSection>
      </S.CardBody>
    </S.Card>
  )
}

export default AuctionCard
