import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  overflow: hidden;

  .appBar {
    background-color: ${({ theme }) => theme.colors.primary.dark};
  }
`;

export const Logo = styled.h2`
  color: ${({ theme }) => theme.colors.primary.lighter};
  font-size: 26px;
  font-weight: bold;
  cursor: pointer;
  @media (max-width: 900px) {
    display: none;
  }
`;

export const StyledPage = styled.span`
  color: ${({ theme }) => theme.colors.primary.lighter};
  cursor: pointer;
`;

export const PhotographerPage = styled.span`
  color: ${({ theme }) => theme.colors.primary.light};
  font-weight: 600;
  cursor: pointer;
  margin-right: 10px;
`;
