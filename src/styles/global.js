import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        font-size: 62.5%;
    }

    body{
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800} ;
        color:${({ theme }) => theme.COLORS.WHITE} ;
    
        -webkit-font-smoothin: antialiased;
    }

    body, input, button, textarea{
        font-family: 'Roboto', serif;
        font-size: 16px;
        outline: none;
        border: none;
    }

    a{
        text-decoration: none;
    }

    button, a{
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover{
        cursor: pointer;
        transition: filter 0.2s;
    }
`;
