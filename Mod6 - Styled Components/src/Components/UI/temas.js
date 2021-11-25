import {
  fundoClaro,
  conteudoClaro,
  textoFundoClaro,
  fundoEscuro,
  conteudoEscuro,
  textoFundoEscuro,
} from "./variaveis";

export const temaClaro = {
  body: fundoClaro,
  text: textoFundoClaro,
  inside: conteudoClaro,
  filter: "",
};

export const temaEscuro = {
  body: fundoEscuro,
  text: textoFundoEscuro,
  inside: conteudoEscuro,
  filter: "invert(100%)",
};
