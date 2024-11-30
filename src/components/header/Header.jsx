import Logo from "../../assets/logo.svg";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Inicio from "../../pages/inicio/Inicio";
import Doados from "../../pages/doados/Doados";
import QueroDoar from "../../pages/queroDoar/QueroDoar";
import H from "./header.module.scss";

export default function Header() {
  return (
    <BrowserRouter>
      <header className={H.header}>
        <div className={H.logo}>
          <img src={Logo} alt="" />
        </div>
        <nav>
          <ul className={H.menu}>
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="doados">Livros</Link>
            </li>
            <li>
              <Link to="doar">Quero doar</Link>
            </li>
          </ul>
        </nav>
        <div className={H.busca}>
          <input type="text" placeholder="o que você precisa ?" />
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="doados" element={<Doados />} />
        <Route path="doar" element={<QueroDoar />} />
      </Routes>
    </BrowserRouter>
  );
}
