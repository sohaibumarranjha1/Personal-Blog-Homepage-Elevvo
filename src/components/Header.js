import React from "react";
import logo from "../assets/logo.png";

function Header() {
  return (
    <header>
      <img src={logo} alt="Blog Logo" />
      <h1>Elevvo Blog</h1>
    </header>
  );
}

export default Header;
