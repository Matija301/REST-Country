import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

const StyledLoading = styled.div`
  position: relative;
  width: 20rem;
  height: 20rem;
  margin: 10rem auto;
  .ring {
    width: 100%;
    height: 100%;
    border-left: 4px solid #262626;
    border-radius: 50%;
    animation: ${rotate} 1s linear infinite;
  }

  .text {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 20rem;
    font-weight: 800;
    font-size: 2rem;
    text-transform: uppercase;
  }
  @media (max-width: 800px) {
    width: 10rem;
    height: 10rem;
    margin: 5rem auto;
    .text {
      font-size: 1rem;
    }
  }
`;

export default StyledLoading;
