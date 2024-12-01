import "../../variables.scss";
import D from "./doados.module.scss";
import Livro from "../../assets/livro.svg";

export default function Doados() {
  return (
    <section className={D.doados}>
      <header>
        <h2>Livros Doados</h2>
      </header>
      <div className={D.livros}>
        <article className={D.livro_card}>
          <figure>
            <img src={Livro} alt="Capa do livro O Protagonista" />
            <figcaption>
              <h3>O Protagonista</h3>
              <span>Susanne Andrade</span>
              <p>Gênero: Ficção</p>
            </figcaption>
          </figure>
        </article>
      </div>
    </section>
  );
}
