'use client';
import { Box, Container, Typography, Button, Grid, Card, CardContent, Accordion, AccordionSummary, AccordionDetails, Avatar, Chip, Paper } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PetsIcon from '@mui/icons-material/Pets';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import WarningIcon from '@mui/icons-material/Warning';
import Link from 'next/link';

const stats = [
  { label: 'Happy Adoptions Today', value: '12', color: '#4ECDC4', icon: <PetsIcon /> },
  { label: 'Meals Donated', value: '150+', color: '#FF6B6B', icon: <FavoriteIcon /> },
  { label: 'Emergency Rescues', value: '5', color: '#ff9f43', icon: <MedicalServicesIcon /> },
];

const faqs = [
  { question: "How does the adoption process work?", answer: "Browse our pets, submit an application form, and our team will schedule a meet-and-greet session." },
  { question: "Do you provide pet insurance?", answer: "Yes! We partner with leading insurance providers to give your new furry friend the best coverage." },
  { question: "Are the pets vaccinated?", answer: "Absolutely. All pets are fully vaccinated, dewormed, and vet-checked before adoption." },
  { question: "Can I return a product?", answer: "We have a 30-day return policy for unopened items. Food items cannot be returned for safety reasons." },
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <Box sx={{ overflowX: 'hidden' }}>
      
      {/* 1. IMPACT TICKER */}
      <Box className="ticker-wrap">
        <div className="ticker-move">
          <span className="ticker-item">🔴 URGENT: 24 Animals injured in road accidents today - Drive Safely!</span>
          <span className="ticker-item">🟢 GOOD NEWS: 8 Puppies found their forever homes this morning!</span>
          <span className="ticker-item">🔵 FACT: 1 in 5 pets get lost—Microchip yours today!</span>
          <span className="ticker-item">🔴 URGENT: 24 Animals injured in road accidents today - Drive Safely!</span>
        </div>
      </Box>

      {/* 2. HERO SECTION */}
      <Box sx={{
        minHeight: '85vh',
        background: 'linear-gradient(135deg, #F7FFF7 0%, #fff0f0 100%)',
        display: 'flex',
        alignItems: 'center',
        position: 'relative'
      }}>
        <Container>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                <Typography variant="h2" sx={{ fontWeight: 800, lineHeight: 1.2, mb: 2, color: '#2D3436' }}>
                  Give Them The <span style={{ color: '#FF6B6B' }}>Love</span> They Deserve
                </Typography>
                <Typography variant="h6" color="text.secondary" sx={{ mb: 4, maxWidth: '90%' }}>
                  From premium food to life-saving medical care. We are more than a shop; we are a community of animal lovers.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Button variant="contained" color="primary" size="large" sx={{ px: 4, py: 1.5, fontSize: '1.1rem' }} component={Link} href="/products">
                    Shop Now
                  </Button>
                  <Button variant="outlined" color="secondary" size="large" sx={{ px: 4, py: 1.5, fontSize: '1.1rem', borderWidth: 2 }} component={Link} href="/adopt">
                    Adopt Now
                  </Button>
                </Box>
                
                <Box sx={{ mt: 5, display: 'flex', gap: 3 }}>
                   <Box>
                     <Typography variant="h4" fontWeight="bold" color="primary">2k+</Typography>
                     <Typography variant="body2" color="text.secondary">Happy Customers</Typography>
                   </Box>
                   <Box>
                     <Typography variant="h4" fontWeight="bold" color="secondary">500+</Typography>
                     <Typography variant="body2" color="text.secondary">Pets Adopted</Typography>
                   </Box>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
              <motion.div className="float-anim" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
                <Box 
                  component="img"
                  src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80"
                  sx={{ width: '100%', borderRadius: '30px 5px 30px 5px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                />
              </motion.div>
              {/* Floating Badge */}
              <Paper sx={{ position: 'absolute', bottom: 40, left: -20, p: 2, borderRadius: 4, display: 'flex', alignItems: 'center', gap: 2, boxShadow: 3 }} className="float-anim">
                <Avatar sx={{ bgcolor: '#ffeaa7' }}>⭐</Avatar>
                <Box>
                  <Typography variant="subtitle2" fontWeight="bold">Top Rated</Typography>
                  <Typography variant="caption">Best Care 2024</Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 3. LIVE IMPACT STATS */}
      <Box sx={{ py: 8, bgcolor: '#2D3436', color: 'white' }}>
        <Container>
          <Grid container spacing={4} justifyContent="center">
            {stats.map((stat, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Box sx={{ textAlign: 'center', p: 3, border: '1px solid rgba(255,255,255,0.1)', borderRadius: 4, bgcolor: 'rgba(255,255,255,0.05)' }}>
                    <Avatar sx={{ bgcolor: stat.color, width: 60, height: 60, mx: 'auto', mb: 2 }}>
                      {stat.icon}
                    </Avatar>
                    <Typography variant="h3" fontWeight="bold" sx={{ color: stat.color }}>{stat.value}</Typography>
                    <Typography variant="h6">{stat.label}</Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
          
          <Box sx={{ mt: 6, p: 3, bgcolor: '#e17055', borderRadius: 4, display: 'flex', alignItems: 'center', gap: 3, flexWrap: 'wrap' }}>
             <WarningIcon sx={{ fontSize: 50, color: 'white' }} />
             <Box>
               <Typography variant="h5" fontWeight="bold">Awareness Alert</Typography>
               <Typography variant="body1">
                 Did you know? Over <strong>35 animals</strong> were involved in minor accidents in our city yesterday. 
                 Help us create a safer environment. Drive slow in residential areas.
               </Typography>
             </Box>
          </Box>
        </Container>
      </Box>

      {/* 4. CATEGORIES */}
      <Container sx={{ py: 10 }}>
        <Typography variant="h3" textAlign="center" fontWeight="bold" sx={{ mb: 6 }}>
          Everything Your Pet Needs
        </Typography>
        <Grid container spacing={4}>
          {['Fresh Food', 'Fun Toys', 'Medical Care', 'Accessories'].map((item, i) => (
            <Grid item xs={6} md={3} key={i}>
              <motion.div whileHover={{ y: -10 }}>
                <Card sx={{ height: 180, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', bgcolor: i % 2 === 0 ? '#ffeb3b20' : '#00bcd420' }}>
                   <Typography variant="h5" fontWeight="600" color="text.primary">{item}</Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* 5. FAQ SECTION */}
      <Box sx={{ py: 10, bgcolor: '#f1f2f6' }}>
        <Container maxWidth="md">
          <Typography variant="h3" textAlign="center" fontWeight="bold" sx={{ mb: 2 }}>
            Frequently Asked Questions
          </Typography>
          <Typography textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
            Have questions? We have got answers.
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {faqs.map((faq, index) => (
              <Accordion key={index} sx={{ borderRadius: '12px !important', boxShadow: 'none', '&:before': {display: 'none'} }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6" fontWeight="500">{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="text.secondary">{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Container>
      </Box>

      {/* 6. CTA SECTION */}
      <Box sx={{ py: 10, textAlign: 'center', bgcolor: 'primary.main', color: 'white' }}>
        <Container>
          <motion.div initial={{ scale: 0.9 }} whileInView={{ scale: 1 }} transition={{ duration: 0.5 }}>
            <Typography variant="h3" fontWeight="bold" gutterBottom>Ready to find your new best friend?</Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>Visit our shelter today or browse online.</Typography>
            <Button variant="contained" color="secondary" size="large" sx={{ bgcolor: 'white', color: 'primary.main', fontWeight: 'bold' }} component={Link} href="/adopt">
              Adopt a Pet Now
            </Button>
          </motion.div>
        </Container>
      </Box>

    </Box>
  );
}