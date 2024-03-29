import React, { Component } from 'react';
import CardNota from '../CardNota';
import './style.css';

class ListaDeNotas extends Component {
  constructor() {
    super();
    this.state = { notas: [] };

    this._novasNotas = this._novasNotas.bind(this);
  }

  componentDidMount() {
    this.props.notas.inscrever(this._novasNotas);
  }

  componentWillUnmount() {
    this.props.notas.desinscrever(this._novasNotas);
  }

  _novasNotas(notas) {
    this.setState({ ...this.notas, notas });
  }

  render() {
    return (
      <ul className='lista-notas'>
        {this.state.notas.map((nota, index) => {
          return (
            <li key={index} className='lista-notas_item'>
              <CardNota
                index={index}
                titulo={nota.titulo}
                texto={nota.texto}
                categoria={nota.categoria}
                deletarNota={this.props.deletarNota}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
