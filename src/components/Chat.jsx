import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import VideocamIcon from "@mui/icons-material/Videocam";
import MessageInput from "./MessageInput";
import { colors } from "../styles/colors";
import { AuthContext } from "../context/AuthProvider";
import { SignOutButton } from "../components/SignOutButton";

export default function Chat() {
  const { username } = useContext(AuthContext);

  return (
    <Box
      sx={{
        flex: 5,
        position: "relative",
        backgroundColor: colors.base,
        display: "flex",
        flexDirection: "column",
        overflow: "auto",
        width: "100%",
      }}
    >
      <Box
        sx={{
          backgroundColor: colors.base,
          p: 2,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography>{username}</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: 125,
          }}
        >
          <PhoneIcon />
          <VideocamIcon />
          <SignOutButton />
        </Box>
      </Box>
      <MessageInput />
    </Box>
  );
}
