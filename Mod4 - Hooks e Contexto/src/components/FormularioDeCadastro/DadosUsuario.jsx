import { TextField, Button } from '@material-ui/core';
import React, { useState, useContext } from 'react';
import ValidacoesCadastro from '../../context/ValidacoesCadastro';
import useErros from '../../hook/useErros';

function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const validacoes = useContext(ValidacoesCadastro);

  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) aoEnviar({ email, senha });
      }}
    >
      <TextField
        id='email'
        label='E-mail'
        name='email'
        type='email'
        required
        variant='outlined'
        fullWidth
        margin='normal'
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <TextField
        id='senha'
        label='Senha'
        name='senha'
        type='password'
        required
        variant='outlined'
        fullWidth
        margin='normal'
        value={senha}
        onChange={(event) => {
          setSenha(event.target.value);
        }}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        onBlur={validarCampos}
      />
      <Button type='submit' variant='contained' color='primary' fullWidth>
        Próximo
      </Button>
    </form>
  );
}

export default DadosUsuario;
