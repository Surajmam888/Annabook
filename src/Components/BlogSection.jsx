import React from 'react';
import { Box, Typography, Button, Grid, Card, CardMedia, CardContent } from '@mui/material';
import ima_Blog1 from '../assets/images/Blog/Blog1.webp';
import ima_Blog2 from '../assets/images/Blog/Blog2.webp';
import ima_Blog3 from '../assets/images/Blog/Blog3.webp';

// Blog data (mock data, replace with actual API data if needed)
const blogPosts = [
  {
    id: 1,
    title: 'Durbar Rajshahi vs Sylhet Strikers, BPL, Reddy Anna Match Prediction',
    image: ima_Blog1, // Replace with actual image URLs
  },
  {
    id: 2,
    title: 'Sydney Sixers vs Sydney Thunder, BBL T20 - Reddy Anna Match Prediction',
    image: ima_Blog2, // Replace with actual image URLs
  },
  {
    id: 3,
    title: 'Australia vs England, AUS-W vs ENG-W, Today Match Prediction | Reddy Anna',
    image: ima_Blog3, // Replace with actual image URLs
  },
];

const BlogSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#000', // Black background
        color: '#FFD700', // Gold text
        padding: { xs: 4, sm: 6 },
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          fontSize: { xs: '1.5rem', sm: '2rem' }, // Responsive font size
          marginBottom: 2,
        }}
      >
        Reddy Anna Blog
      </Typography>
      {/* Header */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: 'bold',
          fontSize: { xs: '1.2rem', sm: '1.5rem' },
          marginBottom: 2,
        }}
      >
        Read our blog for betting tips, tricks and{' '}
        <Typography component="span" sx={{ fontWeight: 'bold', color: '#FFD700' }}>
          Reddy Anna Match Predictions
        </Typography>{' '}
        here.
      </Typography>

      {/* Blog Button */}
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#FFD700',
          color: '#000',
          fontWeight: 'bold',
          marginBottom: 4,
          '&:hover': {
            backgroundColor: '#FFC107',
          },
          '@media (max-width:600px)': {
            width: '100%', // Full width on mobile view
          },
        }}
      >
        Reddy Anna Blog
      </Button>

      {/* Blog Cards */}
      <Grid container spacing={2}>
        {blogPosts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <Card
              sx={{
                backgroundColor: '#ebcf74',
                color: '#000',
                borderRadius: 2,
              }}
            >
              <CardMedia
                component="img"
                height="auto"
                image={post.image}
                alt={post.title}
                sx={{ borderRadius: '4px 4px 0 0' }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                    textAlign: 'left',
                  }}
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

export default BlogSection;
