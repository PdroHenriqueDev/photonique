import { createGlobalStyle } from 'styled-components';

export const GlobalStyle =  createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Sora', sans-serif;
    }

    body {
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.primary.light};
        font-size: 16px;
    }

    button {
        cursor: pointer;
    }
`;
