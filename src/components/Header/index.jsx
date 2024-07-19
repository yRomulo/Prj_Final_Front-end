import React from 'react';
import { Container, Logout } from "./styles";
import { IoIosLogOut } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { Input } from "../Input";
import { Button } from "../Button";
import { Logo } from "../Logo";
import { CiShoppingCart } from "react-icons/ci";

export function Header() {
  return (
    <Container>
      <Logo to="/home" />

      <Input className="input"
        icon={CiSearch}
        type="search"
        placeholder="Busque por pratos ou ingrediente "
      />
      <Button to="/cart" className="btPedido" title=" Pedidos" />

      <Logout>
        <IoIosLogOut size={24} to="/signIn" />
      </Logout>
    </Container>
  );
}
