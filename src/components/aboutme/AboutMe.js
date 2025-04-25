import React from 'react';
import { Box, Typography, Avatar, IconButton, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Botoncito from '../sign/Botoncito';

const AboutMe = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                justifyContent: 'center',
                padding: 4,
                gap: 4,
                color: 'white',
                borderRadius: 2,
            }}
        >
            {/* Avatar Section */}
            <Avatar
                alt="Your Name"
                src="https://media.licdn.com/dms/image/v2/C4D03AQHry6nWuGw24Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1668020700468?e=1750896000&v=beta&t=Wikk0RmRXHpkIoOe4cvy1xUoa2J6i1AzKdvZ2fDvLhY" // Replace with your actual image path
                sx={{
                    width: 150,
                    height: 150,
                    border: '3px solid white',
                    boxShadow: '0 0 15px rgba(255, 255, 255, 0.3)',
                }}
            />

            {/* About Me Text Section */}
            <Box sx={{ maxWidth: 500 }}>
                <Typography variant="h4" sx={{ mb: 1 }}>
                    About Me
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    Hi! I'm Jole, a passionate Full Stack Web Developer with a love
                    for building beautiful and functional applications. I enjoy working with modern
                    tech like React, Node.js, and blockchain technologies.
                </Typography>

                <Box sx={{ display: 'flex', gap: 2 }}>
                    <IconButton
                        component={Link}
                        href="https://www.linkedin.com/in/jole-baudracco"
                        target="_blank"
                        rel="noopener"
                        sx={{
                            animation: 'spinColor 5s infinite linear',
                            color: 'white',
                            '&:hover': { transform: 'scale(1.2)' },
                        }}
                    >
                        <LinkedInIcon sx={{ fontSize: 40 }} />
                    </IconButton>
                    <IconButton
                        component={Link}
                        href="https://twitter.com/yole126"
                        target="_blank"
                        rel="noopener"
                        sx={{
                            animation: 'spinColor 5s infinite linear',
                            color: 'white',
                            '&:hover': { transform: 'scale(1.2)' },
                        }}
                    >
                        <TwitterIcon sx={{ fontSize: 40 }} />
                    </IconButton>

                    {/* CSS Keyframes */}
                    <style>
                        {`
      @keyframes spinColor {
        0% {
          transform: rotate(0deg);
          color: #ffffff;
        }
        25% {
          color: #00acee;
        }
        50% {
          transform: rotate(180deg);
          color: #0077b5;
        }
        75% {
          color: #1da1f2;
        }
        100% {
          transform: rotate(360deg);
          color: #ffffff;
        }
      }
    `}
                    </style>
                </Box>

                <Botoncito text={"Este es mi about"} />
            </Box>
        </Box>
    );
};

export default AboutMe;
