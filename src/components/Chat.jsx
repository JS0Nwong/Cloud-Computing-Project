import React from 'react'
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import Avatar from "@mui/material/Avatar"
import Paper from "@mui/material/Paper"

import PhoneIcon from '@mui/icons-material/Phone';
import VideocamIcon from '@mui/icons-material/Videocam';

import Input from "./Input"

export default function Chat() {
  return (
    <Box sx={{
      flex: 5,
      backgroundColor: "#343A40",
      display: "flex",
      flexDirection: "column",
      overflow: "auto",
    }}>
      <Paper elevation={2} sx= {{
        backgroundColor: "#2a3036",
        borderRadius: "0px 0px 0px 0px",
      }}>
        <Box sx={{
          p: 2,
          display: "flex",
          justifyContent: "space-between",
          color: "white",
        }}>
          <Typography>Username</Typography>
          <Box sx={{
            display: "flex",
            justifyContent: "space-between",
            width: 70
          }}>
            <PhoneIcon />
            <VideocamIcon />
          </Box>
        </Box>
      </Paper>

      {/* CHAT MESSAGES */}
      <Box sx = {{height: "100%"}}>

      </Box>

      {/* USER MESSAGE INPUT  */}
      <Input />
    </Box>
  )
}
