import React from "react";
import CardAdvert from "./CardAdv.jsx";
import CardFav from "./CardFav.jsx";
import NavMenu from "./NavMenu.jsx";
import "../styles/CardMenu.css";

const CardMenu = () => {
  return (
    <div className="card-menu-container">
      <CardAdvert />
      <NavMenu />
      <CardFav />
    </div>
  );
};

export default CardMenu;
