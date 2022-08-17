import React from "react";
import "./App.css";
// import Header from "./components/Header";
import styled from "styled-components";

function App() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />

      <NavMenu></NavMenu>
    </Nav>
  );
}

export default App;

const Nav = styled.Nav`
  height: 70px;
  background: #090b13;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div``;
