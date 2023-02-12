import styled from 'styled-components';
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

    &:focus {
        border-color: ${({ theme }) => theme.colors.primary.main};
    }

    /* &[disabled] {
        background-color: ${({ theme }) => theme.colors.primary.main};
        border-color: ${({ theme }) => theme.colors.primary.main};
    } */
`;

export const InputPasswordContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;

    svg {
        margin-left: -30px;
        color: ${({ theme }) => theme.colors.primary.main};
        cursor: pointer;
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