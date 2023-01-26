import styled from "styled-components";

const StyledList = styled.section`
  display: flex;
  max-width: 130rem;
  padding: 2.4rem 3.2rem;
  .find-box {
    box-shadow: 2px 2px 5px #ccc;
    border: none;
    position: relative;
    display: flex;
    width: 32rem;
    border-radius: 5px;
  }
  .find-box svg {
    width: 1.2rem;
    position: absolute;
    top: 29%;
    left: 5%;
  }

  .country-find {
    appearance: none;
    border: none;
    margin: 0 0 0 3.2rem;
    font-size: 1rem;
    text-align: left;
    width: 100%;
    outline: none;
  }
  nav {
    display: flex;
    gap: 1.2rem;
    font-size: 1rem;
    padding: 0.8rem 2.4rem;
    box-shadow: 2px 2px 5px #ddd;
    margin: 0 0 0 auto;
    cursor: pointer;
    position: relative;
  }
  svg {
    width: 1rem;
  }
  .listDrop {
    position: absolute;
    top: 130%;
    left: 0%;
    background-color: #fff;
    z-index: 999;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 1.2rem;
    line-height: 1.8;
    border-radius: 10px;
  }
`;

export default StyledList;
