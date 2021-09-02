import { TextField, Button } from '@material-ui/core';
import React from 'react';

function DadosUsuario({ aoEnviar }) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar();
      }}
    >
      <TextField
        id='email'
        label='E-mail'
        type='email'
        required
        variant='outlined'
        fullWidth
        margin='normal'
      />
      <TextField
        id='senha'
        label='Senha'
        type='password'
        required
        variant='outlined'
        fullWidth
        margin='normal'
      />
      <Button type='submit' variant='contained' color='primary' fullWidth>
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosUsuario;
