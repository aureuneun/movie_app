import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-size: 30px;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = () => {
  return <Container>Loading...</Container>;
};

export default Loader;
