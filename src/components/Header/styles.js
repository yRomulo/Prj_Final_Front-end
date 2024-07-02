import styled from "styled-components";


export const Container = styled.header`
  grid-area: header;

  height: 105px;
  width: 100%;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;

  padding: 0 80px;
`;

export const Logo = styled.svg`

`
export const Logout = styled.button`
    border: 0;
    background: none;

    > svg{
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 36px;
    }
`