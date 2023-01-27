import React, { useState } from "react";
import { useGlobalContext } from "../context";
import StyledList from "./styles/ListStyled.styled";

const Search = () => {
  const { setFilterRegion, filterRegion, setName, name } = useGlobalContext();
  const [listActive, setListActive] = useState(false);

  function handleClickList() {
    setListActive(!listActive);
  }

  return (
    <StyledList>
      <div className="find-box">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="country-find"
          type="text"
          placeholder="Search for country..."
        />
      </div>
      <nav onClick={handleClickList}>
        <p className="filter-list">
          {filterRegion === "all"
            ? "Filter by Region"
            : `${filterRegion === "ame" ? "America" : filterRegion}`}
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
        {listActive && (
          <div className="listDrop">
            <p onClick={() => setFilterRegion("Africa")}>Africa</p>
            <p onClick={() => setFilterRegion("ame")}>America</p>
            <p onClick={() => setFilterRegion("Asia")}>Asia</p>
            <p onClick={() => setFilterRegion("Europe")}>Europe</p>
            <p onClick={() => setFilterRegion("Oceania")}>Oceania</p>
          </div>
        )}
      </nav>
    </StyledList>
  );
};

export default Search;
