import React from 'react'
import Sign from '../sign/Sign'
import Botoncito from '../sign/Botoncito'
import { Box, width } from '@mui/system'
import { Typography } from '@mui/material'

const Home = () => {
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                |   <Typography sx={{ color: 'white' }}>Home de Jole</Typography>
            </Box>
        </>
    )
}

export default Home