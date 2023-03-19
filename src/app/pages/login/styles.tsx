import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`;

export const ContentContainer = styled.div`
    width: 400px;
    height: 60%;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.primary.dark};
`;