import React from "react";
import { useGlobalContext } from "../context";
import List from "./List";
import Loading from "./Loading";
import Search from "./Search";

const Home = () => {
  const { loading } = useGlobalContext();
  return (
    <>
      <Search></Search>
      {loading ? <Loading></Loading> : <List></List>}
    </>
  );
};

export default Home;
