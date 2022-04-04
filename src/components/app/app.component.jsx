import { ThemeProvider } from "styled-components"
import theme from "../theme"

import Header from "../header"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      This is app
    </ThemeProvider>
  )
}

export default App
