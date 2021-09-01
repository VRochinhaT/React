import React, { useState } from 'react';
import './style.css';

function FormularioCadastro(props) {
  const [titulo, setTitulo] = useState('');
  const [texto, setTexto] = useState('');
  const [categoria, setCategoria] = useState('Sem Categoria');

  const _criarNota = (evento) => {
    evento.preventDefault();
    props.criarNota(titulo, texto, categoria);
  };

  return (
    <form className='form-cadastro' onSubmit={(evento) => _criarNota(evento)}>
      <select
        className='form-cadastro_input'
        onChange={(evento) => setCategoria(evento.target.value)}
      >
        <option key={0}>Sem Categoria</option>
        {props.categorias.map((categoria, index) => {
          return <option key={index}>{categoria}</option>;
        })}
      </select>
      <input
        type='text'
        placeholder='Título'
        className='form-cadastro_input'
        onChange={(evento) => setTitulo(evento.target.value)}
      />
      <textarea
        rows={15}
        placeholder='Escreva sua nota...'
        className='form-cadastro_input'
        onChange={(evento) => setTexto(evento.target.value)}
      />
      <button className='form-cadastro_input form-cadastro_submit'>
        Criar Nota
      </button>
    </form>
  );
}

export default FormularioCadastro;
