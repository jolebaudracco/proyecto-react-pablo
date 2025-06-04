import { Box, Typography, Card, CardMedia, CardContent, Button } from '@mui/material';

function IndividualProject({data}){
    return(
        <Card sx={{ bgcolor: 'white', borderRadius: 3, boxShadow: 6 }}>
                            <CardMedia
                                component="img"
                                image={data.image}
                                alt={data.title}
                                height="180"
                            />
                            <CardContent>
                                <Typography variant="h6">{data.title}</Typography>
                                <Typography variant="body2">{data.description}</Typography>
                                <Button>Github</Button>
                            </CardContent>
                        </Card>
    )
}

export default IndividualProject;