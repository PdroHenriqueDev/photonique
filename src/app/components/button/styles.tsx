import styled from 'styled-components';

export const DynamicButton = styled.button`
    height: 52px;
    border: none;
    padding: 0 16px;
    background-color: ${(({ theme }) => theme.colors.primary.main)};
    font-size: 16px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    font-weight: bold;
    color: #000;
    border-radius: 4px;
    transition: background all 0.2s ease-in;
    display: flex;
    align-items: center;
    justify-content: center;
`;