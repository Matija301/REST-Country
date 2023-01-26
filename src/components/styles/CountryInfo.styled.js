import styled from "styled-components";

const CountryDetail = styled.main`
  a {
    display: inline-block;
    text-decoration: none;
    color: ${(props) => props.theme.color.color2};
  }

  .link-container {
    font-size: 1.4rem;
    margin: 2.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;
    box-shadow: 0px 0px 10px #ccc;
    padding: 0.4rem 2.6rem;
  }

  .link p {
    font-size: 1.4rem;
  }

  .link svg {
    width: 1.6rem;
  }

  .main-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 700rem;
    gap: 4.8rem;
    padding: 0 2.4rem;
  }
  .container-image {
    height: 30rem;
    display: flex;
  }

  .container-image img {
    width: 100%;
  }

  .container-info h2 {
    color: ${(props) => props.theme.color.color1};
    font-size: 2rem;
    padding: 2.4rem 0;
    text-align: left;
    font-weight: 800;
  }
  .info__country {
    color: ${(props) => props.theme.color.color3};
    display: grid;
    font-size: 1rem;
    grid-template-columns: 1fr 1fr;
  }

  .info-space {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  .info__country span {
    font-weight: 600;
  }
  .border {
    font-size: 1rem;
    color: ${(props) => props.theme.color.color3};
    padding-top: 2.4rem;
    display: flex;
    gap: 0.4rem;
    flex-wrap: wrap;
    align-items: center;
  }

  .border span {
    font-weight: 600;
  }

  .bad-info-object {
    display: flex;
    gap: 0.2rem;
    flex-wrap: wrap;
  }
  .country-border {
    padding: 0.2rem 0.4rem;
    box-shadow: 0px 0px 10px #ccc;
    border-radius: 5px;
  }
`;

export default CountryDetail;
