
'use client';
import { Container, Typography, Grid, Paper, Button } from '@mui/material';

export default function AdminDashboard() {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h3" fontWeight="bold" mb={4}>Admin Dashboard</Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 4, textAlign: 'center' }}>
            <Typography variant="h5">Manage Products</Typography>
            <Button variant="contained" sx={{ mt: 2 }}>Add / Edit Products</Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 4, textAlign: 'center' }}>
            <Typography variant="h5">Manage Adoptions</Typography>
            <Button variant="contained" color="secondary" sx={{ mt: 2 }}>View Requests</Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}