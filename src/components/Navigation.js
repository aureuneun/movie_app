import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const List = styled.ul`
  position: fixed;
  top: 20px;
  left: 5px;
  background-color: white;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
`;

const Item = styled.li`
  background-color: ${(props) => (props.current ? "yellow" : "transparent")};
`;

const SLink = styled(Link)`
  text-decoration: none;
  color: #0008fc;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const Navigation = ({ location: { pathname } }) => {
  return (
    <List>
      <Item current={pathname === "/"}>
        <SLink to="/">Home</SLink>
      </Item>
      <Item current={pathname === "/about"}>
        <SLink to="/about">About</SLink>
      </Item>
    </List>
  );
};

export default withRouter(Navigation);
