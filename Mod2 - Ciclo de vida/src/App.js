import React, { useState } from 'react';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeNotas from './components/ListaDeNotas';
import ListaDeCategorias from './components/ListaDeCategorias';
import './assets/App.css';
import './assets/index.css';

function App() {
  const [notas, setNotas] = useState([]);
  const [categorias, setCategorias] = useState(['Trabalho', 'Game']);

  const criarNota = (titulo, texto, categoria) => {
    const novaNota = { titulo, texto, categoria };
    setNotas([...notas, novaNota]);
  };

  const deletarNota = (index) => {
    const arrayNotas = [...notas];
    arrayNotas.splice(index, 1);
    setNotas(arrayNotas);
  };

  const adicionarCategoria = (nome) => {
    const novoArrayCategorias = [...categorias, nome];
    setCategorias(novoArrayCategorias);
  };

  return (
    <section className='conteudo'>
      <FormularioCadastro categorias={categorias} criarNota={criarNota} />
      <main className='conteudo-principal'>
        <ListaDeCategorias
          categorias={categorias}
          adicionarCategoria={adicionarCategoria}
        />
        <ListaDeNotas notas={notas} deletarNota={deletarNota} />
      </main>
    </section>
  );
}

export default App;
