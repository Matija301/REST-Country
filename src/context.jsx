import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
const AppContext = React.createContext();
function getLightMode() {
  const lightData = localStorage.getItem("lightMode");
  if (lightData) {
    return lightData;
  } else {
    return "light";
  }
}

const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterRegion, setFilterRegion] = useState("all");
  const [name, setName] = useState("");
  const [lightMode, setLightMode] = useState(getLightMode);
  const [showGoHome, setShowGoHome] = useState(false);

  async function getDataCountry() {
    const urlAll = "https://restcountries.com/v3.1/all";
    const region = `https://restcountries.com/v3.1/region/${filterRegion}`;
    const nameCountry = `https://restcountries.com/v3.1/name/${name}`;
    try {
      if (name === "") {
        const { data: getData } = await axios.get(
          filterRegion === "all" ? urlAll : region
        );
        setData(getData);
        setLoading(false);
      } else {
        const { data: getData } = await axios.get(nameCountry);
        setData(getData);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      setData("Error");
    }
  }

  function scrollToTop() {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    const scroll = document.addEventListener("scroll", (e) => {
      if (window.pageYOffset >= document.documentElement.clientHeight) {
        {
          setShowGoHome(true);
        }
      } else {
        setShowGoHome(false);
      }
    });
    return () => {
      removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    <AppContext.Provider
      value={{
        data,
        setData,
        loading,
        setLoading,
        filterRegion,
        setFilterRegion,
        name,
        setName,
        lightMode,
        setLightMode,
        getDataCountry,
        showGoHome,
        scrollToTop,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
