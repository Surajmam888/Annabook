import React, { useState } from 'react';
import './Home.css'
import {
  Box,
  Grid,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ima_anna from '../../assets/images/Home/img_anna.png';
import back_anna from '../../assets/images/Home/back_anna.avif';
import logo_anna from '../../assets/images/Home/logo_anna.avif';

const HomePage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navLinks = [
    'HOME',
    'Services',
    'Platforms',
    'About Us',
    'Sports ID',
    'Contact us',
    'Blog',
    'Rules',
  ];

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
      }}
    >
      {/* Navbar */}
      <Box
        sx={{
          position: 'fixed', // Make the navbar fixed
          top: 0,
          right: 0,
          width: '100%', // Ensure it spans the full width
          zIndex: 1000, // Ensure it stays on top of other elements
          backgroundColor: 'rgba(0, 0, 0, 0.8)', // Add a semi-transparent background
          color: '#FFD700',
          padding: { xs: 1, sm: 2 }, // Adjust padding for responsiveness
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid #333',
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
        <Box
            component="img"
            src={logo_anna}
            alt="Sports Image"
            sx={{
              width: { xs: '100%', sm: '75%', md: '100%' },
            //   maxWidth: 400,
            //   borderRadius: 2,
            }}
          />
        </Typography>
        {/* Mobile Menu Icon */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: 'block', sm: 'none' } }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        {/* Desktop Menu */}
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            gap: 2,
          }}
        >
          {navLinks.map((link) => (
            <Typography key={link}>{link}</Typography>
          ))}
        </Box>
      </Box>

      {/* Drawer for Mobile Menu */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250, padding: 2 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navLinks.map((link) => (
              <ListItem button key={link}>
                <ListItemText primary={link} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Grid container spacing={4} sx={{ marginTop: 4 }}>
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
            }}
          >
            Welcome to Reddy Anna Book
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              marginBottom: 2,
              fontSize: { xs: '0.9rem', sm: '1rem' },
            }}
          >
            India's No.1 sports ID provider since 2010
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginBottom: 3,
              fontSize: { xs: '0.8rem', sm: '0.9rem' },
            }}
          >
            Do you want to open your cricket ID online but can't find a trustworthy betting
            platform? Here's a Reddy Anna Book for you. This is India's most famous and trusted
            cricket demo ID platform. Reddy Anna Book is India's largest exchange platform,
            offering fantastic online sports betting with a 24-hour withdrawal service.
          </Typography>
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: '#FFD700',
              color: '#000',
              fontWeight: 'bold',
              '&:hover': { backgroundColor: '#FFC107' },
              marginBottom: 2,
            }}
          >
            Contact us @7777857777
          </Button>
          <Button
            variant="outlined"
            fullWidth
            sx={{
              borderColor: '#FFD700',
              color: '#FFD700',
              fontWeight: 'bold',
              '&:hover': { borderColor: '#FFC107', color: '#FFC107' },
              marginBottom: 2,
            }}
          >
            WhatsApp Us @7797277777
          </Button>
          <Button
            variant="outlined"
            fullWidth
            sx={{
              borderColor: '#FFD700',
              color: '#FFD700',
              fontWeight: 'bold',
              '&:hover': { borderColor: '#FFC107', color: '#FFC107' },
              marginBottom: 2,
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

export default HomePage;
