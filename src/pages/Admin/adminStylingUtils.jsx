/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Checkbox, Chip } from "@mui/material";

export const useStyles = makeStyles({
    root: {
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#e5e5e5",
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#e5e5e5",
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#e5e5e5",
        },
    },
    select: {
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#e5e5e5",
        },
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#e5e5e5",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#e5e5e5",
        },
    },
    icon: {
        color: "#e5e5e5",
    },
});

export const CustomColorCheckbox = withStyles({
    root: {
        color: "#e5e5e5",
        "&$checked": {
            color: "#2196f3",
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

export const ColoredChip = withStyles({
    root: {
        backgroundColor: "#1976D2",
    },
})(Chip);

export function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,
    };
}

export const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: 48 * 4.5 + 8,
            width: 250,
        },
    },
};

export const textFieldStyles = {
    style: {
        color: "#e5e5e5",
    },
};
