/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Checkbox } from "@mui/material";

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
