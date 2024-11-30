import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";
import "../styles/Home.css";

const Home = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/order");
  };

  return (
    <div className="home-container text-white text-center d-flex justify-content-center align-items-center">
      <div>
        <h1 className="display-1 mb-3">Ana Sayfa</h1>
        <h2 className="mb-4">KOD ACIKTIRIR, PİZZA DOYURUR</h2>
        <Button
          color="warning"
          size="lg"
          onClick={handleClick}
          className="home-button"
        >
          Aciktim
        </Button>
      </div>
    </div>
  );
};

export default Home;
