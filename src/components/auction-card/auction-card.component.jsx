import { useEffect, useState } from "react"

import * as S from "./auction-card.style"
import { storage } from "../../config/firebase"
import { ref, getDownloadURL } from "firebase/storage"

const AuctionCard = ({
  auctionTitle,
  startingPrice,
  currentPrice,
  imagePath,
  id,
}) => {
  const [imgUrl, setImageUrl] = useState("")
  const pathReference = ref(storage, imagePath)

  useEffect(() => {
    getDownloadURL(pathReference)
      .then((url) => {
        setImageUrl(url)
      })
      .catch((error) => {
        console.log("Can't get image card url", error)
      })
  }, [])

  return (
    <S.Card>
      <S.CardHeader>23:10</S.CardHeader>
      <S.CardBody>
        <S.CardImg src={imgUrl} />
        <S.AuctionTitle>{auctionTitle}</S.AuctionTitle>
        <S.PriceSection>
          <S.Price>
            <p>Starting Price</p>
            <p>$ {startingPrice}</p>
          </S.Price>
          <S.Price>
            <p>Current Price</p>
            <p>$ {currentPrice}</p>
          </S.Price>
        </S.PriceSection>
        <S.ButtonSection>
          <S.Link to={`/auction/${id}`}>Place bid!</S.Link>
        </S.ButtonSection>
      </S.CardBody>
    </S.Card>
  )
}

export default AuctionCard
