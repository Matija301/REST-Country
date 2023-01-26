import React from "react";
import SectionStyled from "./styles/SectionStyle.styled";
import Country from "./Country";
import { useGlobalContext } from "../context";
const List = () => {
  const { data } = useGlobalContext();
  console.log(data);
  return (
    <>
      <SectionStyled>
        {data.map((item) => {
          return <Country item={item}></Country>;
        })}
      </SectionStyled>
    </>
  );
};

export default List;
