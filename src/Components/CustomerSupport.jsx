import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const CustomerSupport = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#000', // Black background
        color: '#FFD700', // Gold text color
        textAlign: 'center', // Center align all content
        padding: { xs: 4, sm: 6 }, // Adjust padding for mobile and desktop
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          fontSize: { xs: '1.5rem', sm: '2rem' }, // Responsive font size
          marginBottom: 2,
          textAlign: { xs: 'left', md: 'left',lg:'center' },
        }}
      >
        Reddy Anna Customer Support
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="h6"
        sx={{
          marginBottom: 4, fontWeight: 'bold', lineHeight: 1.5, borderColor: '#FFD700',
          color: '#FFF',
          textAlign: { xs: 'left', md: 'left',lg:'center' },
        }}
      >
        Get in touch with REDDY ANNA for any Queries, Emergencies, Feedback, <br /> or Complaints. We are
        here to help you 24/7 with our online services.
      </Typography>

      {/* Contact Button */}
      <Button
        variant="outlined"
        sx={{
          borderColor: '#FFD700',
          color: '#FFD700',
          borderRadius: 4,
          padding: '10px 20px',
          width: "40%",
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
    </Box>
  );
};

export default CustomerSupport;
