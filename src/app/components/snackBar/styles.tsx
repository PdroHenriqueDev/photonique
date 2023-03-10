import styled from "styled-components";
import { Snackbar } from "@mui/material";
import { StyledSnackbarProps } from "app/models/components/snackBar.model";

export const StyledSnackbar = styled(Snackbar)<StyledSnackbarProps>`
    .css-1eqdgzv-MuiPaper-root-MuiSnackbarContent-root {
        background: ${(({ theme, color }) => color
            ? theme.colors[color].main
            :  theme.colors.primary.main)};
    }

    .css-1eqdgzv-MuiPaper-root-MuiSnackbarContent-root {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;