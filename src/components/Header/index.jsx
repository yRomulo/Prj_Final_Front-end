import { Container, Logo, Logout } from "./styles";
import { IoIosLogOut } from "react-icons/io";
import { IoCartOutline } from 'react-icons/io5';
import { Input } from "../Input";
export function Header() {
  return (
    <Container>
      <Logo to="/home">
        <div>
          <span>Bem-vindo,</span>
          
        </div>
      </Logo>
      <main>
        <Input />
      </main>
      <Logout >
        <IoIosLogOut size={24}/>
      </Logout>
    </Container>
  );
}
