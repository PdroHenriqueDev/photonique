import styled, { css } from 'styled-components';
import { InputProps } from '../../models/components/input.model';

export const Input = styled.input<InputProps>`
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

    &::placeholder {
        color: ${(({ theme }) => theme.colors.primary.main)};
    }

    &:focus {
        border-color: ${({ theme }) => theme.colors.primary.main};
    }

    ${({ theme, error }) =>
    error &&
    css`
        border-color: ${theme.colors.danger.main} !important;
    `}

    /* &[disabled] {
        background-color: ${({ theme }) => theme.colors.primary.main};
        border-color: ${({ theme }) => theme.colors.primary.main};
    } */
`;

export const InputPasswordContainer = styled.div`
    width: 100%;
    position: relative;
    display: inline-block;

    span {
        cursor: pointer;
        position: absolute;
        top: 50%;
        right: 16px;
        transform: translateY(-50%);
        z-index: 1;
        color: ${({ theme }) => theme.colors.primary.main};
    }
`;

export const InputPassword = styled.input<InputProps>`
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

    &:focus {
        border-color: ${({ theme }) => theme.colors.primary.main};
    };

    /* &[disabled] {
        background-color: ${({ theme }) => theme.colors.primary.main};
        border-color: ${({ theme }) => theme.colors.primary.main};
    } */
`;