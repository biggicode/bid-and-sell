import { useState } from "react"
import * as S from "./burger.syle"

const Burger = ({ openNav, handleBurgerClick }) => {
  return (
    <S.Burger openNav={openNav} onClick={handleBurgerClick}>
      <div></div>
      <div></div>
      <div></div>
    </S.Burger>
  )
}

export default Burger
