import React from "react";
import "../styles/Footer.css";
import footerBadge from "../../../Assets/Iteration-2-aseets/footer/logo-footer.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <div className="footer-badge">
            <img src={footerBadge} alt="" />
          </div>
          <div>
            <img
              src="Assets/Iteration-2-aseets/footer/icons/icon-1.png"
              alt="footer-icon1"
            />
            <p>341 Londonderry Road, Istanbul Türkiye</p>
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
          <h3>Sıccacık Menüü</h3>
          <p>
            <br />
            Terminal Pizza,
            <br />
            Tavuklu Pizza,
            <br /> Beyaz Console,
            <br /> Frosty Testler Geçti,
            <br /> Mutlu Burger
          </p>
        </div>

        <div className="footer-instagram">
          <h3>Instagram</h3>
          <ul className="insta-images">
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
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2023 Teknolojik Yemekler. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer;
