import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Button } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const projectData = [
    {
        title: 'Yelp Camp',
        image: 'https://raw.githubusercontent.com/himanshup/yelp-camp/master/screenshots/image2.png',
        description: 'Description for Yelp Camp',
        url: ""
    },
    {
        title: 'Project 2',
        image: '/images/project2.jpg',
        description: 'Description for Project 2.',
    },
    {
        title: 'Yelp Camp',
        image: 'https://raw.githubusercontent.com/himanshup/yelp-camp/master/screenshots/image2.png',
        description: 'Description for Yelp Camp',
        url: ""
    },
    {
        title: 'Project 2',
        image: '/images/project2.jpg',
        description: 'Description for Project 2.',
    }, {
        title: 'Yelp Camp',
        image: 'https://raw.githubusercontent.com/himanshup/yelp-camp/master/screenshots/image2.png',
        description: 'Description for Yelp Camp',
        url: ""
    },
    {
        title: 'Project 2',
        image: '/images/project2.jpg',
        description: 'Description for Project 2.',
    }, {
        title: 'Yelp Camp',
        image: 'https://raw.githubusercontent.com/himanshup/yelp-camp/master/screenshots/image2.png',
        description: 'Description for Yelp Camp',
        url: ""
    },
    {
        title: 'Project 2',
        image: '/images/project2.jpg',
        description: 'Description for Project 2.',
    },
];

const Projects = () => {
    return (
        <Box sx={{ py: 5, color: 'white' }}>
            <Typography variant="h4" align="center" gutterBottom>
                Projects
            </Typography>

            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                loop={true}
                coverflowEffect={{
                    rotate: 30,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                modules={[EffectCoverflow, Pagination]}

            >
                {projectData.map((project, index) => (
                    <SwiperSlide key={index} style={{ width: 300 }}>
                        <Card sx={{ bgcolor: 'white', borderRadius: 3, boxShadow: 6 }}>
                            <CardMedia
                                component="img"
                                image={project.image}
                                alt={project.title}
                                height="180"
                            />
                            <CardContent>
                                <Typography variant="h6">{project.title}</Typography>
                                <Typography variant="body2">{project.description}</Typography>
                                <Button>Github</Button>
                            </CardContent>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default Projects;
