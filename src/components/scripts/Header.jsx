import React from "react";
import { useHistory } from "react-router-dom";
import "../styles/Header.css";

const Header = (props) => {
  const history = useHistory();
  const handleSubmit = () => {
    history.push("/");
  };
  return (
    <header className="custom-header">
      <div className="logo-container">
        <div className="logo-info">
          <img
            src="/Assets/Iteration-1-assets/logo.svg"
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
