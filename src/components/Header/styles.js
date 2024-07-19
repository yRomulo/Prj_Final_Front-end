import styled from "styled-components";


export const Container = styled.header`
  grid-area: header;

  height: 100%;
  width: 100%;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  display: flex;
  justify-content: space-between;
  align-items: center;
  
  padding: 0 124px;
  >.btPedido{
    width: 216px;
    height: 56px;
  }
  >.input{
    margin-top: 7px;
    width: 581px;
    height: 48px;
  }
`;


export const Logout = styled.button`
    border: 0;
    background: none;

    > svg{
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 36px;
    }
`