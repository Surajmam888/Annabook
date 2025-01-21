import React from 'react';
import {
    Box,
    Grid,
    Typography,
    Button,
    Card,
    CardMedia,
    CardContent,
} from '@mui/material';
import Bet_01 from '../assets/images/Betting/Betting_01.jpg';
import Bet_02 from '../assets/images/Betting/Betting_02.webp';
import Bet_03 from '../assets/images/Betting/Betting_03.webp';

const blogPosts = [
    {
        id: 1,
        title: 'Introduction to the Indian Premier League - Reddy Anna',
        image: Bet_01, // Replace with actual image paths
    },
    {
        id: 2,
        title: "Big Bash League: A Comprehensive Overview of Australia's T20 Tournament",
        image: Bet_02, // Replace with actual image paths
    },
    {
        id: 3,
        title: 'Caribbean Premier League: A Deep Dive into the T20 Tournament',
        image: Bet_03, // Replace with actual image paths
    },
];

const BettingBlog = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#000',
                color: '#FFD700',
                padding: { xs: 2, sm: 4 },
                textAlign: 'center',
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    fontWeight: 'bold',
                    fontSize: { xs: '1.5rem', sm: '2rem' },
                    marginBottom: 2,
                    textAlign: { xs: 'left', md: 'left',lg:'center' },
                }}
            >
                Reddy Anna Betting 101
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 2,textAlign: { xs: 'left', md: 'left',lg:'center' }, }}>
                Read our blog for betting tips, tricks and{' '}
                <Typography
                    component="span"
                    sx={{ color: '#FFD700', fontWeight: 'bold' }}
                >
                    Reddy Anna Tips and Tricks
                </Typography>{' '}
                here.
            </Typography>

            {/* Blog Button */}
            <Button
                variant="outlined"
                sx={{
                    backgroundColor: '#000',
                    color: '#fff',
                    fontWeight: 'bold',
                    marginBottom: 4,
                    '&:hover': { backgroundColor: '#FFC107' },
                    '@media (max-width:600px)': {
                        width: '100%', // Full width on mobile view
                    },
                }}
            >
                Reddy Anna Blog
            </Button>

            {/* Blog Posts */}
            <Grid container spacing={4}>
                {blogPosts.map((post) => (
                    <Grid item xs={12} sm={6} md={4} key={post.id}>
                        <Card
                            sx={{
                                backgroundColor: '#ebcf74',
                                color: '#000',
                                maxWidth: 345,
                                margin: '0 auto',
                                '&:hover': { transform: 'scale(1.05)', transition: '0.3s' },
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="auto"
                                image={post.image}
                                alt={post.title}
                            />
                            <CardContent>
                                <Typography
                                    variant="subtitle1"
                                    sx={{ fontWeight: 'bold', fontSize: '1rem' }}
                                >
                                    {post.title}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default BettingBlog;
