import { StyledSnackbarProps } from "app/models/components/snackBar.model";
import { StyledSnackbar } from "./styles";

export default function DynamicSnackbar({
    anchorOrigin = { vertical: 'top', horizontal: 'right' },
    open,
    handleClose,
    message,
    color,
    autoHideDuration,
}: StyledSnackbarProps)  {

    return (
        <StyledSnackbar
            anchorOrigin={anchorOrigin}
            open={open}
            onClose={handleClose}
            message={message}
            key={Date.now()}
            color={color}
            autoHideDuration={autoHideDuration}
        />
      );
}