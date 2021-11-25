import React from "react";
import { Box, Btn } from "../UI";
import { extratoLista } from "../../info";
import Items from "../Items";

const Extrato = () => {
  return (
    <Box>
      {extratoLista.updates.map(({ id, type, value, date, from }) => (
        <Items key={id} type={type} value={value} date={date} from={from} />
      ))}
      <Btn>Ver mais</Btn>
    </Box>
  );
};

export default Extrato;
