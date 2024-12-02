import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Row,
  Col,
  Container,
} from "reactstrap";
import axios from "axios";
import "../styles/OrderForm.css";
import { boyutlar, hamurlar, malzemeler } from "../data/pizzaData";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import bannerImg from "../../../Assets/Iteration-2-aseets/pictures/form-banner.png";

const OrderForm = () => {
  const [form, setForm] = useState({
    boyut: "",
    hamur: "",
    malzemeler: [],
    siparisNotu: "",
    adet: 1,
    ekstraTutar: 0,
    toplamTutar: 0,
  });

  const [error, setError] = useState({
    boyutHata: "",
    hamurHata: "",
    siparisNotuHata: "",
    adetHata: "",
    malzemelerHata: "",
  });

  const history = useHistory();

  // Fiyat hesaplama
  useEffect(() => {
    const boyutEkstra =
      form.boyut === "Orta (+5₺)" ? 5 : form.boyut === "Büyük (+10₺)" ? 10 : 0;
    console.log(boyutEkstra + "+" + form.boyut);
    const hamurEkstra =
      form.hamur === "İnce (+5₺)" || form.hamur === "Kalın (+5₺)" ? 5 : 0;
    console.log(hamurEkstra + "-  " + form.hamur);
    const malzemeEkstra = form.malzemeler.length * 5;
    const ekstraTutar = form.adet * (boyutEkstra + hamurEkstra + malzemeEkstra);

    const toplamTutar = 85.5 * form.adet + ekstraTutar;

    setForm((prevForm) => ({
      ...prevForm,
      ekstraTutar,
      toplamTutar,
    }));
  }, [form.boyut, form.hamur, form.adet, form.malzemeler]);

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
      setError((prevError) => ({
        ...prevError,
        malzemelerHata: "En fazla 10 malzeme seçebilirsiniz.",
      }));
    }
  };

  const handleAdetChange = (type) => {
    if (type === "arttir" && form.adet < 10) {
      setForm((prevForm) => ({ ...prevForm, adet: prevForm.adet + 1 }));
    } else if (type === "azalt" && form.adet > 1) {
      setForm((prevForm) => ({ ...prevForm, adet: prevForm.adet - 1 }));
    }
  };

  const handleClick = () => {
    setError({
      ...error,
      boyutHata: form.boyut === "" ? "Lütfen boyut belirtiniz." : "",
      hamurHata: form.hamur === "" ? "Lütfen hamur belirtiniz." : "",
    });

    if (form.boyut && form.hamur) {
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
  };

  const handleSubmit = () => {
    history.push("/");
  };

  return (
    <div>
      <Header />

      <Container className="order-container">
        <Row className="info-container">
          <Col md={6}>
            <img src={bannerImg} alt="bannerImg" className="bannerImg" />
          </Col>
          <Col md={6} className="order-text">
            <div className="orderInfo">
              <span className="anasayfa" onClick={handleSubmit}>
                Anasayfa -
              </span>
              <span className="siparis"> Sipariş Oluştur</span>
            </div>
            <h2>Position Absolute Acı Pizza</h2>
            <h3 className="priceText">85.50 ₺</h3>
            <p>
              4.2 <span>(200)</span>
            </p>
            <p>
              Frontent Dev olarak hala position:absolute kullanıyorsan bu çok
              acı pizza tam sana göre. Pizza, domates, peynir ve genellikle
              çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak
              odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
              yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan
              İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen
              pizzetta denir.
            </p>
          </Col>
        </Row>

        <Row className="size-crust-row">
          <Col md={6}>
            <FormGroup>
              <h2>Boyut Seç</h2>
              <p>Orta Boy 5₺ - Büyük Boy 10 ₺ ücret alınır </p>
              {boyutlar.map((boyut, ind) => (
                <Label key={ind} className="d-block">
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
              {error.boyutHata && <p className="error">{error.boyutHata}</p>}
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <h2>Hamur Seç</h2>
              <p>İnce ve Kalın Hamur seçimlerinde ekstra 5₺ ücret alınır</p>
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
              {error.hamurHata && <p className="error">{error.hamurHata}</p>}
            </FormGroup>
          </Col>
        </Row>

        <FormGroup className="mats-container">
          <h2>Ek Malzemeler</h2>
          <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
          <div className="toppings-list">
            {malzemeler.map((malzeme, ind) => (
              <label
                key={ind}
                className={`topping-item ${
                  form.malzemeler.includes(malzeme) ? "selected" : ""
                }`}
              >
                <input
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
              </label>
            ))}
          </div>
          {error.malzemelerHata && (
            <p className="error">{error.malzemelerHata}</p>
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
            <p className="error">{error.siparisNotuHata}</p>
          )}
        </FormGroup>

        <div className="underline"></div>

        <div className="d-flex justify-content-between align-items-start">
          <FormGroup className="d-flex align-items-center amount-container">
            <Button
              className="orderButton"
              disabled={form.adet <= 1}
              onClick={() => handleAdetChange("azalt")}
            >
              —
            </Button>
            <Label className="mx-3">{form.adet}</Label>
            <Button
              disabled={form.adet >= 10}
              onClick={() => handleAdetChange("arttir")}
              className="orderButton"
            >
              ＋
            </Button>
          </FormGroup>
          <div className="price-box">
            <div className="toplamSiparis">Sipariş Toplamı</div>
            <div className="Seçimler">Seçimler: {form.ekstraTutar} ₺</div>
            <div className="Toplam">Toplam: {form.toplamTutar} ₺</div>
            <Button onClick={handleClick} className="orderButton">
              SİPARİŞ VER
            </Button>
          </div>
        </div>
      </Container>

      <Footer />
    </div>
  );
};

export default OrderForm;
