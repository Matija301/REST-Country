import styled from "styled-components";

const StyledGoHome = styled.aside`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 1%;
  bottom: 2%;
  width: 5rem;
  height: 5rem;
  background-color: ${(prop) => prop.theme.color.colorBackground};
  border-radius: 50%;
  box-shadow: 2px 2px 5px ${({ theme }) => theme.shades.shade2};
  cursor: pointer;
  svg {
    color: ${(prop) => prop.theme.color.colorText};
    width: 3.2rem;
    height: 3.2rem;
  }
`;

export default StyledGoHome;
