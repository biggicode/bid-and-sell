import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth } from "../../config/firebase";

import Header from "../header";
import Home from "../home";
import Auctions from "../auctions";
import Sell from "../sell";
import Auction from "../auction";
import Register from "../register";
import Login from "../login";
import Grid from "../grid-system/grid";
import Footer from "../footer";
import MyAuctions from "../my-auctions";
import WonAuctions from "../won-auctions";
import { setUser } from "../../redux/user.action";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(setUser(user));
      } else {
        dispatch(setUser(null));
      }
    });
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <div style={{ height: "65px" }}></div>
        <Grid fullHeight={true} addPadding={true}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auctions" element={<Auctions />} />
            <Route path="/sell" element={<Sell />} />
            <Route path="/auction/:id" element={<Auction />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/licitatilemele" element={<MyAuctions />} />
            <Route path="/licitatiicastigate" element={<WonAuctions />} />
          </Routes>
        </Grid>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
