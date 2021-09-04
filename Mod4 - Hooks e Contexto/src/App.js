import './App.css';
import 'fontsource-roboto';
import FormulárioDeCadastro from './components/FormularioDeCadastro/FormularioDeCadastro';
import { Container, Typography } from '@material-ui/core';
import { validarCPF, validarSenha } from './model/cadastro';
import ValidacoesCadastro from './context/ValidacoesCadastro';

function aoEnviarForm(dados) {
  console.log(dados);
}

function App() {
  return (
    <Container component='article' maxWidth='sm'>
      <Typography variant='h3' component='h1' align='center'>
        Formulário de Cadastro
      </Typography>

      <ValidacoesCadastro.Provider
        value={{ cpf: validarCPF, senha: validarSenha }}
      >
        <FormulárioDeCadastro aoEnviarForm={aoEnviarForm} />
      </ValidacoesCadastro.Provider>
    </Container>
  );
}

export default App;
