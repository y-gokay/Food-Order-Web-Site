import React from "react";
import { Link } from "react-router-dom";
import "../styles/navMenu.css";
import ramenIcon from "../../../Assets/Iteration-2-aseets/icons/1.svg";
import pizzaIcon from "../../../Assets/Iteration-2-aseets/icons/2.svg";
import burgerIcon from "../../../Assets/Iteration-2-aseets/icons/3.svg";
import frenchIcon from "../../../Assets/Iteration-2-aseets/icons/4.svg";
import fastIcon from "../../../Assets/Iteration-2-aseets/icons/5.svg";
import softIcon from "../../../Assets/Iteration-2-aseets/icons/6.svg";

const navMenu = () => {
  //navMenu componentı ve yönlendirme işlemlerr
  return (
    <div className="navmenu-container">
      <ul className="navmenu-list">
        <li className="navmenu-item">
          <Link to="" className="navmenu-link">
            <img src={ramenIcon} alt="Ramen Icon" className="navmenu-icon" />
            YENİ! Ramen
          </Link>
        </li>
        <li className="navmenu-item">
          <Link to="/order" className="navmenu-link">
            <img src={pizzaIcon} alt="Pizza Icon" className="navmenu-icon" />
            Pizza
          </Link>
        </li>
        <li className="navmenu-item">
          <Link to="" className="navmenu-link">
            <img src={burgerIcon} alt="Burger Icon" className="navmenu-icon" />
            Burger
          </Link>
        </li>

        <li className="navmenu-item">
          <Link to="" className="navmenu-link">
            <img
              src={frenchIcon}
              alt="French Fries Icon"
              className="navmenu-icon"
            />
            French Fries
          </Link>
        </li>
        <li className="navmenu-item">
          <Link to="" className="navmenu-link">
            <img src={fastIcon} alt="Fast Food Icon" className="navmenu-icon" />
            Fast Food
          </Link>
        </li>
        <li className="navmenu-item">
          <Link to="" className="navmenu-link">
            <img
              src={softIcon}
              alt="Soft Drinks Icon"
              className="navmenu-icon"
            />
            Soft Drinks
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default navMenu;
