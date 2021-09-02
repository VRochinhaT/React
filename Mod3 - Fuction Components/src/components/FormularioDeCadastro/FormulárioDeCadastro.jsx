import React, { useState } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';

function FormulárioDeCadastro({ aoEnviarForm, validarCPF }) {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cpf, setCpf] = useState('');
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);

  const [erros, setErros] = useState({ cpf: { valido: true, texto: '' } });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviarForm({ nome, sobrenome, cpf, promocoes, novidades });
      }}
    >
      <TextField
        id='nome'
        label='Nome'
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
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        onBlur={(event) => {
          const valido = validarCPF(cpf);
          console.log(valido);
          setErros({
            cpf: valido,
          });
        }}
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
      <Button type='submit' variant='contained' color='primary'>
        Cadastrar
      </Button>
    </form>
  );
}

export default FormulárioDeCadastro;
