import React from 'react'
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import Avatar from "@mui/material/Avatar"

import Sidebar from "../components/Sidebar"
import Chat from "../components/Chat"

export default function ChatView() {
  return (
    <Box sx={{
      height: "100vh", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center",
    }}>
      <Box sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        overflow: "hidden",
      }}> 
        <Sidebar />
        <Chat />
      </Box>
    </Box>
  )
}
