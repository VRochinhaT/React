import { Typography } from '@material-ui/core';
import React, { useState } from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';

function FormularioDeCadastro({ aoEnviarForm, validarCPF }) {
  const [etapaAtual, setEtapaAtual] = useState(0);

  function proximoEtapa() {
    setEtapaAtual(etapaAtual + 1);
  }

  function formularioAtual(etapa) {
    switch (etapa) {
      case 0:
        return <DadosUsuario aoEnviar={proximoEtapa} />;
      case 1:
        return (
          <DadosPessoais aoEnviar={proximoEtapa} validarCPF={validarCPF} />
        );
      case 2:
        return <DadosEntrega aoEnviarForm={aoEnviarForm} />;
      default:
        return <Typography>Erro ao selecionar formulário</Typography>;
    }
  }

  return <>{formularioAtual(etapaAtual)}</>;
}

export default FormularioDeCadastro;
