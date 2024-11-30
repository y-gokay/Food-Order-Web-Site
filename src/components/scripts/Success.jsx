import React from "react";
import "../styles/Success.css";
import Header from "./Header";
import { useLocation } from "react-router-dom";

const Success = () => {
  const location = useLocation();
  const { form } = location.state || { form: { pathname: "/" } };
  return (
    <>
      <Header></Header>

      <div className="success-container">
        <img src="/Assets/Iteration-2-assets/icons/3.svg" alt="" />

        <h1>Başarıyla Sipariş Verildi!</h1>
        <p>
          Boyut:<strong> {form.boyut}</strong>
        </p>
        <p>
          Hamur:<strong> {form.hamur}</strong>
        </p>
        <p>
          Ekstra Malzemeler:
          <strong>{form.malzemeler.join("\n")}</strong>
        </p>
        <p>
          Sipariş Notu:<strong> {form.siparisNotu}</strong>
        </p>
        <p>
          Fiyat:<strong> {form.toplamTutar}</strong>
        </p>
      </div>
    </>
  );
};

export default Success;
