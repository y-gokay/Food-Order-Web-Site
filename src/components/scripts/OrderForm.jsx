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
  });
  const history = useHistory();
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
  const handleAdetChange = (event) => {
    if (event === "arttir" && form.adet < 10) {
      setForm({ ...form, adet: form.adet + 1 });
    } else if (event === "azalt" && form.adet > 1) {
      setForm({ ...form, adet: form.adet - 1 });
    }
  };
  const handleClick = (event) => {
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
  useEffect(() => {
    setForm({
      ...form,
      ekstraTutar: form.adet * form.malzemeler.length * 5,
      toplamTutar: 85.5 * form.adet + form.adet * form.malzemeler.length * 5,
    });
  }, [form.adet, form.malzemeler]);
  return (
    <div>
      <Header />
      <Container className="order-container">
        <Row className="info-container">
          <Col md={6}>
            <img src={bannerImg} alt="bannerImg" className="bannerImg" />
          </Col>
          <Col md={6} className="order-text">
            <p className="anasayfa">
              Anasayfa - <span className="siparis">Sipariş Oluştur</span>
            </p>
            <h2>Position Absolute Acı Pizza</h2>
            <h3 className="priceText">85.50 ₺</h3>
            <p>
              4.9 <span>(200)</span>
            </p>
            <p>
              Frontend Dev olarak hala position:absolute kullanıyorsan bu çok
              acı pizza tam sana göre. Pizza, domates, peynir ve genellikle
              çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak
              odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
              yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan
              İtalyan kökenli lezzetli bir yemektir.
            </p>
          </Col>
        </Row>
        <Row className="size-crust-row">
          <Col md={6}>
            <FormGroup>
              <h2>Boyut Seç</h2>
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
          <h2>Ek Malzemeler</h2> <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
          {malzemeler.map((malzeme, ind) => (
            <Label key={ind} className="d-inline-block mr-4">
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
            <div>Sipariş Toplamı</div> <div>Seçimler: {form.ekstraTutar} ₺</div>
            <div>Toplam: {form.toplamTutar} ₺</div>
            <Button color="warning" onClick={handleClick}>
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
