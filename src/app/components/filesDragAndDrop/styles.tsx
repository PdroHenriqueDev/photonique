import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 150px;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.white};
  border: 2px ${({ theme }) => theme.colors.primary.light} dashed;
  border-radius: 12px;

  input {
    display: none;
  }
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  font-size: 16px;
`;

export const ClickText = styled.span`
  color: ${({ theme }) => theme.colors.primary.light};
  font-weight: 600;
  font-size: 16px;
  text-decoration: underline;
  cursor: pointer;
`;
