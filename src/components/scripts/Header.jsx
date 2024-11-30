import React from "react";
import "../styles/Header.css";

const Header = (props) => {
  return (
    <header>
      <div className="logo">
        <div>
          <img src="/Assets/Iteration-1-assets/logo.svg" alt="" />
          <p className="info">Anasayfa-Sipariş oluştur</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
