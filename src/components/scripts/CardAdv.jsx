import React from "react";
import "../styles/CardAdv.css";

const CardAdv = () => {
  return (
    <div className="card-adv-container">
      <div className="adv-item adv-item-1">
        <div className="adv-item-img-container">
          <img
            src="Assets/Iteration-2-aseets/cta/kart-1.png"
            alt="Özel Lezzetus"
            className="adv-item-img"
          />
          <div className="adv-item-text">
            <h3 className="adv-item-title">Özel Lezzetus</h3>
            <p className="adv-item-description">
              Position: Absolute Acı Burger
            </p>
            <button className="order-btn order-btn-1">Sipariş Ver</button>
          </div>
        </div>
      </div>
      <div className="adv-item adv-item-2">
        <div className="adv-item-img-container">
          <img
            src="Assets/Iteration-2-aseets/cta/kart-2.png"
            alt="Hackathlon Burger Menü"
            className="adv-item-img"
          />
          <div className="adv-item-text">
            <h3 className="adv-item-title">Hackathlon Burger Menü</h3>
            <button className="order-btn order-btn-2">Sipariş Ver</button>
          </div>
        </div>
      </div>

      <div className="adv-item adv-item-3">
        <div className="adv-item-img-container">
          <img
            src="Assets/Iteration-2-aseets/cta/kart-3.png"
            alt="Çoooook hızlı npm gibi kurye"
            className="adv-item-img"
          />
          <div className="adv-item-text">
            <h3 className="adv-item-title">
              <span className="adv-item-span">Çoooook</span> hızlı npm gibi
              kurye
            </h3>
            <button className="order-btn order-btn-3">Sipariş Ver</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardAdv;
