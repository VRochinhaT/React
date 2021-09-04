import React, { useContext, useState } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';
import ValidacoesCadastro from '../../context/ValidacoesCadastro';
import useErros from '../../hook/useErros';

function DadosPessoais({ aoEnviar }) {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cpf, setCpf] = useState('');
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const validacoes = useContext(ValidacoesCadastro);

  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar())
          aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
      }}
    >
      <TextField
        id='nome'
        label='Nome'
        name='nome'
        required
        variant='outlined'
        fullWidth
        margin='normal'
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
      />

      <TextField
        id='sobrenome'
        label='Sobrenome'
        name='sobrenome'
        required
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
        name='cpf'
        required
        variant='outlined'
        fullWidth
        margin='normal'
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        onBlur={validarCampos}
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
      />

      <FormControlLabel
        label='Promoções'
        control={
          <Switch
            name='promocoes'
            color='primary'
            checked={promocoes}
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
          />
        }
      />

      <FormControlLabel
        label='Novidades'
        control={
          <Switch
            name='novidades'
            color='primary'
            checked={novidades}
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
          />
        }
      />
      <Button type='submit' variant='contained' color='primary' fullWidth>
        Próximo
      </Button>
    </form>
  );
}

export default DadosPessoais;
