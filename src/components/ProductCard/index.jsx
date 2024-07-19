import React from 'react';
import { Container } from "./styles";

export const ProductCard = (name, desc, price) => {
  return (
    <Container>
      <img src="https://via.placeholder.com/150" alt="Product" />
      <h3>Nome do Produto</h3>
      <p>Descrição do produto...</p>
      <p>R$ 79,97</p>
      <div className="product-actions">
        <input type="number" min="1" max="10" defaultValue="1" />
        <button>Incluir</button>
      </div>
    </Container>
  );
};