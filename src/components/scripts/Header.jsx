import React from "react";
import { useHistory } from "react-router-dom";
import "../styles/Header.css";
import TeknolojikYemekler from "../../../Assets/Iteration-1-assets/logo.svg";

const Header = (props) => {
  const history = useHistory();
  //Anasayfaya push etme işlemi
  const handleSubmit = () => {
    history.push("/");
  };
  //Header Componentı ve görsele tıklayınca anasayfaya yönlendirir
  return (
    <header className="custom-header">
      <div className="logo-container">
        <div className="logo-info">
          <img
            src={TeknolojikYemekler}
            alt="Logo"
            className="logo-img"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
