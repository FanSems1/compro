import React from 'react';
import { Container, Grid, Typography, Box, ButtonBase, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Header from 'Section/Header';
import Heads from 'Utilis/Heads';
import Footer from 'Section/Footer';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import myselfStyles from '../Styles/About/Myselft.styles'; 
import { bantuan } from './Data/pusat-bantuan';

const PusatBantuan = () => {
  const theme = useTheme();

  return (
    <>
      <Heads />
      <Header />
      <Container maxWidth="xl" sx={{ mt: 5, mb: 8 }}>
        {/* Non-dynamic top section */}
        <Grid container spacing={6} alignItems="center" sx={{ mb: 6 }}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                textAlign: 'center',
                overflow: 'hidden',
                borderRadius: '8px',
                boxShadow: 3,
                backgroundImage: 'url(/path/to/large-image.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '400px', // Adjust height as needed
                marginBottom: '1rem',
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ mb: 2, color: theme.palette.primary.main, fontWeight: 'bold' }}>
              Mau cari Studi Kasus yang informatif? Yuk temukannya disini!
            </Typography>
            <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
              Kami memiliki banyak solusi untuk membantu anda meraih visi dan misi bisnis anda secara professional.
            </Typography>
          </Grid>
        </Grid>

        {/* Dynamic sections */}
        {bantuan.map((item, index) => (
          <Grid container spacing={6} alignItems="center" key={index} sx={{ mb: 6 }}>
            <Grid item xs={12} md={6} sx={{ order: index % 2 === 0 ? 1 : 2 }}>
              <Typography
                variant="h4"
                sx={{ mb: 2, color: theme.palette.primary.main, fontWeight: 'bold' }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: theme.palette.text.secondary }}
              >
                {item.isi}
              </Typography>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                mt: 2
              }}>
                <ButtonBase
                  sx={myselfStyles.Button} 
                  href="https://wa.me/yourwhatsappnumber"
                >
                  <WhatsAppIcon />
                  <Typography sx={{ ml: '0.5em' }}>WhatsApp Kami
                  <ArrowForwardTwoToneIcon sx={{ marginLeft: '0.5em' }} />
                  </Typography>
                </ButtonBase>
                <ButtonBase
                  sx={myselfStyles.Button} 
                  href="tel:+yourphonenumber"
                >
                  <PhoneIcon />
                  <Typography sx={{ ml: '0.5em' }}>Telepon Kami
                  <ArrowForwardTwoToneIcon sx={{ marginLeft: '0.5em' }} />
                  </Typography>
                </ButtonBase>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{ order: index % 2 === 0 ? 2 : 1 }}>
              <img
                src={item.image} // Use the image path from data
                alt={item.title}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                }}
              />
            </Grid>
            <Divider sx={{ my: 2 }} />
          </Grid>
        ))}
        <Footer />
      </Container>
    </>
  );
}

export default PusatBantuan;
