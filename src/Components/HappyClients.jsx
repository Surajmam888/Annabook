import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';

const HappyClients = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#000',
        color: '#fff',
        textAlign: 'center',
        padding: { xs: 4, md: 8 },
      }}
    >
      <Typography
        variant="h4"
        sx={{ marginBottom: 2, fontWeight: 'bold', lineHeight: 1.5, color: "#ebcf74",textAlign: { xs: 'left', md: 'left',lg:'center' }, }}
      >
        Reddy Anna: Happy Clients Always Love Us
      </Typography>
      <Typography
        variant="h5"
        sx={{ marginBottom: 4, fontWeight: 'bold', lineHeight: 1.5,textAlign: { xs: 'left', md: 'left',lg:'center' }, }}
      >
        At Reddy Anna Book Official, our commitment to excellence is reflected in the satisfaction of our clients. With a focus on providing top-notch services and a seamless user experience, we take pride in the positive feedback and love from our happy clients.
        Their testimonials are a testament to our dedication to creating a
        platform that not only meets but exceeds their expectations. Join us at{' '}
        <span style={{ fontStyle: 'italic', color: '#FFD700' }}>Reddy Book</span>{' '}
        and experience the joy of online gaming with a community that truly
        loves the experience we provide.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {[
          { value: '40,000+', label: 'Happy Clients' },
          { value: '2 Lakh+', label: 'Application users' },
          { value: '4.7', label: 'Rating' },
        ].map((item, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Box
              sx={{
                width: 200,
                height: 200,
                border: '2px solid #ebcf74',
                borderRadius: '50%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {item.value}
              </Typography>
              <Typography variant="body1">{item.label}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 4,
          marginTop: 6,
        }}
      >
        <Button
          variant="outlined"
          sx={{
            borderColor: '#FFD700',
            color: '#FFF',
            borderRadius: 4,
            width: "30%",
            padding: '8px 16px',
            '&:hover': {
              backgroundColor: '#FFD700',
              color: '#000',
            },
            '@media (max-width:600px)': {
              width: '100%', // Full width on mobile view
            },
          }}
        >
          Open Your Demo Account
        </Button>
        <Button
          variant="outlined"
          sx={{
            borderColor: '#FFD700',
            color: '#FFF',
            borderRadius: 4,
            width: "30%",
            padding: '8px 16px',
            '&:hover': {
              backgroundColor: '#FFD700',
              color: '#000',
            },
            '@media (max-width:600px)': {
              width: '100%', // Full width on mobile view
            },
          }}
        >
          Contact Us Now
        </Button>
      </Box>
      <Box
        sx={{
          backgroundColor: '#000',
          color: '#FFD700',
          textAlign: 'center',
          padding: { xs: 4, md: 6 },
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: 'bold', marginBottom: 3,textAlign: { xs: 'left', md: 'left',lg:'center' }, }}
        >
          Reddy Anna Login - Seamless Access to Cricket, Sports, and Casino Betting
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: '#fff',
            lineHeight: 1.7,
            marginBottom: 4,
            textAlign: { xs: 'left', md: 'left',lg:'center' },  
          }}
        >
          Reddy Anna Login provides seamless access to India's leading online betting
          platforms, including{' '}
          <span style={{ color: '#FFD700', textDecoration: 'underline' }}>
            Laser 247 Login
          </span>
          ,{' '}
          <span style={{ color: '#FFD700', textDecoration: 'underline' }}>
            Cricket99 Login
          </span>
          , and{' '}
          <span style={{ color: '#FFD700', textDecoration: 'underline' }}>
            11xplay Login
          </span>
          . Whether you're betting on cricket, football, or enjoying live casino games, Reddy Anna ensures a secure, fast, and user-friendly experience. With options like Reddy Anna Online Book Login, Reddy Anna Club Login, and the convenient{' '}
          <span style={{ color: '#FFD700', textDecoration: 'underline' }}>
            Reddy Anna App Login
          </span>
          , you can enjoy 24/7 access to exciting gaming and quick withdrawals. Join now and explore the unmatched thrill of betting with{' '}
          <span style={{ fontWeight: 'bold', color: '#FFD700' }}>
            Reddy Anna Book Login
          </span>
          !
        </Typography>
        <Button
          variant="outlined"
          sx={{
            borderColor: '#FFD700',
            color: '#FFD700',
            borderRadius: 4,
            padding: '10px 20px',
            width: "40%",
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
          Reddy Anna Login
        </Button>
      </Box>

    </Box>
  );
};

export default HappyClients;

