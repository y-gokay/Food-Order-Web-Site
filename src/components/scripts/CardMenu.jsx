import React from "react";
import CardAdvert from "./CardAdv.jsx";
import CardFav from "./CardFav.jsx";
import NavMenu from "./navMenu.jsx";
import "../styles/CardMenu.css";

const CardMenu = () => {
  //CardMenu componenti cardAdv cardFav ve navMenü componentlerini çağırır ve text ekler
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
