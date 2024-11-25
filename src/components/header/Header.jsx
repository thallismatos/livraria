import Logo from '../../assets/logo.svg';
import Busca from '../../assets/search.svg';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Inicio from "../../pages/inicio/Inicio";
import Doados from "../../pages/doados/Doados";
import QueroDoar from "../../pages/queroDoar/QueroDoar";

export default function Header() {
  return (
    <BrowserRouter>
      <header>
        <img src={Logo} alt="logo" />
        <nav>
          <ul>
            <li><Link to="/">Início</Link></li>
            <li><Link to="livros">Livros</Link></li>
            <li><Link to="doar">Quero doar</Link></li>
          </ul>
        </nav>
        <div>
          <input type="text" />
          <img src={Busca} alt="" />
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