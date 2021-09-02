import './App.css';
import 'fontsource-roboto';
import FormulárioDeCadastro from './components/FormularioDeCadastro/FormulárioDeCadastro';
import { Container, Typography } from '@material-ui/core';

function App() {
  return (
    <Container component='article' maxWidth='sm'>
      <Typography variant='h3' component='h1' align='center'>
        Formulário de Cadastro
      </Typography>
      <FormulárioDeCadastro />
    </Container>
  );
}

export default App;
