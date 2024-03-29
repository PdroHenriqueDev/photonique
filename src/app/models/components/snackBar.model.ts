import { SnackbarCloseReason, SnackbarProps } from '@mui/material';

export interface StyledSnackbarProps extends SnackbarProps {
  color?: 'success' | 'danger' | 'warning';
  handleClose?:
    | ((
        event: Event | React.SyntheticEvent<unknown, Event>,
        reason: SnackbarCloseReason,
      ) => void)
    | undefined;
  snackbarState?: number;
}

export interface SnackbarContextValue {
  showSnackbar: (
    message: string,
    color?: 'success' | 'danger' | 'warning',
  ) => void;
}
