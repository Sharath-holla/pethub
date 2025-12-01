'use client';
import { Box, Container, Typography, Grid, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  return (
    <Box sx={{ bgcolor: 'secondary.main', color: 'white', py: 6, mt: 8 }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>PetHub</Typography>
            <Typography variant="body2">
              Your one-stop destination for all things pets. Adoption, care, and shopping made easy.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>Quick Links</Typography>
            <Typography variant="body2" display="block" gutterBottom>About Us</Typography>
            <Typography variant="body2" display="block" gutterBottom>Privacy Policy</Typography>
            <Typography variant="body2" display="block" gutterBottom>Terms of Service</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>Follow Us</Typography>
            <Box>
              <IconButton color="inherit"><FacebookIcon /></IconButton>
              <IconButton color="inherit"><TwitterIcon /></IconButton>
              <IconButton color="inherit"><InstagramIcon /></IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}