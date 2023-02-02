import React from "react";
import { useGlobalContext } from "../context";
import GoHome from "./GoHome";
import List from "./List";
import Loading from "./Loading";
import Search from "./Search";

const Home = () => {
  const { loading, showGoHome } = useGlobalContext();
  return (
    <>
      <Search></Search>
      {loading ? <Loading></Loading> : <List></List>}
      {showGoHome ? <GoHome></GoHome> : ""}
    </>
  );
};

export default Home;
