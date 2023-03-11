import { StyledSnackbarProps } from "app/models/components/snackBar.model";
import { StyledSnackbar } from "./styles";

export default function DynamicSnackbar({
    anchorOrigin = { vertical: 'top', horizontal: 'right' },
    open,
    handleClose,
    message,
    color,
    autoHideDuration = 1200,
}: StyledSnackbarProps)  {

    const messageIsArray = Array.isArray(message);

    return (
        <StyledSnackbar
            anchorOrigin={anchorOrigin}
            open={open}
            onClose={handleClose}
            message={message}
            key={Date.now()}
            color={color}
            autoHideDuration={messageIsArray ? 2000 : autoHideDuration}
        >
            <div className="custom-snack-bar">
                {messageIsArray ? (
                    message.map((msg) => (
                        <span key={msg}>
                            {msg}
                        </span>
                    ))
                ) : <span>{message}</span>
                }
            </div>
        </StyledSnackbar>
      );
}