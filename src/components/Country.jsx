import React from "react";
import StyledCountry from "./styles/Country.styled";

const Country = ({ item }) => {
  console.log(item);
  const { population, region, capital, flags, name } = item;
  function addCommas(n) {
    var rx = /(\d+)(\d{3})/;
    return String(n).replace(/^\d+/, function (w) {
      while (rx.test(w)) {
        w = w.replace(rx, "$1,$2");
      }
      return w;
    });
  }
  return (
    <StyledCountry>
      <div className="img">
        <img src={flags.svg} alt={`Flag of ${name.common}`} />
      </div>
      <div className="country-info">
        <h3>{name.common}</h3>
        <p>
          <span>Population: </span>
          {addCommas(population)}
        </p>
        <p>
          <span>Region: </span>
          {region}
        </p>
        <p>
          <span>Capital: </span>
          {capital ? capital[0] : "none"}
        </p>
      </div>
    </StyledCountry>
  );
};

export default Country;
