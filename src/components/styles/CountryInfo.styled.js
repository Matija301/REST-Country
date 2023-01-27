import styled from "styled-components";

const CountryDetail = styled.main`
  a {
    display: inline-block;
    text-decoration: none;
    color: ${({ theme }) => theme.color.colorText};
  }

  .link-container {
    font-size: 1.4rem;
    margin: 2.4rem;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 1.2rem;
    box-shadow: 0px 0px 10px ${({ theme }) => theme.shades.shade2};
    padding: 0.4rem 2.6rem;
  }

  .link p {
    font-size: 1.4rem;
  }

  .link svg {
    width: 1.6rem;
  }
  @media (max-width: 850px) {
    .link-container {
      padding: 0.2rem 1.3rem;
      font-size: 1rem;
    }
  }

  .main-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 700rem;
    gap: 4.8rem;
    padding: 0 2.4rem 1.2rem 2.4rem;
  }
  @media (max-width: 850px) {
    .main-section {
      grid-template-columns: 1fr;
      gap: 2.4rem;
    }
  }
  .container-image {
    height: 30rem;
    display: flex;
  }
  @media (max-width: 850px) {
    .container-image {
      height: 10rem;
    }
  }

  .container-image img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .container-info h2 {
    color: ${({ theme }) => theme.color.colorText};
    font-size: 2rem;
    padding: 2.4rem 0;
    text-align: left;
    font-weight: 800;
  }
  .info__country {
    color: ${({ theme }) => theme.color.colorText};
    display: grid;
    font-size: 1rem;
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 850px) {
    .info__country {
      grid-template-columns: 1fr;
      gap: 2.4rem;
    }
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
    color: ${({ theme }) => theme.color.colorText};
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
    background-color: ${({ theme }) => theme.color.colorBackground};
    box-shadow: 0px 0px 10px ${({ theme }) => theme.shades.shade2};
    border-radius: 5px;
  }
`;

export default CountryDetail;
