import React from 'react';
import './style.css';
import { ReactComponent as DeleteSVG } from '../../assets/img/delete.svg';

function CardNota(props) {
  return (
    <section className='card-nota'>
      <header className='card-nota_cabecalho'>
        <h3 className='card-nota_titulo'>{props.titulo}</h3>
        <DeleteSVG onClick={() => props.deletarNota(props.index)} />
        <h4>{props.categoria}</h4>
      </header>
      <p className='card-nota_texto'>{props.texto}</p>
    </section>
  );
}

export default CardNota;
