import styled from "styled-components";

const SectionStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 6.2rem;
  padding: 2.4rem 3.2rem;
  h1 {
    color: ${({ theme }) => theme.color.colorText};
    font-size: 2.4rem;
    font-weight: 800;
  }
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 500px) {
    padding: 2.4rem 1.6rem;
    grid-template-columns: 1fr;
  }
`;

export default SectionStyled;
