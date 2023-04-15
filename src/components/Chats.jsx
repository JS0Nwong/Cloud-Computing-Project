import React from "react";
import { Box, Typography } from "@mui/material";
import Profile from "./Profile";
import { colors } from "../styles/colors";

export default function Chats() {
  return (
    <Box
      sx={{
        backgroundColor: colors.dBase,
        width: "100%",
        p: 2,
        fontWeight: 500,
      }}
    >
      <Typography>Direct Messages</Typography>
      <Box></Box>
    </Box>
  );
}
