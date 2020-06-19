import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Content = styled.span`
  margin-bottom: 20px;
`;

const Author = styled.span``;

const About = (props) => {
  console.log(props);
  return (
    <Container>
      <Content>
        "I'm as proud of what we don't do as I am of what we do."
      </Content>
      <Author>- Steve Jobs -</Author>
    </Container>
  );
};

export default About;
