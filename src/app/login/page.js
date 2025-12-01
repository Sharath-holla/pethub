'use client';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Container, TextField, Button, Typography, Paper, Box, Alert } from '@mui/material';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (result.error) {
      setError('Invalid credentials');
    } else {
      router.push('/'); // Redirect to home
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" mb={3}>Login</Typography>
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        <form onSubmit={handleSubmit}>
          <TextField fullWidth label="Email" margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
          <TextField fullWidth type="password" label="Password" margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button fullWidth variant="contained" size="large" type="submit" sx={{ mt: 3 }}>Login</Button>
        </form>
        <Button fullWidth sx={{ mt: 2 }} onClick={() => router.push('/register')}>
          Dont have an account? Register
        </Button>
      </Paper>
    </Container>
  );
}