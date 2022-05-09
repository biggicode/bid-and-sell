import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutInitiate } from "../../redux/user.action";

import UserNav from "../user-nav";
import * as S from "./nav.style";

const Nav = ({ openNav, handleNavLinkClick, isMobile }) => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    if (currentUser) {
      dispatch(logoutInitiate());
    }
  };

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
      {isMobile ? (
        currentUser ? (
          <button onClick={handleLogOut} type="button">
            LOG OUT
          </button>
        ) : (
          <>
            <S.Link to="/login" onClick={handleNavLinkClick}>
              LOGIN
            </S.Link>
            <S.Link to="/register" onClick={handleNavLinkClick}>
              REGISTER
            </S.Link>
          </>
        )
      ) : (
        ""
      )}
    </S.Nav>
  );
};

export default Nav;
