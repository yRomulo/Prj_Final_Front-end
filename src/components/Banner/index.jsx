import React from 'react';
import { Container } from "./styles";
export function Banner() {
  return (
    <Container>
      <img src="../../assets/banner.png" alt="" />
      <div>
        <h1>Sabores inigualáveis</h1>
        <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
      </div>
    </Container>
  );
}
