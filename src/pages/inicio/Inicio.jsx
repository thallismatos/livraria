import S from "./inicio.module.scss";
import network from "../../assets/network.png";
import read from "../../assets/read.png";
import transform from "../../assets/transform.png";
import balance from "../../assets/balance.png";

export default function Inicio() {
  return (
    <main>
      <section className={S.post}>
        <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
      </section>
      <section className={S.devoDoar}>
        <div>
          <h2>Por que devo doar ?</h2>
        </div>
        <section className={S.card}>
          <article>
            <img src={network} alt="" />
            <h3>
              Oferece livros a quem não tem acesso, ajudando a reduzir a
              exclusão social.
            </h3>
          </article>
          <article>
            <img src={read} alt="" />
            <h3>Estimula o hábito da leitura e o aprendizado contínuo.</h3>
          </article>
          <article>
            <img src={transform} alt="" />
            <h3>
              Fornece conhecimento e inspiração, permitindo que indivíduos
              transformem suas vidas.
            </h3>
          </article>
          <article>
            <img src={balance} alt="" />
            <h3>
              Garante que todos, independentemente de sua condição, tenham
              oportunidades de aprendizado.
            </h3>
          </article>
        </section>
      </section>
    </main>
  );
}
