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
    width: 24rem;
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
  }
  nav {
    font-size: 1rem;
    padding: 0.8rem 2.4rem;
    box-shadow: 2px 2px 5px #ddd;
    margin: 0 0 0 auto;
  }
`;

export default StyledList;
