import React from "react";
import Logo from "../logo.svg";

function Header() {
  return (
    <div className="app-head">
      <img className="logo" src={Logo} alt="PXOREM" />
      <h1>Convert between PX and REM values of CSS size units</h1>
    </div>
  );
}

export default Header;
