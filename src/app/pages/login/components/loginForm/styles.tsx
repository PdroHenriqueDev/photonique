import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 30px;

    button {
        margin-top: 16px;
        width: 100%;
    }
`;

export const Form = styled.form`
    width: 100%;
`;

export const FormRow = styled.div`
  margin-top: 16px;
  width: 100%;
`;

export const TextLogin = styled.span`
    font-size: 36px;
    font-weight: 600;
    color: ${(({ theme }) => theme.colors.primary.lighter)};;
`;

export const TextWelcome = styled.span`
    font-size: 14px;
    color: ${(({ theme }) => theme.colors.primary.lighter)};
`;

export const TextRegister = styled.span`
    font-size: 12px;
    color: ${(({ theme }) => theme.colors.primary.lighter)};;
    margin-top: 16px;

    strong {
        text-decoration: underline;
        cursor: pointer;
    }
`;