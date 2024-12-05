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
import { boyutlar, hamurlar, malzemeler } from "../data/pizzaData"; //orderFormda kullanılacak verileri import eder
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import bannerImg from "../../../Assets/Iteration-2-aseets/pictures/form-banner.png";

const OrderForm = () => {
  //Siparis bilgileri tutar ve useState ile set eder
  const [form, setForm] = useState({
    boyut: "",
    hamur: "",
    malzemeler: [],
    siparisNotu: "",
    adet: 1,
    ekstraTutar: 0,
    toplamTutar: 0,
    isimSoyisim: "",
  });
  //Error bilgileri  tutar ve useState ile set eder
  const [error, setError] = useState({
    boyutHata: "",
    hamurHata: "",
    siparisNotuHata: "",
    adetHata: "",
    malzemelerHata: "",
    isimSoyisimHata: "",
  });

  const history = useHistory();

  // Fiyat hesaplama işlemleri yapılır ve useEffect ile set edilir
  useEffect(() => {
    const boyutEkstra =
      form.boyut === "Orta (+5₺)" ? 5 : form.boyut === "Büyük (+10₺)" ? 10 : 0;

    const hamurEkstra =
      form.hamur === "İnce (+5₺)" || form.hamur === "Kalın (+5₺)" ? 5 : 0;

    const malzemeEkstra = form.malzemeler.length * 5;
    const ekstraTutar = form.adet * (boyutEkstra + hamurEkstra + malzemeEkstra);

    const toplamTutar = 85.5 * form.adet + ekstraTutar;

    setForm((prevForm) => ({
      ...prevForm,
      ekstraTutar,
      toplamTutar,
    }));
  }, [form.boyut, form.hamur, form.adet, form.malzemeler]);

  // Inputlardaki değişiklikleri takip eder ve set eder
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

    if (form.malzemeler.length >= 9) {
      setError((prevError) => ({
        ...prevError,
        malzemelerHata: "En fazla 10 malzeme seçebilirsiniz.",
      }));
    }
  };

  // Adet arttırma ve azaltma işlemleri yapılır
  const handleAdetChange = (type) => {
    if (type === "arttir" && form.adet < 10) {
      setForm((prevForm) => ({ ...prevForm, adet: prevForm.adet + 1 }));
    } else if (type === "azalt" && form.adet > 1) {
      setForm((prevForm) => ({ ...prevForm, adet: prevForm.adet - 1 }));
    }
  };

  // Sipariş verme işleminde koşullar sağlanıyorsa post işlemini yaoar
  const handleClick = () => {
    const nameRegex = /^[a-zA-Z\sığüşöçİĞÜŞÖÇ]+$/;

    setError({
      ...error,
      boyutHata: form.boyut === "" ? "Lütfen boyut belirtiniz." : "",
      hamurHata: form.hamur === "" ? "Lütfen hamur belirtiniz." : "",
      isimSoyisimHata:
        form.isimSoyisim === ""
          ? "Lütfen isim ve soyisim giriniz."
          : !nameRegex.test(form.isimSoyisim)
          ? "İsim ve soyisim sadece harf içerebilir."
          : "",
    });
    if (
      form.boyut !== "" &&
      form.hamur !== "" &&
      form.isimSoyisim !== "" &&
      nameRegex.test(form.isimSoyisim)
    ) {
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

  // Anasayfaya yönlendirme işlemi yapar
  const handleSubmit = () => {
    history.push("/");
  };

  //Header ve Footer componentlerini çağırır ve orderForm kısmıyla beraber return eder
  return (
    <div>
      <Header />

      <Container className="order-container">
        <FormGroup className="info-container">
          <FormGroup>
            <img src={bannerImg} alt="bannerImg" className="bannerImg" />
          </FormGroup>
          <FormGroup className="order-text">
            <div className="orderInfo">
              <span className="anasayfa" onClick={handleSubmit}>
                Anasayfa -
              </span>
              <span className="siparis"> Sipariş Oluştur</span>
            </div>
            <h2 className="headTitle">Position Absolute Acı Pizza</h2>
            <div className="textCont">
              <h3 className="priceText">85.50 ₺</h3>
              <p>
                <span>4.2</span>(200)
              </p>
            </div>
            <p>
              Frontent Dev olarak hala position:absolute kullanıyorsan bu çok
              acı pizza tam sana göre. Pizza, domates, peynir ve genellikle
              çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak
              odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
              yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan
              İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen
              pizzetta denir.
            </p>
          </FormGroup>
        </FormGroup>

        <FormGroup className="size-crust-row">
          <FormGroup>
            <FormGroup>
              <div className="sizeInfoContainer">
                <h2>Boyut Seç</h2>
                <p>Orta Boy 5₺ - Büyük Boy 10 ₺ ücret alınır </p>
              </div>
              <div className="buttonContainer">
                {boyutlar.map((boyut, ind) => (
                  <Label key={ind} className="sizeRadio">
                    <Input
                      type="radio"
                      name="boyut"
                      value={boyut}
                      checked={form.boyut === boyut}
                      onChange={handleChange}
                      data-cy="choose-size"
                    />
                    <span>{boyut}</span>
                  </Label>
                ))}
              </div>
              {error.boyutHata && (
                <p data-cy="err" className="error">
                  {error.boyutHata}
                </p>
              )}
            </FormGroup>
          </FormGroup>
          <FormGroup>
            <FormGroup>
              <div className="crustInfoContainer">
                <h2>Hamur Seç</h2>
                <p>İnce ve Kalın Hamur seçimlerinde ekstra 5₺ ücret alınır</p>
              </div>
              <div className="buttonContainer">
                <Input
                  type="select"
                  name="hamur"
                  value={form.hamur}
                  onChange={handleChange}
                  data-cy="choose-crust"
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
              </div>
              {error.hamurHata && (
                <p data-cy="err" className="error">
                  {error.hamurHata}
                </p>
              )}
            </FormGroup>
          </FormGroup>
        </FormGroup>

        <FormGroup className="mats-container">
          <h2>Ek Malzemeler</h2>
          <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
          <div className="toppings-list">
            {malzemeler.map((malzeme, ind) => (
              <label key={ind} className="topping-item">
                {malzeme}
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
                  data-cy={`check-${ind}`}
                />
                <span className="checkmark" />
              </label>
            ))}
          </div>

          {error.malzemelerHata && (
            <p data-cy="err" className="error">
              {error.malzemelerHata}
            </p>
          )}
        </FormGroup>

        <FormGroup className="name-container">
          <Label for="isimSoyisim">Ad Soyad</Label>
          <Input
            type="text"
            name="isimSoyisim"
            id="isimSoyisim"
            placeholder="İsim Soyisim"
            value={form.isimSoyisim}
            onChange={handleChange}
            data-cy="name-container"
          />
          {error.isimSoyisimHata && (
            <p data-cy="err" className="error">
              {error.isimSoyisimHata}
            </p>
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
            data-cy="nots-container"
          />
          {error.siparisNotuHata && (
            <p data-cy="err" className="error">
              {error.siparisNotuHata}
            </p>
          )}
        </FormGroup>

        <div className="underline"></div>

        <FormGroup className="price-container">
          <FormGroup className="amount-container">
            <Button
              className="orderButton"
              data-cy="down-count-button"
              disabled={form.adet <= 1}
              onClick={() => handleAdetChange("azalt")}
            >
              —
            </Button>
            <Label data-cy="count" className="count">
              {form.adet}
            </Label>
            <Button
              disabled={form.adet >= 10}
              onClick={() => handleAdetChange("arttir")}
              data-cy="up-count-button"
              className="orderButton"
            >
              ＋
            </Button>
          </FormGroup>
          <div className="price-box">
            <div className="toplamSiparis">Sipariş Toplamı</div>
            <div className="Seçimler">Seçimler: {form.ekstraTutar} ₺</div>
            <div className="Toplam">Toplam: {form.toplamTutar} ₺</div>
            <Button
              onClick={handleClick}
              data-cy="order-button"
              className="orderButton"
            >
              SİPARİŞ VER
            </Button>
          </div>
        </FormGroup>
      </Container>

      <Footer />
    </div>
  );
};

export default OrderForm;
