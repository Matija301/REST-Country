import styled from "styled-components";

export const HeaderStyle = styled.header`
  max-width: 130rem;
  padding: 1.5rem 3rem;
  margin: 0;
  display: flex;
  font-size: 1.5rem;
  font-weight: 700;
  align-items: center;
  box-shadow: 0px 2px 5px ${({ theme }) => theme.shades.shade2};
  color: ${({ theme }) => theme.color.colorText};
  background-color: ${({ theme }) => theme.color.colorBackground};
  .lightmode {
    margin: 0 0 0 auto;
    font-weight: 500;
    font-size: 1.3rem;
    display: flex;
    gap: 0.8rem;
    align-items: center;
    cursor: pointer;
  }
  .lightmode svg {
    width: 1.3rem;
  }
  @media (max-width: 500px) {
    padding: 1rem 1rem;
    font-size: 1.2rem;
    .lightmode {
      font-size: 1rem;
    }
    .lightmode svg {
      width: 1rem;
    }
  }
`;
