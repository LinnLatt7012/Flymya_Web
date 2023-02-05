import { withStyles } from "@mui/styles";
import { Box, TextField as MuiTextField } from "@mui/material";
import React from "react";
const TextField = withStyles({
  root: {
    fontSize: "16px",
    "& .MuiInputBase-root, fieldset, & .MuiInputBase-root:After, & .MuiInputBase-root:hover,& .Mui-focused .MuiOutlinedInput-notchedOutline":
      {
        borderWidth: "0px",
      },
  },
})(MuiTextField);
export default function CTextInput({
  Icon,
  label,
  name,
  value,
  onChange,
  ...props
}) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        py: 2,
      }}
    >
      {Icon}
      <TextField
        name={name}
        autoComplete="off"
        label={label}
        onChange={onChange}
        {...(value && { value: value })}
        {...props}
        variant="outlined"
      />
    </Box>
  );
}
