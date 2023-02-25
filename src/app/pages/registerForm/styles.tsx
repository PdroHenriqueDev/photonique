import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
    padding: 32px;
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    padding: 30px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.primary.dark};

    button {
        margin-top: 30px;
        width: 100%;
    }
`;

export const FormRow = styled.div`
  margin-top: 16px;
  width: 100%;
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
    margin-left: 16px;
`;

export const FormGroup = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;

    input + input {
        margin-left: 16px;
        width: 40%;
    }
`;

export const TextRegister = styled.span`
    font-size: 12px;
    color: ${(({ theme }) => theme.colors.primary.lighter)};;
    margin-top: 16px;

    strong {
        text-decoration: underline;
    }
`;