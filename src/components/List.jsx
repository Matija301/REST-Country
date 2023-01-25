import React from "react";
import SectionStyled from "./styles/SectionStyle.styled";
import Country from "./Country";
const List = ({ data }) => {
  console.log(data);
  return (
    <SectionStyled>
      {data.map((item, index) => {
        if (index > 10) {
          return <Country item={item}></Country>;
        } else {
          return;
        }
      })}
    </SectionStyled>
  );
};

export default List;
