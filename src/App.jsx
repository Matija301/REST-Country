import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import CountryDetails from "./components/CountryDetails";
import Error from "./components/Error";
import Header from "./components/Header";
import Home from "./components/Home";
import GlobalStyle from "./components/styles/Global";
import { useGlobalContext } from "./context";

const theme = {
  color: {
    colorBackground: "#ffffff",
    colorBody: " #ffffff",
    colorText: "#000000",
    colorHover: "#333",
  },
  shades: {
    shade2: "#202c377a",
    shade1: "#fafafa3b",
  },
  size: {
    size2: "1.6rem",
    size1: "1.4rem",
  },
};

const invertedTheme = {
  ...theme,
  color: {
    colorBackground: "#2b3743",
    colorBody: " #202d36",
    colorText: "#f8fcfc",
    colorHover: "#ccc",
  },
  shades: {
    shade1: "#202c377a",
    shade2: "#fafafa3b",
  },
};

const App = () => {
  const { setLoading, filterRegion, name, lightMode, getDataCountry } =
    useGlobalContext();

  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      setLoading(true);
      getDataCountry();
    }
    return () => (ignore = true);
  }, [filterRegion, name]);

  useEffect(() => {
    localStorage.setItem("lightMode", lightMode);
  }, [lightMode]);

  return (
    <ThemeProvider theme={lightMode === "light" ? theme : invertedTheme}>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/info/:countryID" element={<CountryDetails />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
