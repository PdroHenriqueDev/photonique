import styled from 'styled-components';

export const DynamicButton = styled.button`
  height: 52px;
  width: 100%;
  border: none;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.colors.primary.lighter};
  font-size: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary.main};
  border-radius: 4px;
  transition: background all 0.2s ease-in;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.dark};
  }

  &[disabled] {
    background: ${({ theme }) => theme.colors.primary.light};
    color: ${({ theme }) => theme.colors.primary.lighter};
    cursor: default !important;
  }
`;
