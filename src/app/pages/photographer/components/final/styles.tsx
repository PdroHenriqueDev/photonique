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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.primary.dark};
`;

export const TextTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

export const Text = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary.lighter};
  margin-top: 8px;
`;
