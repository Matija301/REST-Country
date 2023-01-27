import axios from "axios";
import React, { useContext, useState } from "react";
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
