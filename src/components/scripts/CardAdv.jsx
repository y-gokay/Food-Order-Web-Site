import { useHistory } from "react-router-dom";
import "../styles/CardAdv.css";
import cardAdv1 from "../../../Assets/Iteration-2-aseets/cta/kart-1.png";
import cardAdv2 from "../../../Assets/Iteration-2-aseets/cta/kart-2.png";
import cardAdv3 from "../../../Assets/Iteration-2-aseets/cta/kart-3.png";

const CardAdv = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/order");
  };

  //cardAdv önerilen ürünlerini return eder
  //buranın css yazmak en keyifsiz en zor en isteksiz iş olduğunu düşünüyorum
  return (
    <div className="card-adv-container">
      <div className="adv-item-img-container">
        <img src={cardAdv1} alt="Özel Lezzetus" className="adv-item-img" />
        <div className="adv-item-text">
          <h3 className="adv-item-title">
            Özel <br />
            Lezzetus
          </h3>
          <p className="adv-item-description-1">
            Position: Absolute Acı Burger
          </p>
          <button className="order-btn-1" onClick={handleClick}>
            Sipariş Ver
          </button>
        </div>
      </div>

      <div className="adv-item-img-container-b">
        <div className="adv-item-img-container-2">
          <img
            src={cardAdv2}
            alt="Hackathlon Burger Menü"
            className="adv-item-img"
          />
          <div className="adv-item-text-1">
            <h3 className="adv-item-title-1">Hackathlon Burger Menü</h3>
            <button className="order-btn-2" onClick={handleClick}>
              Sipariş Ver
            </button>
          </div>
        </div>

        <div className="adv-item-img-container-3">
          <img
            src={cardAdv3}
            alt="Çoooook hızlı npm gibi kurye"
            className="adv-item-img"
          />
          <div className="adv-item-text-2">
            <h3 className="adv-item-title-2">
              <span className="adv-item-span">Çoooook</span> hızlı npm gibi
              kurye
            </h3>
            <button className="order-btn-3" onClick={handleClick}>
              Sipariş Ver
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardAdv;
