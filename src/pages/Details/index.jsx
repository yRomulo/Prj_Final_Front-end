import "./styles.js";
import React from "react";
import { Container } from "./styles.js";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import { ProductDetails } from "../../components/ProductDetails";

export function Details() {
  return (
    <Container>
      <Header />
      <main>
        
        <ProductDetails />
      </main>
      <Footer />
    </Container>
  );
}
