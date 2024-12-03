import React from "react";
import "../styles/CardAdv.css";

const CardAdv = () => {
  //cardAdv önerilen ürünlerini return eder
  //buranın css yazmak en keyifsiz en zor en isteksiz iş olduğunu düşünüyorum
  return (
    <div className="card-adv-container">
      <div className="adv-item-img-container">
        <img
          src="Assets/Iteration-2-aseets/cta/kart-1.png"
          alt="Özel Lezzetus"
          className="adv-item-img"
        />
        <div className="adv-item-text">
          <h3 className="adv-item-title">Özel Lezzetus</h3>
          <p className="adv-item-description-1">
            Position: Absolute Acı Burger
          </p>
          <button className="order-btn-1">Sipariş Ver</button>
        </div>
      </div>

      <div className="adv-item-img-container-b">
        <div className="adv-item-img-container-2">
          <img
            src="Assets/Iteration-2-aseets/cta/kart-2.png"
            alt="Hackathlon Burger Menü"
            className="adv-item-img"
          />
          <div className="adv-item-text-1">
            <h3 className="adv-item-title-2">Hackathlon Burger Menü</h3>
            <button className="order-btn-2">Sipariş Ver</button>
          </div>
        </div>

        <div className="adv-item-img-container-3">
          <img
            src="Assets/Iteration-2-aseets/cta/kart-3.png"
            alt="Çoooook hızlı npm gibi kurye"
            className="adv-item-img"
          />
          <div className="adv-item-text-2">
            <h3 className="adv-item-title-3">
              <span className="adv-item-span">Çoooook</span> hızlı npm gibi
              kurye
            </h3>
            <button className="order-btn-3">Sipariş Ver</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardAdv;
