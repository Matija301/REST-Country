import React from "react";
import StyledList from "./styles/ListStyled.styled";

const Search = () => {
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
          className="country-find"
          type="text"
          placeholder="Search for country..."
        />
      </div>
      <nav>
        <p className="filter-list">Filter by Region</p>
      </nav>
    </StyledList>
  );
};

export default Search;
