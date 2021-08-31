import React, { useState } from 'react';
import './style.css';

function FormularioCadastro(props) {
  const [titulo, setTitulo] = useState('');
  const [texto, setTexto] = useState('');

  const _criarNota = (evento) => {
    evento.preventDefault();
    props.criarNota(titulo, texto);
  };

  return (
    <form className='form-cadastro' onSubmit={(evento) => _criarNota(evento)}>
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
