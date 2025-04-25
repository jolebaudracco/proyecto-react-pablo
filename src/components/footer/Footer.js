import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        bgcolor: '#121212',
        textAlign: 'right',
        py: 2,
        pr: 2
      }}
    >
      <Typography sx={{ color: 'white' }}>© Copyright Jole</Typography>
    </Box>
  )
}

export default Footer
