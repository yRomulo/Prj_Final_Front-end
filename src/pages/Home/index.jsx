import "./styles.js";
import React from 'react';
import { Container } from "./styles.js";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Banner } from "../../components/Banner/index.jsx";
import { Category } from "../../components/Category/index.jsx";

export function Home() {
  return (
    <Container>
      <Header />
      <main>
        <Banner/>
        <Category title="Refeições"/>
        <Category title="Bebidas"/>
        <Category title="Sobremesas"/>
      </main>
      <Footer />
    </Container>
  );
}
