import { useState } from "react";

import * as S from "./user-nav.style";

const UserNav = ({ handleLogOut }) => {
  const [open, setOpen] = useState(false);

  return (
    <S.DesktopUserNav onClick={() => setOpen(!open)}>
      <i className="icon__user" />
      User Name
      <S.Chevron open={open} className="icon__arrow_down" />
      {open && (
        <S.UserNavBody>
          <S.StyledLink to="/">Licitatile mele</S.StyledLink>
          <S.StyledLink to="/">Licitatii castigate</S.StyledLink>
          <button onClick={handleLogOut}>Log Out</button>
        </S.UserNavBody>
      )}
    </S.DesktopUserNav>
  );
};

export default UserNav;
