import React from "react";
import { Link } from "react-router-dom";
import StyledError from "./styles/StyledError.styled";
const Error = () => {
  return (
    <StyledError>
      <p>Error 404</p>
      <Link className="link" to={".."}>
        Go back
      </Link>
    </StyledError>
  );
};

export default Error;
