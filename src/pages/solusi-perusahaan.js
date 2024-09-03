import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleIcon from '@mui/icons-material/People';
import SupportIcon from '@mui/icons-material/Support';
import Header from '../Section/Header';
// import Footer from '../Section/Footer';
import Heads from '../Utilis/Heads';
import FooterOne from 'Components/Footer/FooterOne';
import FooterTwo from 'Components/Footer/FooterTwo';
import FooterThree from 'Components/Footer/FooterThree';
import BottomFooter from 'Components/Footer/BottomFooter';

const SolusiPerusahaan = () => {
  const theme = useTheme();

  const solutions = [
    {
      title: 'Optimalisasi Bisnis',
      description: 'Kami membantu perusahaan mengoptimalkan operasi dengan teknologi terbaru, meningkatkan efisiensi dan mengurangi biaya.',
      icon: <TrendingUpIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
    },
    {
      title: 'Manajemen Sumber Daya',
      description: 'Solusi kami memungkinkan pengelolaan sumber daya manusia dan material dengan lebih efektif untuk pertumbuhan jangka panjang.',
      icon: <PeopleIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
    },
    {
      title: 'Dukungan 24/7',
      description: 'Tim kami siap mendukung kebutuhan bisnis Anda kapan saja dengan layanan yang responsif dan profesional.',
      icon: <SupportIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
    },
    {
      title: 'Inovasi Teknologi',
      description: 'Kami berinovasi dengan teknologi terbaru untuk memastikan bisnis Anda tetap kompetitif dan relevan di pasar yang berkembang pesat.',
      icon: <BusinessCenterIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
    },
  ];

  return (
    <Container maxWidth="ld" sx={{ mt: 10, mb: 10 }}>
        <Heads />
        <Header />
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold', textAlign: 'center', color: theme.palette.primary.main }}>
        Solusi untuk Perusahaan
      </Typography>
      <Typography variant="body1" sx={{ mb: 8, textAlign: 'center', color: theme.palette.text.secondary }}>
        Kami menghadirkan solusi bisnis yang dirancang khusus untuk membantu perusahaan mencapai tujuan mereka dengan cara yang efisien dan efektif.
      </Typography>
      <Grid container spacing={4}>
        {solutions.map((solution, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ textAlign: 'center', p: 3, boxShadow: 3 }}>
              {solution.icon}
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: theme.palette.primary.main, mb: 2 }}>
                  {solution.title}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.palette.text.primary }}>
                  {solution.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box textAlign="center" sx={{ mt: 8 }}>
        <Button variant="contained" color="primary" href="/pusat-bantuan" sx={{ px: 4 }}>
          Hubungi Kami
        </Button>
      </Box>
      <Footer />
    </Container>
  );
};

const Footer = () => {
    return (
      <Container maxWidth={false} disableGutters as="footer" sx={{ pt: "5em", backgroundColor: '#f4f4f4' }}>
        <Grid container spacing={{ xl: 13, lg: 10, md: 5, sm: 10, xs: 5 }}>
          <Grid item md={3} sm={6} xs={12}>
            <FooterOne />
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <FooterTwo />
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <FooterThree />
          </Grid>
          <Grid item md={3} sm={6} xs={12}></Grid>
        </Grid>
        <BottomFooter />
      </Container>
    );
  };

export default SolusiPerusahaan;
