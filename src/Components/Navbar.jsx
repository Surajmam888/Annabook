import React, { useState } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo_anna from '../assets/images/Home/logo_anna.avif';

const Navbar = () => {
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
        position: 'fixed',
        top: 0,
        right: 0,
        width: '100%',
        zIndex: 1000,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        color: '#FFD700',
        padding: { xs: 1, sm: 2 },
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #333',
      }}
    >
      {/* Logo */}
      <Box component="img" src={logo_anna} alt="Logo" sx={{ width: { xs: 80, sm: 120 } ,paddingLeft:"68px"}} />

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

      {/* Desktop Links */}
      <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
        {navLinks.map((link) => (
          <Typography key={link} sx={{ cursor: 'pointer', fontWeight: 'bold' }}>
            {link}
          </Typography>
        ))}
      </Box>

      {/* Drawer for Mobile */}
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
    </Box>
  );
};

export default Navbar;
