'use client';
import { Container, Grid, Card, CardMedia, CardContent, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import { useState } from 'react';

const pets = [
  { id: 1, name: 'Bella', breed: 'Golden Retriever', age: '2 years', img: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=500&q=60' },
  { id: 2, name: 'Luna', breed: 'Siamese Cat', age: '1 year', img: 'https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&w=500&q=60' },
  { id: 3, name: 'Charlie', breed: 'Beagle', age: '3 months', img: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=500&q=60' },
];

export default function Adopt() {
  const [open, setOpen] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);

  const handleOpen = (pet) => {
    setSelectedPet(pet);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom textAlign="center">Adopt a Friend</Typography>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        {pets.map((pet) => (
          <Grid item xs={12} sm={6} md={4} key={pet.id}>
            <Card>
              <CardMedia component="img" height="250" image={pet.img} alt={pet.name} />
              <CardContent>
                <Typography variant="h5" fontWeight="bold">{pet.name}</Typography>
                <Typography color="text.secondary">{pet.breed} • {pet.age}</Typography>
                <Button fullWidth variant="contained" color="secondary" sx={{ mt: 2 }} onClick={() => handleOpen(pet)}>
                  Adopt Me
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Adopt {selectedPet?.name}</DialogTitle>
        <DialogContent>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Fill out the form below to start the adoption process for {selectedPet?.breed}.
          </Typography>
          <TextField autoFocus margin="dense" label="Your Name" fullWidth variant="outlined" />
          <TextField margin="dense" label="Phone Number" fullWidth variant="outlined" />
          <TextField margin="dense" label="Message" multiline rows={3} fullWidth variant="outlined" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} variant="contained">Submit Request</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}