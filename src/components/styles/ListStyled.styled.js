import styled from "styled-components";

const StyledList = styled.section`
  display: flex;
  max-width: 130rem;
  padding: 2.4rem 1.6rem;
  color: ${({ theme }) => theme.color.colorText};
  .find-box {
    background-color: ${(prop) => prop.theme.color.colorBackground};
    box-shadow: 1px 1px 3px ${({ theme }) => theme.shades.shade2};
    border: none;
    position: relative;
    display: flex;
    min-width: 25rem;
    max-width: 32rem;
    height: 2.8rem;
    border-radius: 5px;
  }
  .find-box svg {
    width: 1.2rem;
    position: absolute;
    top: 29%;
    left: 5%;
  }

  .country-find {
    background-color: ${(prop) => prop.theme.color.colorBackground};
    color: ${(prop) => prop.theme.color.colorText};
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
    box-shadow: 2px 2px 5px ${({ theme }) => theme.shades.shade2};
    margin: 0 0 0 auto;
    cursor: pointer;
    position: relative;
    background-color: ${(prop) => prop.theme.color.colorBackground};
  }
  svg {
    width: 1rem;
  }
  .listDrop {
    position: absolute;
    top: 130%;
    left: 0%;
    z-index: 999;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 1.2rem;
    line-height: 1.8;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.color.colorBackground};
  }
  @media (max-width: 850px) {
    flex-direction: column;
    gap: 2.6rem;
    .find-box {
      min-width: 10rem;
    }

    nav {
      margin: 0 auto 0 0;
    }
  }
`;

export default StyledList;
