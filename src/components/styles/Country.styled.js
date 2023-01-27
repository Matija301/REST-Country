import styled from "styled-components";

const StyledCountry = styled.article`
  max-width: 40rem;
  box-shadow: 2px 2px 5px ${({ theme }) => theme.shades.shade2};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.colorBackground};
  color: ${({ theme }) => theme.color.colorText};

  .img {
    display: flex;
    max-width: 40rem;
    height: 10rem;
    justify-content: center;
    filter: grayscale(0%);
    transition: all 0.3s;
  }
  .img:hover {
    filter: grayscale(50%);
  }
  img {
    width: 100%;
  }

  .country-info {
    max-width: 20rem;
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.4rem;
    padding: 1.2rem;
    padding-bottom: 2.4rem;
  }
  h3 {
    font-size: 1.2rem;
    margin-bottom: 1.2rem;
  }
  p {
    font-size: 0.8rem;
  }
  span {
    font-weight: 600;
  }
`;

export default StyledCountry;
