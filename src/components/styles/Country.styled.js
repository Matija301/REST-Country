import styled from "styled-components";

const StyledCountry = styled.section`
  min-width: 20rem;
  max-width: 40rem;
  box-shadow: 2px 2px 5px #ccc;
  border-radius: 5px;
  img {
    width: 100%;
  }
  .country-info {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.4rem;
    padding: 1.2rem;
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
