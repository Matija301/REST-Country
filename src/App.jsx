import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import List from "./components/List";
import Loading from "./components/Loading";
import Search from "./components/Search";
import GlobalStyle from "./components/styles/Global";
import { useGlobalContext } from "./context";

const theme = {
  color: {
    color1: " hsl(200, 15%, 8%)",
    color2: "hsl(207, 26%, 17%)",
    color3: "hsl(209, 23%, 22%)",
    color4: "hsl(0, 0%, 52%)",
    color5: "hsl(0, 0%, 98%)",
    color6: "hsl(0, 0%, 100%)",
  },
  size: {
    size2: "1.6rem",
    size1: "1.4rem",
  },
};

const App = () => {
  const { setData, setLoading, loading, filterRegion } = useGlobalContext();
  async function getData() {
    const urlAll = "https://restcountries.com/v3.1/all";
    const region = `https://restcountries.com/v3.1/region/${filterRegion}`;
    try {
      const { data: getData } = await axios.get(
        filterRegion === "all" ? urlAll : region
      );
      setData(getData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw new Error(error);
    }
  }
  useEffect(() => {
    setLoading(true);
    getData();
  }, [filterRegion]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <Search></Search>
      {loading ? <Loading></Loading> : <List></List>}
    </ThemeProvider>
  );
};

export default App;
