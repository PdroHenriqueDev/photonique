import styled from 'styled-components';

export const Container = styled.div`
  .date-picker {
    background-color: ${({ theme }) => theme.colors.primary.lighter};
    border-radius: 4px;
    width: 100%;
    padding: 0;
    border-color: ${({ theme }) => theme.colors.primary.main};

    input {
      color: ${({ theme }) => theme.colors.primary.main};
    }

    label {
      color: ${({ theme }) => theme.colors.primary.main};
    }

    fieldset.MuiOutlinedInput-notchedOutline {
      border-color: ${({ theme }) => theme.colors.primary.lighter};
    }

    .Mui-focused fieldset.MuiOutlinedInput-notchedOutline {
      border-color: ${({ theme }) => theme.colors.primary.main};
    }
  }
  .css-1xhypcz-MuiStack-root {
    padding: 0;
  }
`;
