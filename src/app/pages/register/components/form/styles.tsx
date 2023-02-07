import styled from 'styled-components';

export const Container = styled.div`
    width: 400px;
    height: 70%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.primary.dark};

    button {
        margin-top: 16px;
    }
`;

export const TextLogin = styled.span`
    font-size: 36px;
    font-weight: 600;
    color: ${(({ theme }) => theme.colors.primary.lighter)};;
    margin-bottom: 8px;
`;

export const TextWelcome = styled.span`
    font-size: 14px;
    color: ${(({ theme }) => theme.colors.primary.lighter)};;
    margin-bottom: 16px;
`;

export const TextRegister = styled.span`
    font-size: 12px;
    font-weight: 500;
    color: ${(({ theme }) => theme.colors.primary.lighter)};;
    margin-bottom: 16px;
`;