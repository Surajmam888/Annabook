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
      }}
    >
      {/* Divider */}
      <Box
        sx={{
          borderTop: '1px solid #FFD700',
          marginBottom: 4,
        }}
      />

      {/* Links Section */}
      <Grid container spacing={2} justifyContent="center">
        {/* Left Column */}
        <Grid item xs={12} sm={4}>
          <Box display="flex" flexDirection="column" gap={2}>
            <Button
              variant="outlined"
              sx={{
                color: '#FFD700',
                borderColor: '#FFD700',
                borderRadius: 0,
                '&:hover': { backgroundColor: '#FFD700', color: '#000' },
              }}
            >
              About Us
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: '#FFD700',
                borderColor: '#FFD700',
                borderRadius: 0,
                '&:hover': { backgroundColor: '#FFD700', color: '#000' },
              }}
            >
              Contact
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: '#FFD700',
                borderColor: '#FFD700',
                borderRadius: 0,
                '&:hover': { backgroundColor: '#FFD700', color: '#000' },
              }}
            >
              Sports ID
            </Button>
          </Box>
        </Grid>

        {/* Center Column */}
        <Grid item xs={12} sm={4}>
          <Box display="flex" flexDirection="column" gap={2}>
            <Button
              variant="outlined"
              sx={{
                color: '#FFD700',
                borderColor: '#FFD700',
                borderRadius: 0,
                '&:hover': { backgroundColor: '#FFD700', color: '#000' },
              }}
            >
              Privacy Policy
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: '#FFD700',
                borderColor: '#FFD700',
                borderRadius: 0,
                '&:hover': { backgroundColor: '#FFD700', color: '#000' },
              }}
            >
              Terms and Conditions
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: '#FFD700',
                borderColor: '#FFD700',
                borderRadius: 0,
                '&:hover': { backgroundColor: '#FFD700', color: '#000' },
              }}
            >
              Disclaimer
            </Button>
          </Box>
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} sm={4}>
          <Box display="flex" flexDirection="column" gap={2}>
            <Button
              variant="outlined"
              sx={{
                color: '#FFD700',
                borderColor: '#FFD700',
                borderRadius: 0,
                '&:hover': { backgroundColor: '#FFD700', color: '#000' },
              }}
            >
              Blog
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* Social Media Section */}
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="body1" sx={{ marginBottom: 2 }}>
          Follow us on social media
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 3,
            marginBottom: 4,
          }}
        >
          <TelegramIcon sx={{ fontSize: 40, color: '#00BFFF', cursor: 'pointer' }} />
          <PinterestIcon sx={{ fontSize: 40, color: '#E60023', cursor: 'pointer' }} />
          <WhatsAppIcon sx={{ fontSize: 40, color: '#25D366', cursor: 'pointer' }} />
          <InstagramIcon sx={{ fontSize: 40, color: '#E1306C', cursor: 'pointer' }} />
        </Box>
      </Box>

      {/* Divider */}
      <Box
        sx={{
          borderTop: '1px solid #FFD700',
          marginBottom: 4,
        }}
      />

      {/* Copyright Section */}
      <Typography
        variant="body2"
        sx={{
          color: '#fff',
          fontSize: '12px',
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
