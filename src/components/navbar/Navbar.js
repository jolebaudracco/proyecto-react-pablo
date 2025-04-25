import { Box, Typography } from '@mui/material';
import React from 'react';

const Navbar = ({ sendValueToParent }) => {
    const handleClick = (numero) => {
        sendValueToParent(numero);
    };

    const navItems = ['Home', 'About Me', 'Projects', 'Contact'];

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                backgroundColor: '#121212',
                boxShadow: '0 4px 12px rgba(255, 255, 255, 0.1)',
                alignItems: 'center',
                padding: '10px 20px',
                position: 'sticky',
                top: 0,
                zIndex: 10,
                marginBottom: '20px',
            }}
        >
            {/* Logo or Image */}
            <Box
                sx={{
                    width: '30%',
                    display: 'flex',
                    alignItems: 'center',
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                }}
            >
                Imagen
            </Box>

            {/* Navigation Links */}
            <Box
                sx={{
                    width: '70%',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    gap: 4,
                }}
            >
                {navItems.map((item, index) => (
                    <Typography
                        key={item}
                        onClick={() => handleClick(index)}
                        sx={{
                            color: '#fff',
                            fontWeight: 500,
                            cursor: 'pointer',
                            position: 'relative',
                            transition: 'color 0.3s ease',
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                width: '0%',
                                height: '2px',
                                bottom: '-4px',
                                left: 0,
                                backgroundColor: '#fff',
                                transition: 'width 0.3s ease',
                            },
                            '&:hover': {
                                color: '#f0f0f0',
                                '&::after': {
                                    width: '100%',
                                },
                            },
                        }}
                    >
                        {item}
                    </Typography>
                ))}
            </Box>
        </Box>
    );
};

export default Navbar;
