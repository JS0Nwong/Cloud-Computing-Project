import React from "react";
import { Box, Avatar } from "@mui/material";

export default function Serverlist() {
  return (
    <Box
      sx={{
        flex: "1",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        m: 1,
      }}
    >
      <Avatar sx={{ mb: 2, mt: 1 }}>H</Avatar>
      <Avatar sx={{ mb: 2 }}>H</Avatar>
      <Avatar sx={{ mb: 2 }}>H</Avatar>
      <Avatar sx={{ mb: 2 }}>H</Avatar>
    </Box>
  );
}
