import React from 'react';
import { Logo } from "../Logo";
import { Container } from "./styles";

export function Footer() {
    return (
        <Container>
            <Logo></Logo>
            <h2>© 2024. Todos os direitos reservados</h2>
        </Container>
    );
}