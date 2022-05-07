import { useState } from "react";

import * as S from "./user-nav.style";

const UserNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <S.DesktopUserNav onClick={() => setOpen(!open)}>
      <i className="icon__user" />
      User Name
      <S.Chevron open={open} className="icon__arrow_down" />
    </S.DesktopUserNav>
  );
};

export default UserNav;
