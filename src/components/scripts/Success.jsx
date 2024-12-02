import React from "react";
import "../styles/Success.css";
import Header from "./Header";
import { useLocation } from "react-router-dom";
import Footer from "./Footer.jsx";

const Success = () => {
  const location = useLocation();
  const { form } = location.state || { form: { pathname: "/" } };
  return (
    <div className="success">
      <Header></Header>
      <div className="success-container">
        <div className="successinfo">
          <p className="lezzetYolda">Lezzetin Yolda</p>
          <h1>Siparişin Alındı</h1>
        </div>
        <div className="success-infocontainer">
          <h4>
            <strong>Position Absolute Pizza</strong>
          </h4>
          <p>
            Boyut:<strong> {form.boyut}</strong>
          </p>
          <p>
            Hamur:<strong> {form.hamur}</strong>
          </p>
          <p>
            Ekstra Malzemeler:
            <strong className="ekstraMalzemeler">
              {form.malzemeler.join(", ")}
            </strong>
          </p>
          <p>
            Sipariş Notu:<strong> {form.siparisNotu}</strong>
          </p>
        </div>
        <div className="toplamSiparisler">
          <p>Sipariş Toplamı</p>
          <div className="tutarlar">
            <p>Seçimler:</p>
            <p>{form.ekstraTutar || "0.00"} ₺</p>
          </div>
          <div className="tutarlar">
            <p>Fiyat:</p>
            <p>{form.toplamTutar || "0.00"} ₺</p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Success;
