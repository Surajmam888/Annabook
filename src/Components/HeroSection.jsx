import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import ima_anna from '../assets/images/Home/img_anna.png';
import back_anna from '../assets/images/Home/back_anna.avif';

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${back_anna})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        color: '#FFD700',
        padding: { xs: 2, sm: 4 },
      }}>
      <Grid container spacing={4} sx={{ marginTop: 10, padding: { xs: 2, sm: 4 } }}>
        {/* Left Section */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              marginBottom: 2,
              fontSize: { xs: '1.5rem', sm: '2rem' },
              textAlign: { xs: 'left', md: 'left',lg:'left' },
            }}
          >
            Welcome to Reddy Anna Book
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#fff',
              lineHeight: 1.7,
              marginBottom: 4,
              textAlign: { xs: 'left', md: 'left',lg:'left' },
            }}
          >
            India's No.1 sports ID provider since 2010
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#fff',
              lineHeight: 1.7,
              marginBottom: 4,
              textAlign: { xs: 'left', md: 'left',lg:'left' },
            }}
          >
            Do you want to open your cricket ID online but can't find a trustworthy betting platform?
            Here's a Reddy Anna Book for you. This is India's most famous and trusted cricket demo ID
            platform. Reddy Anna Book is India's largest exchange platform, offering fantastic online
            sports betting with a 24-hour withdrawal service.
          </Typography>
          <Button
            variant="outlined"
            sx={{
              borderColor: '#FFD700',
              color: '#FFD700',
              borderRadius: 4,
              padding: '10px 20px',
              width: "70%",
              fontWeight: 'bold',
              marginBottom: "20px",
              '&:hover': {
                backgroundColor: '#65D991',
                color: '#fff',
              },
              '@media (max-width:600px)': {
                width: '100%', // Full width on mobile view
              },
            }}
          >
            Contact us @7777857777
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderColor: '#FFD700',
              color: '#FFD700',
              borderRadius: 4,
              padding: '10px 20px',
              width: "70%",
              fontWeight: 'bold',
              marginBottom: "20px",
              '&:hover': {
                backgroundColor: '#65D991',
                color: '#fff',
              },
              '@media (max-width:600px)': {
                width: '100%', // Full width on mobile view
              },
            }}
          >
            WhatsApp Us @7797277777
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderColor: '#FFD700',
              color: '#FFD700',
              borderRadius: 4,
              padding: '10px 20px',
              width: "70%",
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#65D991',
                color: '#fff',
              },
              '@media (max-width:600px)': {
                width: '100%', // Full width on mobile view
              },
            }}
          >
            WhatsApp us @7777757777
          </Button>
        </Grid>

        {/* Right Section */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            component="img"
            src={ima_anna}
            alt="Sports Image"
            sx={{
              width: { xs: '100%', sm: '75%', md: '100%' },
              maxWidth: 400,
              borderRadius: 2,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;
