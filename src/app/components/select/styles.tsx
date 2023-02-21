import styled from 'styled-components';

export const Select = styled.select`
    width: 100%;
    border: none;
    background: ${(({ theme }) => theme.colors.primary.lighter)};
    border: 2px solid ${(({ theme }) => theme.colors.primary.lighter)};
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    height: 40px;
    border-radius: 4px;
    outline: none;
    padding: 0 16px;
    font-size: 16px;
    transition: border-color 0.2s ease-in;
    appearance: none;
`;
