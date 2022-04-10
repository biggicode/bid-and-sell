import { ThemeProvider } from "styled-components"
import theme from "../theme"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Provider } from "react-redux"
import store from "../../redux/store"

import Header from "../header"
import Home from "../home"
import Auctions from "../auctions"
import Sell from "../sell"
import Register from "../register"
import Login from "../login"
import Grid from "../grid-system/grid"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Grid>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/auctions" element={<Auctions />} />
              <Route path="/sell" element={<Sell />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Grid>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  )
}

export default App
