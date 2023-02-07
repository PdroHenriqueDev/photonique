import styled from 'styled-components';

export const Input = styled.input`
    width: 100%;
    border: none;
    background: ${(({ theme }) => theme.colors.primary.lighter)};;
    border: 2px solid ${(({ theme }) => theme.colors.primary.lighter)};;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    height: 52px;
    border-radius: 4px;
    outline: none;
    padding: 0 16px;
    font-size: 16px;
    transition: border-color 0.2s ease-in;
    appearance: none;

    & + & {
        margin-top: 16px;
    }
`;

export const Label = styled.label`
    color: ${(({ theme }) => theme.colors.primary.lighter)};
`;