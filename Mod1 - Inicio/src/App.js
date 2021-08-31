import React, { useState } from 'react';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeNotas from './components/ListaDeNotas';
import './assets/App.css';
import './assets/index.css';

function App() {
  const [notas, setNotas] = useState([]);

  const criarNota = (titulo, texto) => {
    const novaNota = { titulo, texto };
    setNotas([...notas, novaNota]);
  };

  return (
    <section className='conteudo'>
      <FormularioCadastro criarNota={criarNota} />
      <ListaDeNotas notas={notas} />
    </section>
  );
}

export default App;
