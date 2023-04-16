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
      variant='filled'
      multiline
      maxRows={6}
      sx={{
        m: 3,
        color: "white",
        backgroundColor: "#343A40",
      }}
      label="Message"
    >
    </TextField>
  )
}
