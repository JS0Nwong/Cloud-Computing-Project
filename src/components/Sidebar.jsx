import React from 'react'
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import Avatar from "@mui/material/Avatar"

import Serverlist from './Serverlist'
import Chats from './Chats'

export default function Sidebar() {
  return (
    <Box sx={{flex: 1, display: "flex", backgroundColor: "blue"}}>
        <Box sx={{display: "flex", width: "100%"}}>
            <Serverlist />
            <Chats />
        </Box>
    </Box>
  )
}
