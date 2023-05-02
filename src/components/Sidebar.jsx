import React from "react";
import { Box } from "@mui/material";
import { colors } from "../styles/colors";
import Serverlist from "./Serverlist";
import Chats from "./Chats";

export default function Sidebar({ allUsers, triggerChat, chats }) {
  return (
    <Box sx={{ flex: 1, display: "flex", backgroundColor: colors.ddBase }}>
      <Box sx={{ display: "flex", width: "100%" }}>
        {/* <Serverlist /> */}
        <Chats allUsers={allUsers} triggerChat={triggerChat} chats={chats} />
      </Box>
    </Box>
  );
}
