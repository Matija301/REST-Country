import React from "react";
import StyledLoading from "./styles/LoadingStyled.styled";
const Loading = () => {
  return (
    <StyledLoading>
      <div className="text">Loading</div> <div className="ring"></div>
    </StyledLoading>
  );
};

export default Loading;
