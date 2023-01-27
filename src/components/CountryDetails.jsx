import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useGlobalContext } from "../context";
import Loading from "./Loading";
import CountryDetail from "./styles/CountryInfo.styled";
import Error from "./Error";

const CountryDetails = () => {
  const { data, setFilterRegion, getDataCountry, setData } = useGlobalContext();
  let { countryID } = useParams();
  const [loading, setLoading] = useState(true);
  const [country, setCountry] = useState([]);

  function addCommas(n) {
    var rx = /(\d+)(\d{3})/;
    return String(n).replace(/^\d+/, function (w) {
      while (rx.test(w)) {
        w = w.replace(rx, "$1,$2");
      }
      return w;
    });
  }

  function getNativeName(item) {
    const newArr = Object.entries(item.nativeName);
    return newArr;
  }
  function getCurrencies(item) {
    const newArr = Object.entries(item);
    return newArr;
  }
  function getLang(item) {
    const newArr = Object.entries(item);
    return newArr;
  }

  async function getData() {
    try {
      const allDataCountry = await axios.get(
        `https://restcountries.com/v3.1/all`
      );
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${countryID}`
      );
      setData(allDataCountry.data);
      setCountry(response.data[0]);
      setLoading(false);
    } catch (error) {
      setCountry("Error404");
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  if (country === "Error404") {
    return <Error></Error>;
  }

  const {
    flags,
    name = "none",
    population = "none",
    region = "none",
    subregion = "none",
    capital = "none",
    tld = "none",
    currencies = null,
    languages = "none",
    borders = null,
  } = country;

  const nativeNames = getNativeName(name);
  const money = currencies && getCurrencies(currencies);
  const lang = getLang(languages);

  return (
    <CountryDetail>
      <Link className="link" to={".."}>
        <div className="link-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="arrow-left"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>
          <p>Back</p>
        </div>
      </Link>
      <section className="main-section">
        <div className="container-image">
          <img src={flags.svg} alt="" />
        </div>
        <article className="container-info">
          <h2>{name.common}</h2>
          <div className="info__country">
            <div className="info-1-part info-space ">
              <p className="bad-info-object">
                <span>Native Name: </span>
                {nativeNames.map((countryName) => {
                  return (
                    <p>
                      {countryName[0]}:{countryName[1].common};
                    </p>
                  );
                })}
              </p>
              <p>
                <span>Population: </span>
                {addCommas(population)}
              </p>
              <p>
                <span>Region: </span>
                {region}
              </p>
              <p>
                <span>Sub region: </span>
                {subregion}
              </p>
              <p>
                <span>Capital: </span>
                {capital ? capital[0] : "none"}
              </p>
            </div>
            <div className="info-2-part info-space">
              <p>
                <span>Top level domain: </span>
                {tld}
              </p>
              <p className="bad-info-object">
                <span>Currencies: </span>
                {currencies
                  ? money.map((item) => {
                      return (
                        <p>
                          {item[0]}:{item[1].name},{item[1].symbol};
                        </p>
                      );
                    })
                  : "none"}
              </p>
              <p className="bad-info-object">
                <span>Language: </span>
                {lang.map((item) => {
                  return <p>{item[1]},</p>;
                })}
              </p>
            </div>
          </div>
          <div className="border">
            <p>
              <span>Border Countries: </span>
            </p>
            {borders
              ? borders.map((item) => {
                  const object = data.find(({ cca3 }) => cca3 === item);
                  return <p className="country-border">{object.name.common}</p>;
                })
              : "none"}
          </div>
        </article>
      </section>
    </CountryDetail>
  );
};

export default CountryDetails;
