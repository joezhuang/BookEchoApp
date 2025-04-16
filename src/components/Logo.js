// Logo.js
import React from "react";
import logo from "../assets/logo/BookEchoLogo.jpg";
const Logo = () => {
  const logoStyle = {
    width: "100px",
    height: "auto",
    margin: "20px",
    borderRadius: "15px",
    borderWidth: "1px",
    borderColor: "white",
    borderStyle: "solid",
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={containerStyle}>
      <img style={logoStyle} src={logo} alt="Logo" />

      {/* <img style={logoStyle} src="./logo192.png" alt="Logo" /> */}
    </div>
  );
};

export default Logo;
