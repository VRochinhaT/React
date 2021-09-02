import './App.css';
import 'fontsource-roboto';
import FormulárioDeCadastro from './components/FormularioDeCadastro/FormularioDeCadastro';
import { Container, Typography } from '@material-ui/core';

function aoEnviarForm(dados) {
  console.log(dados);
}

function validarCPF(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: 'CPF deve ter 11 digitos' };
  } else {
    return { valido: true, texto: '' };
  }
}

function App() {
  return (
    <Container component='article' maxWidth='sm'>
      <Typography variant='h3' component='h1' align='center'>
        Formulário de Cadastro
      </Typography>
      <FormulárioDeCadastro
        aoEnviarForm={aoEnviarForm}
        validarCPF={validarCPF}
      />
    </Container>
  );
}

export default App;
