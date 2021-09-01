import React from 'react';
import CardNota from '../CardNota';
import './style.css';

function ListaDeNotas(props) {
  return (
    <ul className='lista-notas'>
      {props.notas.map((nota, index) => {
        return (
          <li key={index} className='lista-notas_item'>
            <CardNota
              index={index}
              titulo={nota.titulo}
              texto={nota.texto}
              categoria={nota.categoria}
              deletarNota={props.deletarNota}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default ListaDeNotas;
