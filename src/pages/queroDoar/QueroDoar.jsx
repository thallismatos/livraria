import Q from "./queroDoar.module.scss";
import Book from "../../assets/livro_querodoar.svg";

export default function QueroDoar() {
  return (
    <section className={Q.form_container}>
      <h2>
        Por favor, preencha o formulário com suas informações e as informações
        do Livro
      </h2>
      <form className={Q.book_form}>
        <header className={Q.form_subtitle}>
          <img src={Book} alt="" />
          <h3>Informações do Livro</h3>
        </header>
        <div className={Q.form_field}>
          <input
            type="text"
            name="titulo"
            placeholder="Título do Livro"
            required
          />
        </div>
        <div className={Q.form_field}>
          <input
            type="text"
            name="categoria"
            placeholder="Categoria do Livro"
            required
          />
        </div>
        <div className={Q.form_field}>
          <input
            type="text"
            name="autor"
            placeholder="Autor do Livro"
            required
          />
        </div>
        <div className={Q.form_field}>
          <input
            type="url"
            name="linkImagem"
            placeholder="Link da Imagem do Livro"
            required
          />
        </div>
        <button type="submit" className={Q.submit_btn}>
          Doar
        </button>
      </form>
    </section>
  );
}
