import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import footerBadge from "../../../Assets/Iteration-2-aseets/footer/logo-footer.png";

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
            <img
              src="Assets/Iteration-2-aseets/footer/icons/icon-1.png"
              alt="footer-icon1"
            />
            <Link>
              <p>341 Londonderry Road, Istanbul Türkiye</p>
            </Link>
          </div>

          <div>
            <img
              src="Assets/Iteration-2-aseets/footer/icons/icon-2.png"
              alt="footer-icon2"
            />
            <p>aciktim@teknolojikyemekler.com</p>
          </div>

          <div>
            <img
              src="Assets/Iteration-2-aseets/footer/icons/icon-3.png"
              alt="footer-icon3"
            />
            <p>+90 216 123 45 67</p>
          </div>
        </div>

        <div className="footer-menu">
          <h3>Hot Menüü</h3>
          <Link>
            <p>Terminal Pizza</p>
          </Link>
          <Link>
            <p>5 Kişilik Hachkathlon Pizza</p>
          </Link>
          <Link>
            <p>Beyaz Console Frosty</p>
          </Link>
          <Link>
            <p>Frosty Testler Geçti</p>
          </Link>
          <Link>
            <p>useEffect Tavuklu Pizza</p>
          </Link>
          <Link>
            <p>Position Absoulute Acı Burger</p>
          </Link>
        </div>

        <div className="footer-instagram">
          <h3>Instagram</h3>
          <Link className="insta-images">
            <ul>
              <img
                src="Assets\Iteration-2-aseets\footer\insta\li-0.png"
                alt="Instagram 1"
              />
            </ul>
            <ul>
              <img
                src="Assets\Iteration-2-aseets\footer\insta\li-1.png"
                alt="Instagram 2"
              />
            </ul>
            <ul>
              <img
                src="Assets\Iteration-2-aseets\footer\insta\li-2.png"
                alt="Instagram 3"
              />
            </ul>
            <ul>
              <img
                src="Assets\Iteration-2-aseets\footer\insta\li-3.png"
                alt="Instagram 4"
              />
            </ul>
            <ul>
              <img
                src="Assets\Iteration-2-aseets\footer\insta\li-4.png"
                alt="Instagram 5"
              />
            </ul>
            <ul>
              <img
                src="Assets\Iteration-2-aseets\footer\insta\li-5.png"
                alt="Instagram 6"
              />
            </ul>
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 Teknolojik Yemekler. Tüm hakları saklıdır.</p>
      </div>
      <Link>
        <i className="fa-brands fa-twitter"></i>
      </Link>
      <Link>
        <i className="fa-brands fa-instagram"></i>
      </Link>
      <Link>
        <i className="fa-brands fa-facebook"></i>
      </Link>
    </footer>
  );
};

export default Footer;
