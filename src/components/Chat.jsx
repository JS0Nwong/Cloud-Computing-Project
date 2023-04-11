import React from 'react'
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import Avatar from "@mui/material/Avatar"

import PhoneIcon from '@mui/icons-material/Phone';
import VideocamIcon from '@mui/icons-material/Videocam';

import Input from "./Input"

export default function Chat() {
  return (
    <Box sx={{
      flex: 5,
      backgroundColor: "orange",
      display: "flex",
      flexDirection: "column",
      overflow: "auto",
    }}>
      <Box sx={{ 
        backgroundColor: "purple",
        p: 2,
        display: "flex",
        justifyContent: "space-between"
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
      <Input />
    </Box>
  )
}
