import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';

function DadosEntrega({ aoEnviar }) {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ cep, endereco, numero, estado, cidade });
      }}
    >
      <TextField
        id='cep'
        label='CEP'
        name='cep'
        type='number'
        variant='outlined'
        margin='normal'
        value={cep}
        onChange={(event) => {
          setCep(event.target.value);
        }}
      />
      <TextField
        id='endereco'
        label='Endereço'
        name='endereco'
        variant='outlined'
        fullWidth
        margin='normal'
        value={endereco}
        onChange={(event) => {
          setEndereco(event.target.value);
        }}
      />
      <TextField
        id='numero'
        label='Número'
        name='numero'
        type='number'
        variant='outlined'
        margin='normal'
        value={numero}
        onChange={(event) => {
          setNumero(event.target.value);
        }}
      />
      <TextField
        id='estado'
        label='Estado'
        name='estado'
        variant='outlined'
        margin='normal'
        value={estado}
        onChange={(event) => {
          setEstado(event.target.value);
        }}
      />
      <TextField
        id='cidade'
        label='Cidade'
        name='cidade'
        variant='outlined'
        margin='normal'
        value={cidade}
        onChange={(event) => {
          setCidade(event.target.value);
        }}
      />

      <Button type='submit' variant='contained' color='primary' fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  );
}

export default DadosEntrega;
