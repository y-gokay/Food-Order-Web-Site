import React from "react";
import CardAdvert from "./CardAdv.jsx";
import CardFav from "./CardFav.jsx";
import NavMenu from "./NavMenu.jsx";
import "../styles/CardMenu.css";

const CardMenu = () => {
  return (
    <div className="card-menu-container">
      <CardAdvert />
      <div>
        <p className="cardMenuText1">En çok Paketlenen Menüler</p>
        <p className="cardMenuText2">Acıktıran Kodlara Doyuran Lezzetler</p>
      </div>
      <NavMenu />
      <CardFav />
    </div>
  );
};

export default CardMenu;
