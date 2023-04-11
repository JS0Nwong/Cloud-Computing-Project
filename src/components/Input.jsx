import React from 'react'
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import Avatar from "@mui/material/Avatar"
import TextField from '@mui/material/TextField'

export default function Input() {
  return (
    <TextField size='small'
    sx={{
      m: 3,
      position: "fixed",
      bottom: 0,
    }}
    label="Message"
    >
    </TextField>
  )
}
