import React from "react";
import { useGlobalContext } from "../context";
import StyledGoHome from "./styles/StyledGoHome.styled";

const GoHome = () => {
  const { scrollToTop } = useGlobalContext();
  return (
    <StyledGoHome onClick={scrollToTop}>
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
          d="M4.5 15.75l7.5-7.5 7.5 7.5"
        />
      </svg>
    </StyledGoHome>
  );
};

export default GoHome;
