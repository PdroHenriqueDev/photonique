import styled from 'styled-components';

export const LinearProgressWithLabelContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LinearProgressContainer = styled.div`
  width: 100%;

  .linear-progress {
    background-color: ${({ theme }) => theme.colors.primary.lighter};
    .css-5xe99f-MuiLinearProgress-bar1 {
      background-color: ${({ theme }) => theme.colors.primary.dark};
    }
  }
`;

export const PercentageTextContainer = styled.div`
  margin-inline: 8px;
`;

export const PercentageText = styled.span`
  font-size: 12px;
`;

export const LinearWithValueLabelContainer = styled.div`
  width: 100%;
`;
