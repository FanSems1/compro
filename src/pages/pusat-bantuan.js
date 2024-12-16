import React from 'react';
import { Container, Grid, Typography, Box, Button, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Header from './Section/Header';
import Heads from 'Utilis/Heads';
import Footer from './Section/Footer';
import WhatsAppIcon from 'Assets/about/waicon.png';
import PhoneIcon from 'Assets/about/telpicon.png';
import EmailIcon from 'Assets/about/mailicon.png';
import CSPhoto from '../Assets/Pict/gambarcs.png';
import Kontak from './Section/Kontak';
import FloatingButton from 'Components/FloatingButton';
import WhatsAppButton from 'Components/WhatsAppButton';
import Image from 'next/image';

const PusatBantuan = () => {
  const theme = useTheme();

  return (
    <>
      <Heads />
      <Header />
      <Container maxWidth="xl" sx={{ mt: 15, mb: 8 }}>
        {/* Banner and Text Section */}
        <Grid container spacing={15} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              sx={{ mb: 2, color: theme.palette.primary.main, fontWeight: 'bold', ml: 2 }}
            >
              Temukan info menarik yang telah kami sajikan untuk anda.
            </Typography>
            <Typography
              variant="body1"
              sx={{ ml: 2, color: theme.palette.text.secondary }}
            >
              Kami memiliki banyak solusi untuk membantu anda meraih visi dan misi bisnis anda secara profesional.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Image
              src={CSPhoto}
              alt="Deskripsi gambar"
              display='block'
              height={330}
              width={620}
              objectFit='cover'
            />
          </Grid>
        </Grid>

        {/* Contact Information Section */}
        <Grid container spacing={4} justifyContent="center" sx={{ mb: 3, mt: 3 }}>
          {/* Hotline */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                border: `1px solid ${theme.palette.grey[300]}`,
                borderRadius: '10px',
                padding: 4,
                backgroundColor: '#E7E9F5',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                height: '100%',
              }}
            >
              <Image
                src={PhoneIcon}
                alt="Phone Icon"
                width={70}
                height={70}
                color='#0F2296'
              />
              <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold' }}>Hotline</Typography>
              <Typography variant="body1" sx={{ mt: 1, font: 'Montserrat', color: '#0F2296', fontWeight: 600, }}>(021) 599201534</Typography>
              <Button variant="contained" sx={{ mt: 2, backgroundColor: '#0F2296', color: 'white', '&:hover': { backgroundColor: '#0F2296' } }}>
                Telepon Kami
              </Button>
            </Box>
          </Grid>

          {/* WhatsApp */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                border: `1px solid ${theme.palette.grey[300]}`,
                backgroundColor: '#E7E9F5',
                borderRadius: '10px',
                padding: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                height: '100%',
              }}
            >
              <Image
                src={WhatsAppIcon}
                alt="WhatsApp Icon"
                width={70}
                height={70}
                color='theme.palette.primary.main'
              />
              <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold' }}>WhatsApp</Typography>
              <Typography variant="body1" sx={{ mt: 1, font: 'Montserrat', color: '#0F2296', fontWeight: 600, }}>+62 812 9876 5432</Typography>
              <Button variant="contained" sx={{ mt: 2, backgroundColor: '#0F2296', color: 'white', '&:hover': { backgroundColor: '#0F2296' } }}>
                Chat Kami
              </Button>
            </Box>
          </Grid>

          {/* Email */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                border: `1px solid ${theme.palette.grey[300]}`,
                borderRadius: '10px',
                padding: 4,
                backgroundColor: '#E7E9F5',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                height: '100%',
              }}
            >
              <Image
                src={EmailIcon}
                alt="Email Icon"
                width={70}
                height={70}
                color='theme.palette.primary.main'
              />
              <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold' }}>Email</Typography>
              <Typography variant="body1" sx={{ mt: 1, font: 'Montserrat', color: '#0F2296', fontWeight: 600, }}>cs@eureka.com</Typography>
              <Button variant="contained" sx={{ mt: 2, backgroundColor: '#0F2296', color: 'white', '&:hover': { backgroundColor: '#0F2296' } }}>
                Kirim Email
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer />
      <FloatingButton />
      <WhatsAppButton />
    </>
  );
};

export default PusatBantuan;
