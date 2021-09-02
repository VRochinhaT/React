import React, { useState } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';

function FormulárioDeCadastro() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');

  return (
    <form>
      <TextField
        id='nome'
        label='Nome'
        variant='outlined'
        fullWidth
        margin='normal'
        value={nome}
        onChange={(event) => {
          let tpmNome = event.target.value;
          if (nome.length >= 3) tpmNome = tpmNome.substr(0, 3);

          setNome(tpmNome);
        }}
      />

      <TextField
        id='sobrenome'
        label='Sobrenome'
        variant='outlined'
        fullWidth
        margin='normal'
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
      />

      <TextField
        id='cpf'
        label='CPF'
        variant='outlined'
        fullWidth
        margin='normal'
      />

      <FormControlLabel
        label='Promoções'
        control={<Switch name='promocoes' color='primary' defaultChecked />}
      />

      <FormControlLabel
        label='Novidades'
        control={<Switch name='novidades' color='primary' defaultChecked />}
      />
      <Button type='submit' variant='contained' color='primary'>
        Cadastrar
      </Button>
    </form>
  );
}

export default FormulárioDeCadastro;
