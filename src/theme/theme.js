'use client';
import { createTheme } from '@mui/material/styles';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: poppins.style.fontFamily,
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  palette: {
    primary: {
      main: '#FF6B6B', // Added quotes here
      contrastText: '#fff',
    },
    secondary: {
      main: '#4ECDC4', // Added quotes here
      contrastText: '#fff',
    },
    background: {
      default: '#F7FFF7', // Added quotes here
      paper: '#ffffff',    // Added quotes here
    },
    text: {
      primary: '#2D3436',  // Added quotes here
      secondary: '#636E72', // Added quotes here
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          padding: '10px 24px',
          boxShadow: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0px 10px 30px rgba(0,0,0,0.05)',
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0px 15px 35px rgba(0,0,0,0.1)',
          },
        },
      },
    },
  },
});

export default theme;