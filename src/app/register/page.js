'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Container, TextField, Button, Typography, Paper, MenuItem, Alert } from '@mui/material';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'user', specialization: '' });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      router.push('/login');
    } else {
      setError('Registration failed. Try again.');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" mb={3}>Register</Typography>
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        <form onSubmit={handleSubmit}>
          <TextField fullWidth label="Name" margin="normal" onChange={(e) => setForm({...form, name: e.target.value})} />
          <TextField fullWidth label="Email" margin="normal" onChange={(e) => setForm({...form, email: e.target.value})} />
          <TextField fullWidth type="password" label="Password" margin="normal" onChange={(e) => setForm({...form, password: e.target.value})} />
          
          <TextField select fullWidth label="Role" margin="normal" value={form.role} onChange={(e) => setForm({...form, role: e.target.value})}>
            <MenuItem value="user">User (Shopper)</MenuItem>
            <MenuItem value="doctor">Doctor</MenuItem>
            <MenuItem value="admin">Admin</MenuItem>
          </TextField>

          {form.role === 'doctor' && (
            <TextField fullWidth label="Specialization (e.g., Surgeon)" margin="normal" onChange={(e) => setForm({...form, specialization: e.target.value})} />
          )}

          <Button fullWidth variant="contained" size="large" type="submit" sx={{ mt: 3 }}>Register</Button>
        </form>
      </Paper>
    </Container>
  );
}