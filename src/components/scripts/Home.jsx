import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";
import "../styles/Home.css";
import Footer from "./Footer.jsx";
import CardMenu from "./CardMenu.jsx";
import NavMenu from "./NavMenu.jsx";
import Header from "./Header.jsx";

const Home = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/order");
  };

  return (
    <>
      <Header></Header>
      <div className="home-container text-white text-center d-flex justify-content-center align-items-center">
        <div>
          <h2 className="fırsat">fırsatı kaçırma</h2>
          <h1 className="title"></h1>
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
      <NavMenu />
      <CardMenu />
      <Footer />
    </>
  );
};

export default Home;
