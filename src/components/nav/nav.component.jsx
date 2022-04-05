import * as S from "./nav.style"

const Nav = ({ open }) => {
  return (
    <S.Nav open={open}>
      <S.Link to="/">Home</S.Link>
      <S.Link to="/auctions">Auctions</S.Link>
      <S.Link to="/sell">Sell</S.Link>
    </S.Nav>
  )
}

export default Nav
