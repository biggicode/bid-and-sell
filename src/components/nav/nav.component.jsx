import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutInitiate } from "../../redux/user.action";

import UserNav from "../user-nav";
import * as S from "./nav.style";

const Nav = ({ openNav, handleNavLinkClick }) => {
  const { currentUser } = useSelector((state) => state.user);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);
  const dispatch = useDispatch();

  const updateMedia = () => {
    setIsMobile(window.innerWidth < 769);
  };

  const handleLogOut = () => {
    if (currentUser) {
      dispatch(logoutInitiate());
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

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
      {currentUser ? (
        isMobile ? (
          <button onClick={handleLogOut} type="button">
            LOG OUT
          </button>
        ) : (
          <UserNav handleLogOut={handleLogOut} />
        )
      ) : (
        <>
          <S.Link to="/login" onClick={handleNavLinkClick}>
            LOGIN
          </S.Link>
          <S.Link to="/register" onClick={handleNavLinkClick}>
            REGISTER
          </S.Link>
        </>
      )}
    </S.Nav>
  );
};

export default Nav;
