import { useState } from "react"
import * as S from "./burger.syle"

import Nav from "../nav"

const Burger = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <S.Burger open={open} onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </S.Burger>
      <Nav open={open} />
    </>
  )
}

export default Burger
