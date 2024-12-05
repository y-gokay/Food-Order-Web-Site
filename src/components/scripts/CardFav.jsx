import React from "react";
import { Link } from "react-router-dom";
import "../styles/CardFav.css";

const CardFav = () => {
  //cardFav component favori ürüleri gösteren bir component
  return (
    <div className="card-fav-container">
      <div className="card-item card-item-1">
        <Link to="/order">
          <img
            src="Assets/Iteration-2-aseets/pictures/food-1.png"
            alt="food-1"
            className="card-item-img"
          />
        </Link>
        <h3 className="card-item-title">Terminal Pizza</h3>
        <div className="card-item-details">
          <p className="card-item-price">60₺</p>
          <div className="card-item-pricing">
            <p className="card-item-rating">4.9</p>
            <p className="card-item-reviews">(200)</p>
          </div>
        </div>
      </div>

      <div className="card-item card-item-2">
        <Link to="/order">
          <img
            src="Assets/Iteration-2-aseets/pictures/food-2.png"
            alt="food-2"
            className="card-item-img"
          />
        </Link>

        <h3 className="card-item-title">Position Absolute Acı Pizza</h3>
        <div className="card-item-details">
          <p className="card-item-price">45₺</p>
          <div className="card-item-pricing">
            <p className="card-item-rating">4.2</p>
            <p className="card-item-reviews">(130)</p>
          </div>
        </div>
      </div>

      <div className="card-item card-item-3">
        <Link to="">
          <img
            src="Assets/Iteration-2-aseets/pictures/food-3.png"
            alt="food-3"
            className="card-item-img"
          />
        </Link>
        <h3 className="card-item-title">useEffect Tavuklu Burger</h3>
        <div className="card-item-details">
          <p className="card-item-price">72₺</p>
          <div className="card-item-pricing">
            <p className="card-item-rating">4.7</p>
            <p className="card-item-reviews">(108)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFav;
