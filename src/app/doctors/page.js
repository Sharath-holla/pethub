'use client';
import { Container, Grid, Card, Avatar, CardContent, Typography, Button, Box } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const doctors = [
  { id: 1, name: 'Dr. Sarah Smith', spec: 'Veterinary Surgeon', time: 'Mon-Fri: 9am - 5pm' },
  { id: 2, name: 'Dr. John Doe', spec: 'Pet Dermatologist', time: 'Mon-Wed: 10am - 4pm' },
  { id: 3, name: 'Dr. Emily Blunt', spec: 'General Vet', time: 'Tue-Sat: 8am - 2pm' },
];

export default function Doctors() {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom textAlign="center">Meet Our Specialists</Typography>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        {doctors.map((doc) => (
          <Grid item xs={12} md={4} key={doc.id}>
            <Card sx={{ textAlign: 'center', p: 3 }}>
              <Avatar sx={{ width: 100, height: 100, mx: 'auto', mb: 2, bgcolor: 'primary.main' }}>
                {doc.name[4]}
              </Avatar>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">{doc.name}</Typography>
                <Typography color="text.secondary" gutterBottom>{doc.spec}</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, my: 2, color: 'text.secondary' }}>
                  <AccessTimeIcon fontSize="small" />
                  <Typography variant="body2">{doc.time}</Typography>
                </Box>
                <Button variant="outlined" fullWidth color="primary">Book Appointment</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}