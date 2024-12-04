import React from "react";
import "../styles/Success.css";
import Header from "./Header";
import { useLocation } from "react-router-dom";
import Footer from "./Footer.jsx";

const Success = () => {
  const location = useLocation();
  const { form } = location.state || { form: { pathname: "/" } };
  return (
    /*Sipariş başarılı bir şekilde onaylandığından kullanıcaya siparişinin onaylandığını ve s
    ipariş bilgilerini gösteren header footer componentını ve success sayfasını return eder */
    <div className="success">
      <Header></Header>
      <div className="success-container">
        <div className="successinfo">
          <p className="lezzetYolda">Lezzetin Yolda</p>
          <h1>Siparişin Alındı</h1>
        </div>
        <div className="success-infocontainer">
          <h4>
            <strong>
              <span>{form.adet} x </span>Position Absolute Pizza
            </strong>
          </h4>
          <p>
            Boyut:<strong> {form.boyut}</strong>
          </p>
          <p>
            Hamur:<strong> {form.hamur}</strong>
          </p>
          {form.malzemeler.length > 0 && (
            <p>
              Ekstra Malzemeler:
              <strong data-cy="mats" className="ekstraMalzemeler">
                {form.malzemeler.join(", ")}
              </strong>
            </p>
          )}
          <p>
            Ad Soyad:
            <strong data-cy="name" className="nameSurname">
              {form.isimSoyisim}
            </strong>
          </p>
          {form.siparisNotu !== "" && (
            <p>
              Sipariş Notu:<strong data-cy="notes"> {form.siparisNotu}</strong>
            </p>
          )}
        </div>
        <div className="toplamSiparisler">
          <p>Sipariş Toplamı</p>
          <div className="tutarlar">
            <p>Seçimler:</p>
            <p data-cy="extras">{form.ekstraTutar || "0.00"} ₺</p>
          </div>
          <div className="tutarlar">
            <p>Fiyat:</p>
            <p data-cy="orderPrice">{form.toplamTutar || "0.00"} ₺</p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Success;
