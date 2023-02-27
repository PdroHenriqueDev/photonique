import styled, { css } from 'styled-components';

export const Container = styled.div`
    position: relative;
    display: inline-block;
    width: 100%;
    padding: 0;

    span {
        position: absolute;
        top: 50%;
        right: 16px;
        transform: translateY(-50%);
        pointer-events: none;
        z-index: 1;
    }
`;

export const Select = styled.select<any>`
    width: 100%;
    border: none;
    background: ${(({ theme }) => theme.colors.primary.lighter)};
    border: 2px solid ${(({ theme }) => theme.colors.primary.lighter)};
    color: ${(({ theme }) => theme.colors.primary.main)};
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    height: 40px;
    border-radius: 4px;
    outline: none;
    padding: 0 16px;
    font-size: 16px;
    transition: border-color 0.2s ease-in;
    appearance: none;
    cursor: pointer;

    &:focus {
        border-color: ${({ theme }) => theme.colors.primary.main};
    }

    ${({ theme, error }) =>
    error &&
    css`
        border-color: ${theme.colors.danger.main} !important;
    `}

    &[disabled] {
        background-color: ${({ theme }) => theme.colors.primary.light};
        border-color: ${({ theme }) => theme.colors.primary.light};
        opacity: 1;
    }
`;
