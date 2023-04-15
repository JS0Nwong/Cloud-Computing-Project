import React from "react";
import { Box } from "@mui/material";
import { colors } from "../styles/colors";
import Serverlist from "./Serverlist";
import Chats from "./Chats";

export default function Sidebar() {
  return (
    <Box sx={{ flex: 1, display: "flex", backgroundColor: colors.ddBase }}>
      <Box sx={{ display: "flex", width: "100%" }}>
        <Serverlist />
        <Chats />
      </Box>
    </Box>
  );
}
