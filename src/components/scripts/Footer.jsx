import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import footerBadge from "../../../Assets/Iteration-2-aseets/footer/logo-footer.png";
import insta1 from "../../../Assets/Iteration-2-aseets/footer/insta/li-0.png";
import insta2 from "../../../Assets/Iteration-2-aseets/footer/insta/li-1.png";
import insta3 from "../../../Assets/Iteration-2-aseets/footer/insta/li-2.png";
import insta4 from "../../../Assets/Iteration-2-aseets/footer/insta/li-3.png";
import insta5 from "../../../Assets/Iteration-2-aseets/footer/insta/li-4.png";
import insta6 from "../../../Assets/Iteration-2-aseets/footer/insta/li-5.png";
import footerImg from "../../../Assets/Iteration-2-aseets/footer/icons/icon-1.png";
import footerImg2 from "../../../Assets/Iteration-2-aseets/footer/icons/icon-2.png";
import footerImg3 from "../../../Assets/Iteration-2-aseets/footer/icons/icon-3.png";

const Footer = () => {
  //Footer componenti daha sonra içersine dinamik bir şekilde çalışması için yönlendirmeler eklenebilir
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <Link className="footer-badge" to="/">
            <img src={footerBadge} alt="" />
          </Link>
          <div>
            <img src={footerImg} alt="footer-icon1" />
            <Link to="">
              <p>341 Londonderry Road, Istanbul Türkiye</p>
            </Link>
          </div>

          <div>
            <img src={footerImg2} alt="footer-icon2" />
            <p>aciktim@teknolojikyemekler.com</p>
          </div>

          <div>
            <img src={footerImg3} alt="footer-icon3" />
            <p>+90 216 123 45 67</p>
          </div>
        </div>

        <div className="footer-menu">
          <h3>Hot Menüü</h3>
          <Link to="">
            <p>Terminal Pizza</p>
          </Link>
          <Link to="">
            <p>5 Kişilik Hachkathlon Pizza</p>
          </Link>
          <Link to="">
            <p>Beyaz Console Frosty</p>
          </Link>
          <Link to="">
            <p>Frosty Testler Geçti</p>
          </Link>
          <Link to="">
            <p>useEffect Tavuklu Pizza</p>
          </Link>
          <Link to="">
            <p>Position Absoulute Acı Burger</p>
          </Link>
        </div>

        <div className="footer-instagram">
          <h3>Instagram</h3>
          <Link className="insta-images" to="">
            <ul>
              <img src={insta1} alt="Instagram 1" />
            </ul>
            <ul>
              <img src={insta2} alt="Instagram 2" />
            </ul>
            <ul>
              <img src={insta3} alt="Instagram 3" />
            </ul>
            <ul>
              <img src={insta4} alt="Instagram 4" />
            </ul>
            <ul>
              <img src={insta5} alt="Instagram 5" />
            </ul>
            <ul>
              <img src={insta6} alt="Instagram 6" />
            </ul>
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 Teknolojik Yemekler. Tüm hakları saklıdır.</p>
      </div>
      <Link to="">
        <i className="fa-brands fa-twitter"></i>
      </Link>
      <Link to="">
        <i className="fa-brands fa-instagram"></i>
      </Link>
      <Link to="">
        <i className="fa-brands fa-facebook"></i>
      </Link>
    </footer>
  );
};

export default Footer;
