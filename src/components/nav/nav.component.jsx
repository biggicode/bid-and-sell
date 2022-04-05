import * as S from "./nav.style"

const Nav = ({ openNav, handleNavLinkClick }) => {
  return (
    <S.Nav openNav={openNav}>
      <S.Link to="/" onClick={handleNavLinkClick}>
        Home
      </S.Link>
      <S.Link to="/auctions" onClick={handleNavLinkClick}>
        Auctions
      </S.Link>
      <S.Link to="/sell" onClick={handleNavLinkClick}>
        Sell
      </S.Link>
    </S.Nav>
  )
}

export default Nav
