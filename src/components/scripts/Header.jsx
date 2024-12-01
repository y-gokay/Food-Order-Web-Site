import React from "react";
import "../styles/Header.css";

const Header = (props) => {
  return (
    <header className="custom-header">
      <div className="logo-container">
        <div className="logo-info">
          <img
            src="/Assets/Iteration-1-assets/logo.svg"
            alt="Logo"
            className="logo-img"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
