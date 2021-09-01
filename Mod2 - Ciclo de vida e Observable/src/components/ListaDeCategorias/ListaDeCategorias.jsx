import React, { Component } from 'react';
import './style.css';

class ListaDeCategorias extends Component {
  constructor() {
    super();
    this.state = {
      categorias: [],
    };

    this._novasCategorias = this._novasCategorias.bind(this);
  }

  componentDidMount() {
    this.props.categorias.inscrever(this._novasCategorias);
  }

  componentWillUnmount() {
    this.props.categorias.desinscrever(this._novasCategorias);
  }

  _novasCategorias(categorias) {
    this.setState({ ...this.state, categorias });
  }

  _handleEventoInput(evento) {
    if (evento.key === 'Enter') {
      this.props.adicionarCategoria(evento.target.value);
    }
  }

  render() {
    return (
      <section className='lista-categoria'>
        <ul className='lista-categoria_lista'>
          {this.state.categorias.map((categoria, index) => {
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
          onKeyUp={this._handleEventoInput.bind(this)}
        />
      </section>
    );
  }
}

export default ListaDeCategorias;
