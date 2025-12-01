'use client';
import { AppBar, Toolbar, Typography, Button, IconButton, Badge, Box, Container, Drawer, List, ListItem, ListItemText, Divider, Stack } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PetsIcon from '@mui/icons-material/Pets';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useSession, signOut } from 'next-auth/react';
import { useState } from 'react';

export default function Navbar() {
  const { cart, toggleCart } = useCart();
  const { data: session } = useSession();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Shop', path: '/products' },
    { title: 'Doctors', path: '/doctors' },
    { title: 'Adopt', path: '/adopt' },
  ];

  return (
    <>
      {/* POSITION STICKY MAKES IT STAY AT THE TOP */}
      <AppBar position="sticky" sx={{ bgcolor: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)', color: 'text.primary', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            
            {/* LOGO */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, textDecoration: 'none', cursor: 'pointer' }} component={Link} href="/">
              <PetsIcon color="primary" fontSize="large" />
              <Typography variant="h5" sx={{ fontWeight: 800, color: 'primary.main', letterSpacing: '-0.5px' }}>
                PetHub
              </Typography>
            </Box>

            {/* DESKTOP MENU - VISIBLE ALL THE TIME */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
              {navLinks.map((link) => (
                <Button 
                  key={link.title} 
                  component={Link} 
                  href={link.path}
                  sx={{ 
                    color: 'text.primary', 
                    fontSize: '1rem',
                    fontWeight: link.title === 'Adopt' || link.title === 'Doctors' ? 700 : 500, // Make Adopt/Doctors bolder
                    '&:hover': { color: 'primary.main', bgcolor: 'transparent' }
                  }}
                >
                  {link.title}
                </Button>
              ))}

              {/* AUTH BUTTONS */}
              {session?.user?.role === 'admin' && (
                <Button component={Link} href="/admin" color="error" variant="outlined" size="small">Admin</Button>
              )}

              {session ? (
                <Button variant="outlined" color="primary" onClick={() => signOut()} size="small" sx={{ ml: 2 }}>Logout</Button>
              ) : (
                <Button variant="contained" color="primary" component={Link} href="/login" size="small" sx={{ ml: 2, boxShadow: 'none' }}>Login</Button>
              )}

              {/* CART ICON */}
              <IconButton onClick={toggleCart(true)} sx={{ ml: 1 }}>
                <Badge badgeContent={cart.length} color="error">
                  <ShoppingCartIcon color="action" />
                </Badge>
              </IconButton>
            </Box>

            {/* MOBILE MENU ICON */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 2 }}>
              <IconButton onClick={toggleCart(true)}>
                <Badge badgeContent={cart.length} color="error">
                  <ShoppingCartIcon color="action" />
                </Badge>
              </IconButton>
              <IconButton onClick={handleDrawerToggle} color="primary">
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* MOBILE DRAWER MENU */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <Box sx={{ width: 250, p: 2 }} onClick={handleDrawerToggle}>
          <Typography variant="h6" fontWeight="bold" sx={{ mb: 2, color: 'primary.main' }}>Menu</Typography>
          <Divider sx={{ mb: 2 }} />
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.title} disablePadding>
                <Button fullWidth component={Link} href={link.path} sx={{ justifyContent: 'flex-start', py: 1.5, color: 'text.primary' }}>
                  {link.title}
                </Button>
              </ListItem>
            ))}
            <Divider sx={{ my: 1 }} />
            {session ? (
              <Button fullWidth variant="outlined" color="error" onClick={() => signOut()}>Logout</Button>
            ) : (
              <Button fullWidth variant="contained" onClick={() => window.location.href='/login'}>Login</Button>
            )}
          </List>
        </Box>
      </Drawer>
    </>
  );
}