import Facebook from "../../assets/facebook.png";
import Twitter from "../../assets/twitter.png";
import Youtube from "../../assets/youtube.png";
import Linkedln from "../../assets/linkedin.png";
import Instagram from "../../assets/instagram.png";
import F from "./footer.module.scss";

export default function Footer() {
  return (
    <footer>
      <div className={F.contato}>
        <h3>4002-8922</h3>
        <div className={F.rede_social}>
          <a href="">
            <img src={Facebook} alt="Facebook" />
          </a>
          <a href="">
            <img src={Twitter} alt="Twitter" />
          </a>
          <a href="">
            <img src={Youtube} alt="Youtube" />
          </a>
          <a href="">
            <img src={Linkedln} alt="Linkedln" />
          </a>
          <a href="">
            <img src={Instagram} alt="Instagram" />
          </a>
        </div>
      </div>
      <p className={F.direitos}>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
    </footer>
  );
}
