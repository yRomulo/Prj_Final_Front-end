import { Container } from "./styles";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
export const ProductDetails = (name, desc, price) => {
  return (
    <Container>
      <button>
        <IoIosArrowBack size={24} /> voltar
      </button>
      <div>
        <img src="https://via.placeholder.com/150" alt="Product" />
        <div>
          <h3>Nome do Produto</h3>
          <p>Descrição do produto...</p>

          <div className="product-actions">
            <input type="number" min="1" max="10" defaultValue="1" />
            <button>
              Incluir - <>R$ 79,97</>{" "}
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};
