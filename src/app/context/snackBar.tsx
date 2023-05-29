import {
  SnackbarContextValue,
  StyledSnackbarProps,
} from 'app/models/components/snackBar.model';
import { createContext, useState } from 'react';
import DynamicSnackbar from '../components/snackBar';

export const SnackbarContext = createContext<SnackbarContextValue>({
  showSnackbar: () => {},
});

export function SnackbarProvider(props: StyledSnackbarProps) {
  const [snackbarState, setSnackbarState] = useState<StyledSnackbarProps>({
    open: false,
    message: '',
  });

  const handleClose = () => {
    setSnackbarState((prevState) => ({ ...prevState, open: false }));
  };

  const showSnackbar = (
    message: string | string[],
    color?: 'success' | 'danger' | 'warning',
    autoHideDuration?: number,
  ) => {
    setSnackbarState({ open: true, message, color, autoHideDuration });
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {props.children}
      <DynamicSnackbar
        open={snackbarState.open}
        handleClose={handleClose}
        message={snackbarState.message}
        color={snackbarState.color}
        autoHideDuration={snackbarState.autoHideDuration}
      />
    </SnackbarContext.Provider>
  );
}
