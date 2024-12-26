import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";
import "../styles/Home.css";
import Footer from "./Footer.jsx";
import CardMenu from "./CardMenu.jsx";
import NavMenu from "../scripts/NavMenu.jsx";
import Header from "./Header.jsx";

const Home = () => {
  const history = useHistory();
  // Tıklanınca order sayfasına yönlendirme yapacak fonksiyon
  const handleClick = () => {
    history.push("/order");
  };
  // Anasayfa main herosunun header fotter cardMenu ve navMenuden oluşan componentlerını return eder
  return (
    <>
      <Header></Header>
      <div className="home-container text-white text-center d-flex justify-content-center align-items-center">
        <div>
          <h2 className="fırsat">fırsatı kaçırma</h2>
          <h1 className="title"></h1>
          <Button
            onClick={handleClick}
            data-cy="home-button"
            className="home-button"
          >
            Acıktım
          </Button>
        </div>
      </div>
      <NavMenu />
      <CardMenu />
      <Footer />
    </>
  );
};

export default Home;
