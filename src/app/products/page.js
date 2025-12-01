'use client';
import { Container, Grid, Card, CardMedia, CardContent, Typography, Button, TextField, Box, Chip, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { motion } from 'framer-motion';

const products = [
  { id: 1, name: 'Premium Dog Food', price: 45, category: 'Food', img: 'https://images.unsplash.com/photo-1589924691195-41432c84c161?auto=format&fit=crop&w=500&q=60' },
  { id: 2, name: 'Cat Climbing Tree', price: 120, category: 'Toys', img: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?auto=format&fit=crop&w=500&q=60' },
  { id: 3, name: 'Rubber Chew Toy', price: 15, category: 'Toys', img: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=500&q=60' },
  { id: 4, name: 'Bird Cage', price: 85, category: 'Accessories', img: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=500&q=60' },
  { id: 5, name: 'Pet Carrier', price: 55, category: 'Travel', img: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=500&q=60' },
  { id: 6, name: 'Dog Bed', price: 60, category: 'Comfort', img: 'https://images.unsplash.com/photo-1591946614720-90a587da4a36?auto=format&fit=crop&w=500&q=60' },
];

export default function Products() {
  const { addToCart } = useCart();
  const [search, setSearch] = useState('');

  const filteredProducts = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <Container sx={{ py: 8 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 6, flexWrap: 'wrap', gap: 2 }}>
        <Typography variant="h4" fontWeight="bold" sx={{ color: 'text.primary' }}>
          Shop Premium Products
        </Typography>
        <TextField 
          variant="outlined" 
          placeholder="Search for toys, food..." 
          size="small" 
          onChange={(e) => setSearch(e.target.value)}
          sx={{ bgcolor: 'background.paper', borderRadius: 1 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* Grid container without the deprecated 'item' prop */}
      <Grid container spacing={4}>
        {filteredProducts.map((product) => (
          <Grid xs={12} sm={6} md={3} key={product.id}>
            <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover={{ y: -10 }}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia 
                  component="img" 
                  height="220" 
                  image={product.img} 
                  alt={product.name} 
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                      <Chip label={product.category} size="small" sx={{ bgcolor: '#e0f2f1', color: '#00695c', fontWeight: 600 }} />
                      <Typography variant="h6" fontWeight="bold" color="primary">${product.price}</Typography>
                    </Box>
                    <Typography variant="h6" fontWeight="600" gutterBottom>{product.name}</Typography>
                  </Box>
                  <Button 
                    fullWidth 
                    variant="contained" 
                    color="primary" 
                    sx={{ mt: 2, borderRadius: 2 }}
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
      
      {filteredProducts.length === 0 && (
        <Box textAlign="center" py={10}>
          <Typography variant="h6" color="text.secondary">No products found matching{search}</Typography>
        </Box>
      )}
    </Container>
  );
}