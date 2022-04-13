import * as S from "./sell.style"

const Sell = () => {
  return (
    <S.Form>
      <S.Title>Sell an object</S.Title>
      <S.SemiTitle>Object details</S.SemiTitle>
      <S.Label>Auction Title</S.Label>
      <S.Input type="text" placeholder="Ex.: A big white bicycle with 2 rims" />
      <S.Label>Image</S.Label>
      <S.Input type="file" />
      <S.Label>Description</S.Label>
      <S.TextArea placeholder="Try to write something that you wish you will find if you read this"></S.TextArea>
      <S.Label>Price</S.Label>
      <S.Input type="number" />
      <S.Separator />
      <S.SemiTitle>Contact info</S.SemiTitle>
      <S.Label>Your city</S.Label>
      <S.Input type="text" />
      <S.Label>E-mail address</S.Label>
      <S.Input type="mail" />
      <S.Label>Phone number</S.Label>
      <S.Input type="tell" />
      <S.Separator />
      <S.Button type="submit">Create auction!</S.Button>
    </S.Form>
  )
}

export default Sell
