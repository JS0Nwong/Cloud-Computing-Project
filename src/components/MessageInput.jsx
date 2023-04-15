import React from "react";
import TextField from "@mui/material/TextField";
import { colors } from "../styles/colors";

export default function MessageInput() {
  return (
    <TextField
      size="small"
      sx={{
        position: "absolute",
        width: "100%",
        bottom: 1,
        backgroundColor: colors.dBase,
      }}
      inputProps={{ style: { color: "white" } }}
      multiline
      label="Message"
      variant="standard"
    />
  );
}
