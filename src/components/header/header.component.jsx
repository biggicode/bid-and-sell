import { useState } from "react"
import * as S from "./header.style"
import Logo from "../logo"
import Burger from "../burger"
import Nav from "../nav"

const Header = () => {
  const [openNav, setOpenNav] = useState(false)

  const handleBurgerClick = () => {
    setOpenNav(!openNav)
  }

  const handleNavLinkClick = () => {
    setOpenNav(false)
  }

  return (
    <S.Header>
      <Logo />
      <Burger openNav={openNav} handleBurgerClick={handleBurgerClick} />
      <Nav openNav={openNav} handleNavLinkClick={handleNavLinkClick} />
    </S.Header>
  )
}

export default Header
