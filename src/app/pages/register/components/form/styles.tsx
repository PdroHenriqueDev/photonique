import styled from 'styled-components';

export const Container = styled.div`
    width: 400px;
    height: 70%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #161616;
    border-radius: 10px;

    button {
        margin-top: 16px;
    }
`;

export const TextLogin = styled.span`
    font-size: 36px;
    font-weight: 500;
    color: #fff;
    margin-bottom: 16px;
`;