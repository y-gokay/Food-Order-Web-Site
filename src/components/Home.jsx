import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Home.css";
const Home = (props) => {
  return (
    <div className="home-container">
      <h1>Ana Sayfa</h1>
      <h2>KOD ACIKTIRIR, PİZZA DOYURUR</h2>
      <Link to="./Order.jsx">
        <button>Aciktim</button>
      </Link>
    </div>
  );
};

export default Home;
