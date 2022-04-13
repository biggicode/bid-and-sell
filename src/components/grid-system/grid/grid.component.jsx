import * as S from "./grid.style"

const Grid = ({ children, fullHeight, addPadding }) => {
  return (
    <S.Grid fullHeight={fullHeight} addPadding={addPadding}>
      {children}
    </S.Grid>
  )
}

export default Grid
