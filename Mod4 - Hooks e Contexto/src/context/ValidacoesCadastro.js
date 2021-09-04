import React from 'react';

function semValidacao(dados) {
  console.log(dados);
  return { valido: true, texto: '' };
}

const ValidacoesCadastro = React.createContext({
  cpf: semValidacao,
  senha: semValidacao,
});

export default ValidacoesCadastro;
