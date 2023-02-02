import React from "react";
import { Link } from "react-router-dom";
import StyledCountry from "./styles/Country.styled";

const Country = ({ item }) => {
  const { population, region, capital, flags, name, cca2 } = item;
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
    <StyledCountry key={cca2}>
      <Link className="img" to={`/info/${cca2}`}>
        <img loading="lazy" src={flags.svg} alt={`Flag of ${name.common}`} />
      </Link>
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
