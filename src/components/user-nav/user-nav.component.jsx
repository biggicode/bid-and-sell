import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logoutInitiate } from "../../redux/user.action";

import * as S from "./user-nav.style";

const UserNav = () => {
  const [open, setOpen] = useState(false);
  const currentUser = useSelector(({ user }) => user.currentUser);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    if (currentUser) {
      dispatch(logoutInitiate());
    }
  };

  return (
    <S.DesktopUserNav onClick={() => setOpen(!open)}>
      <i className="icon__user" />
      {currentUser.displayName === ""
        ? currentUser.email
        : currentUser.displayName}
      <S.Chevron open={open} className="icon__arrow_down" />
      {open && (
        <S.UserNavBody>
          <S.StyledLink to="/licitatilemele">Licitatile mele</S.StyledLink>
          <S.StyledLink to="/licitatiicastigate">
            Licitatii castigate
          </S.StyledLink>
          <S.LogOutButton onClick={handleLogOut}>
            Log Out <i className="icon__log-out" />
          </S.LogOutButton>
        </S.UserNavBody>
      )}
    </S.DesktopUserNav>
  );
};

export default UserNav;
