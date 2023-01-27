import React from "react";
import SectionStyled from "./styles/SectionStyle.styled";
import Country from "./Country";
import { useGlobalContext } from "../context";
const List = () => {
  const { data } = useGlobalContext();
  return (
    <>
      <SectionStyled>
        {data === "Error" ? (
          <h1>Country not found!</h1>
        ) : (
          data.map((item) => {
            return <Country item={item}></Country>;
          })
        )}
      </SectionStyled>
    </>
  );
};

export default List;
