import I from "./inicio.module.scss";
import network from "../../assets/network.png";
import reading from "../../assets/read.png";
import transform from "../../assets/transform.png";
import balance from "../../assets/balance.png";

export default function Inicio() {
  return (
    <main>
      <div className={I.home}>
        <section className={I.container}>
          <h1>
            venha fazer parte <br />
            da maior rede de <br /> doação
          </h1>
        </section>
      </div>

      <section className={I.container_doar}>
        <h2>Por que devo doar?</h2>
        <div className={I.container_card}>
          <div className={I.card}>
            <img src={network} alt="" />
            <p>
              Oferece livros a quem não tem acesso, ajudando a reduzir a
              exclusão social
            </p>
          </div>
          <div className={I.card}>
            <img src={reading} alt="" />
            <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
          </div>
          <div className={I.card}>
            <img src={transform} alt="" />
            <p>
              Fornece conhecimento e inspiração, permitindo que indivíduos
              transformem suas vidas.
            </p>
          </div>
          <div className={I.card}>
            <img src={balance} alt="" />
            <p>
              Garante que todos, independentemente de sua condição, tenham
              oportunidades de aprendizado.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
