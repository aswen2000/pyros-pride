/* eslint-disable react/jsx-props-no-spreading */
import { styled } from "@mui/material/styles";
import { CardContent, Checkbox } from "@mui/material";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import React from "react";

export const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: 48 * 4.5 + 8,
            width: 250,
        },
    },
};

export const videoSizeOpts = {
    height: "202",
    width: "360",
};

export const CardContentNoPadding = styled(CardContent)(`
padding: 0;
&:last-child {
padding-bottom: 0;
}
`);

export function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,
    };
}

export const CustomColorCheckbox = withStyles({
    root: {
        color: "#000000",
        "&$checked": {
            color: "#2196f3",
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

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
});
