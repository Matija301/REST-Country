import React from "react";
import { HeaderStyle } from "./styles/Header.styled";
const Header = () => {
  return (
    <HeaderStyle>
      <p className="logo">Where in the world?</p>
      <p className="lightmode">Dark mode</p>
    </HeaderStyle>
  );
};

export default Header;
