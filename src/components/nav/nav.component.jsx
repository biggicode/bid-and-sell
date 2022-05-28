import { useDispatch, useSelector } from "react-redux";
import { logoutInitiate } from "../../redux/user.action";

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
        Acasa
      </S.Link>
      <S.Link to="/auctions" onClick={handleNavLinkClick}>
        Licitatii
      </S.Link>
      <S.Link to="/sell" onClick={handleNavLinkClick}>
        Vinde
      </S.Link>
      {isMobile &&
        (currentUser ? (
          <>
            <S.ProfileDiv>
              <i className="icon__user" />
              {currentUser.displayName === ""
                ? currentUser.email
                : currentUser.displayName}
            </S.ProfileDiv>
            <S.Link to="/licitatilemele" onClick={handleNavLinkClick}>
              Licitatile mele
            </S.Link>
            <S.Link to="/licitatiicastigate" onClick={handleNavLinkClick}>
              Licitatii castigate
            </S.Link>
            <S.LogOutButton onClick={handleLogOut} type="button">
              Deconectare <i className="icon__log-out" />
            </S.LogOutButton>
          </>
        ) : (
          <>
            <S.Link to="/login" onClick={handleNavLinkClick}>
              Autentificare
            </S.Link>
            <S.Link to="/register" onClick={handleNavLinkClick}>
              Inregistrare
            </S.Link>
          </>
        ))}
    </S.Nav>
  );
};

export default Nav;
