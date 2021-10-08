import React from "react";
import image from "../assets/img/doguito404.svg";
import "../assets/css/404.css";

function Page404() {
  return (
    <div className="container flex flex--centro flex--coluna">
      <img className="doguito-imagem" src={image} alt="ilustração doguito" />
      <p className="naoencontrado-texto">Ops! Essa página não existe!</p>
    </div>
  );
}

export default Page404;
