import React from "react";
import image from "../assets/img/doguito.svg";
import "../assets/css/componentes/cabecalho.css";
import { Link } from "react-router-dom";

function Cabecalho() {
  return (
    <header className="cabecalho container">
      <div className="menu-hamburguer">
        <span className="menu-hamburguer__icone"></span>
      </div>
      <div className="cabecalho-container">
        <a href="/" className="flex flex--centro">
          <img className="cabecalho__logo" src={image} alt="Logo Doguito" />
          <h1 className="cabecalho__titulo">PetShop</h1>
        </a>
      </div>

      <nav className="menu-cabecalho">
        <ul className="menu-itens">
          <li>
            <Link to="#" className="menu-item menu-item--entrar">
              Entrar
            </Link>
          </li>
          <li>
            <Link to="#" className="menu-item">
              Produtos
            </Link>
          </li>
          <li>
            <Link to="/" className="menu-item">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/sobre" className="menu-item">
              Sobre
            </Link>
          </li>
        </ul>
      </nav>

      <div className="menu-cabecalho-background"></div>
    </header>
  );
}

export default Cabecalho;
