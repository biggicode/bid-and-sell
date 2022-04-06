import { ThemeProvider } from "styled-components"
import theme from "../theme"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "../header"
import Home from "../home"
import Auctions from "../auctions"
import Sell from "../sell"
import Register from "../register"
import Login from "../login"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auctions" element={<Auctions />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
