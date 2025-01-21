import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#000',
        color: '#FFD700',
        padding: { xs: 4, md: 6 },
        textAlign: 'center',
        borderTop: '1px solid #FFD700',
        borderBottom: '1px solid #FFD700',
      }}
    >
      {/* Links Section */}
      <Grid container spacing={2} justifyContent="center" sx={{ marginBottom: 4 }}>
        {[
          'About Us',
          'Contact',
          'Sports ID',
          'Privacy Policy',
          'Terms and Conditions',
          'Disclaimer',
          'Blog',
        ].map((item, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <Button
              variant="outlined"
              sx={{
                color: '#FFD700',
                borderColor: '#FFD700',
                borderRadius: 0,
                fontSize: '14px',
                padding: '6px 12px',
                '&:hover': {
                  backgroundColor: '#FFD700',
                  color: '#000',
                },
              }}
            >
              {item}
            </Button>
          </Grid>
        ))}
      </Grid>

      {/* Social Media Section */}
      <Typography variant="body1" sx={{ marginBottom: 2 }}>
        Follow us on social media
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 2,
          marginBottom: 4,
        }}
      >
        <TelegramIcon sx={{ fontSize: 40, color: '#00BFFF', cursor: 'pointer' }} />
        <PinterestIcon sx={{ fontSize: 40, color: '#E60023', cursor: 'pointer' }} />
        <WhatsAppIcon sx={{ fontSize: 40, color: '#25D366', cursor: 'pointer' }} />
        <InstagramIcon sx={{ fontSize: 40, color: '#E1306C', cursor: 'pointer' }} />
      </Box>

      {/* Copyright Section */}
      <Typography
        variant="body2"
        sx={{
          color: '#fff',
          fontSize: '12px',
          borderTop: '1px solid #FFD700',
          paddingTop: 2,
          marginTop: 4,
        }}
      >
        Copyright © 2024{' '}
        <span style={{ color: '#FFD700', fontWeight: 'bold' }}>Reddy Anna Book Official</span>. All
        rights reserved. Unauthorized reproduction or distribution of any content on this website
        is prohibited.
      </Typography>
    </Box>
  );
};

export default Footer;
