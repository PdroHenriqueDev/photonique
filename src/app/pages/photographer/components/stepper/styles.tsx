import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  .step {
    svg {
      color: ${({ theme }) => theme.colors.primary.dark};
    }

    .MuiStepLabel-label {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;

export const ContentContainer = styled.div`
  height: 95%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border: 1px solid red; */

  .step-button {
    color: ${({ theme }) => theme.colors.primary.dark};
    font-weight: 600;

    &[disabled] {
      color: ${({ theme }) => theme.colors.primary.light};
    }
  }
`;

export const SetpContentContainer = styled.div`
  height: 95%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
`;
