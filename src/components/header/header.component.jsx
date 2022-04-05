import * as S from "./header.style"
import Logo from "../logo"
import Nav from "../nav"
import Burger from "../burger"

const Header = () => {
  return (
    <S.Header>
      <Logo />
      <Burger />
      <Nav />
    </S.Header>
  )
}

export default Header
