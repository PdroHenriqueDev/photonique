import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  width: 400px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.primary.dark};
`;

export const Text = styled.p`
  font-size: 28px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
`;
