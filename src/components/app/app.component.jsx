import { ThemeProvider } from "styled-components"
import theme from "../theme"

import Header from "../header"
import Home from "../home"
import Auctions from "../auctions"
import Sell from "../sell"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      This is app
    </ThemeProvider>
  )
}

export default App
