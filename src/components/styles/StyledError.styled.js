import styled from "styled-components";

const Error = styled.section`
  font-size: 1.6rem;
  text-align: center;
  font-weight: 800;
  margin-top: 10rem;
  text-transform: uppercase;
  p {
    padding: 2.4rem 0;
  }
  .link {
    text-decoration: none;
    color: #000;
    transition: all 0.3s;
    border: 2px solid #000;
    border-radius: 5px;
    padding: 0.6rem 1.8rem;
  }
  .link:hover {
    background-color: #eee;
    color: #333;
  }
`;

export default Error;
