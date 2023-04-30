import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
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

    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-track {
        background-color: ${({ theme }) => theme.colors.primary.lighter};
        border-radius: 5px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.colors.primary.light};
        border-radius: 5px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: ${({ theme }) => theme.colors.primary.main};
    }
`;
