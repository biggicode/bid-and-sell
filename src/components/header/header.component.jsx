import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import * as S from "./header.style";
import Logo from "../logo";
import Burger from "../burger";
import Nav from "../nav";
import UserNav from "../user-nav";

//To do: bug if you refresh in my auctions

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);

  const currentUser = useSelector(({ user }) => user.currentUser);

  const updateMedia = () => {
    setIsMobile(window.innerWidth < 769);
  };

  const handleBurgerClick = () => {
    setOpenNav(!openNav);
  };

  const handleNavLinkClick = () => {
    setOpenNav(false);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <S.Header>
      <Logo />
      <Burger openNav={openNav} handleBurgerClick={handleBurgerClick} />
      <Nav
        openNav={openNav}
        handleNavLinkClick={handleNavLinkClick}
        isMobile={isMobile}
      />
      {!isMobile &&
        (currentUser ? (
          <UserNav />
        ) : (
          <div>
            <S.Link to="/login" onClick={handleNavLinkClick}>
              Log in
            </S.Link>
            <S.Link type="register" to="/register" onClick={handleNavLinkClick}>
              Register
            </S.Link>
          </div>
        ))}
    </S.Header>
  );
};

export default Header;
