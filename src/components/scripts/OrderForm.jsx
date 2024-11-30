import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";
import "../styles/OrderForm.css";
import { boyutlar, hamurlar, malzemeler } from "../data/pizzaData";
import Header from "./Header.jsx";

const OrderForm = () => {
  //siapriş bilgilerini tutar
  const [form, setForm] = useState({
    boyut: "",
    hamur: "",
    malzemeler: [],
    siparisNotu: "",
    adet: 1,
    ekstraTutar: 0,
    toplamTutar: 0,
  });
  //hata bilgilerini tutar
  const [error, setError] = useState({
    boyutHata: "",
    hamurHata: "",
    siparisNotuHata: "",
    adetHata: "",
  });

  const history = useHistory();

  //malzemelerin kontrolünü yapan ve forma gönderen func
  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;

    if (type === "checkbox") {
      let malzemeGuncelle = [...form.malzemeler];

      if (checked) {
        malzemeGuncelle.push(value);
      } else {
        malzemeGuncelle = malzemeGuncelle.filter((item) => item !== value);
      }

      setForm({ ...form, malzemeler: malzemeGuncelle });
    } else {
      setForm({ ...form, [name]: value });
    }

    if (form.malzemeler.length >= 10) {
      setError({
        ...error,
        malzemelerHata: "En fazla 10 malzeme seçebilirsiniz.",
      });
    }
  };

  //adet limitini arttırp azaltna ve limit koyan func
  const handleAdetChange = (event) => {
    if (event === "arttir" && form.adet < 10) {
      setForm({ ...form, adet: form.adet + 1 });
    } else if (event === "azalt" && form.adet > 1) {
      setForm({ ...form, adet: form.adet - 1 });
    }
  };

  // siparşi kontrol edip apiye bilgileri gönderip sayfa değiştirten func
  const handleClick = (event) => {
    const { name } = event.target;

    setError({
      ...error,
      boyutHata: form.boyut === "" ? "Lütfen boyut belirtiniz." : "",
      hamurHata: form.hamur === "" ? "Lütfen hamur belirtiniz." : "",
    });

    if (form.boyut && form.hamur) {
      {
        axios
          .post("https://reqres.in/api/pizza", form)
          .then((response) => {
            console.log("Sipariş başarıyla gönderildi:", response.data);
            history.push({ pathname: "/success", state: { form: form } });
          })
          .catch((error) => {
            console.error("Sipariş gönderme hatası:", error);
            alert("Bir hata oluştu, lütfen tekrar deneyin.");
          });
      }
    }
  };
  //siparşte ki değişkenlere göre tutarı hesaplayan func
  useEffect(() => {
    setForm({
      ...form,
      ekstraTutar: form.adet * form.malzemeler.length * 5,
      toplamTutar: 85.5 * form.adet + form.adet * form.malzemeler.length * 5,
    });
  }, [form.adet, form.malzemeler]);

  return (
    <div>
      <Header></Header>

      <Form className="order-container">
        <FormGroup className="size-container">
          <h2>Boyut Seç</h2>
          {boyutlar.map((boyut, ind) => (
            <Label key={ind}>
              <Input
                type="radio"
                name="boyut"
                value={boyut}
                checked={form.boyut === boyut}
                onChange={handleChange}
              />
              {boyut}
            </Label>
          ))}
          {error.boyutHata && <p style={{ color: "red" }}>{error.boyutHata}</p>}
        </FormGroup>

        <FormGroup className="crust-container">
          <h2>Hamur Seç</h2>
          <Input
            type="select"
            name="hamur"
            value={form.hamur}
            onChange={handleChange}
          >
            <option value="" disabled>
              Hamur Seçiniz
            </option>
            {hamurlar.map((hamur, ind) => (
              <option key={ind} value={hamur}>
                {hamur}
              </option>
            ))}
          </Input>
          {error.hamurHata && <p style={{ color: "red" }}>{error.hamurHata}</p>}
        </FormGroup>

        <FormGroup className="mats-container">
          <h2>Ek Malzemeler</h2>
          <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
          {malzemeler.map((malzeme, ind) => (
            <Label key={ind}>
              <Input
                type="checkbox"
                name="malzemeler"
                value={malzeme}
                checked={form.malzemeler.includes(malzeme)}
                disabled={
                  form.malzemeler.length >= 10 &&
                  !form.malzemeler.includes(malzeme)
                }
                onChange={handleChange}
              />
              {malzeme}
            </Label>
          ))}
          {error.malzemelerHata && (
            <p style={{ color: "red" }}>{error.malzemelerHata}</p>
          )}
        </FormGroup>

        <FormGroup className="nots-container">
          <Label for="siparisNotu">Sipariş Notu</Label>
          <Input
            type="textarea"
            name="siparisNotu"
            id="siparisNotu"
            placeholder="Siparişine eklemek istediğin bir not var mı?"
            value={form.siparisNotu}
            onChange={handleChange}
          />
          {error.siparisNotuHata && (
            <p style={{ color: "red" }}>{error.siparisNotuHata}</p>
          )}
        </FormGroup>

        <FormGroup className="amount-container">
          <Button
            disabled={form.adet <= 1}
            onClick={() => handleAdetChange("azalt")}
          >
            —
          </Button>
          <Label>{form.adet}</Label>
          <Button
            disabled={form.adet >= 10}
            onClick={() => handleAdetChange("arttir")}
          >
            ＋
          </Button>
        </FormGroup>

        <FormGroup className="price-container">
          <div>Ekstra Tutar: {form.ekstraTutar} ₺</div>
          <div>Toplam Tutar: {form.toplamTutar} ₺</div>
        </FormGroup>

        <Button color="primary" onClick={handleClick}>
          Sipariş Ver
        </Button>
      </Form>
    </div>
  );
};

export default OrderForm;
