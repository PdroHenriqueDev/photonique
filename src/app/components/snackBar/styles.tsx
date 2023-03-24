import styled from 'styled-components';
import { Snackbar } from '@mui/material';
import { StyledSnackbarProps } from 'app/models/components/snackBar.model';

export const StyledSnackbar = styled(Snackbar)<StyledSnackbarProps>`
  .custom-snack-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 70px;
    border-radius: 4px;
    padding: 16px 32px;
    box-shadow: 0px 20px 20px -16px rgba(0, 0, 0, 0.25);
    background: ${({ theme, color }) =>
      color ? theme.colors[color].main : theme.colors.primary.main};

    @media (max-width: 768px) {
      width: 100%;
      height: 35px;
    }

    span {
      color: ${({ theme }) => theme.colors.white};
      font-weight: 550;

      :last-child {
        margin-top: 5px;
      }
    }
  }
`;
