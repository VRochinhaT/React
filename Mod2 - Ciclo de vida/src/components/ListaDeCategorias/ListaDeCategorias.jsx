import React from 'react';
import './style.css';

function ListaDeCategorias(props) {
  const _handleEventoInput = (evento) => {
    if (evento.key === 'Enter') {
      props.adicionarCategoria(evento.target.value);
    }
  };

  return (
    <section className='lista-categoria'>
      <ul className='lista-categoria_lista'>
        {props.categorias.map((categoria, index) => {
          return (
            <li key={index} className='lista-categoria_item'>
              {categoria}
            </li>
          );
        })}
      </ul>
      <input
        type='text'
        className='lista-categoria_input'
        placeholder='Adicionar Categoria'
        onKeyUp={_handleEventoInput}
      />
    </section>
  );
}

export default ListaDeCategorias;
