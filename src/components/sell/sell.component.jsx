import { useState } from "react"
import * as S from "./sell.style"

const initialValues = {
  auctionTitle: "",
  imgName: "",
  description: "",
  startingPrice: 10,
  creatorName: "",
  creatorEmail: "",
  phoneNumber: "",
}

const Sell = () => {
  const [state, setState] = useState(initialValues)

  const {
    auctionTitle,
    imgName,
    description,
    startingPrice,
    creatorName,
    creatorEmail,
    phoneNumber,
  } = state

  const handleInputChange = (e) => {
    const { name, value } = e.target

    setState({ ...state, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Title>Sell an object</S.Title>
      <S.SemiTitle>Object details</S.SemiTitle>
      <S.Label htmlFor="auctionTitle">Auction Title</S.Label>
      <S.Input
        type="text"
        placeholder="Ex.: A big white bicycle with 2 rims"
        name="auctionTitle"
        id="auctionTitle"
        value={auctionTitle}
        onChange={handleInputChange}
      />
      <S.Label>Image</S.Label>
      <S.Input type="file" />
      <S.Label htmlFor="description">Description</S.Label>
      <S.TextArea
        placeholder="Try to write something that you wish you will find if you read this"
        name="description"
        id="description"
        value={description}
        onChange={handleInputChange}
      ></S.TextArea>
      <S.Label htmlFor="startingPrice">Starting Price</S.Label>
      <S.Input
        type="number"
        name="startingPrice"
        id="startingPrice"
        value={startingPrice}
        onChange={handleInputChange}
      />
      <S.Separator />
      <S.SemiTitle>Contact info</S.SemiTitle>
      <S.Label htmlFor="creatorName">Your name</S.Label>
      <S.Input
        type="text"
        name="creatorName"
        id="creatorName"
        value={creatorName}
        onChange={handleInputChange}
      />
      <S.Label htmlFor="creatorEmail">E-mail address</S.Label>
      <S.Input
        type="mail"
        name="creatorEmail"
        id="creatorEmail"
        value={creatorEmail}
        onChange={handleInputChange}
      />
      <S.Label htmlFor="phoneNumber">Phone number</S.Label>
      <S.Input
        type="tell"
        name="phoneNumber"
        id="phoneNumber"
        value={phoneNumber}
        onChange={handleInputChange}
      />
      <S.Separator />
      <S.Button type="submit">Create auction!</S.Button>
    </S.Form>
  )
}

export default Sell
