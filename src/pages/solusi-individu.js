import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import SchoolIcon from '@mui/icons-material/School';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import Header from '../Section/Header';
// import Footer from '../Section/Footer';
import Heads from '../Utilis/Heads';
import FooterOne from 'Components/Footer/FooterOne';
import FooterTwo from 'Components/Footer/FooterTwo';
import FooterThree from 'Components/Footer/FooterThree';
import BottomFooter from 'Components/Footer/BottomFooter';


const SolusiIndividu = () => {
  const theme = useTheme();

  const personalSolutions = [
    {
      title: 'Pengembangan Diri',
      description: 'Kembangkan potensi Anda dengan pelatihan dan program yang dirancang untuk memaksimalkan kemampuan pribadi.',
      icon: <SelfImprovementIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
    },
    {
      title: 'Pendidikan & Pelatihan',
      description: 'Dapatkan akses ke kursus dan pelatihan yang relevan untuk memperdalam pengetahuan dan keterampilan Anda.',
      icon: <SchoolIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
    },
    {
      title: 'Kesehatan & Kebugaran',
      description: 'Kami menawarkan program kesehatan dan kebugaran untuk memastikan Anda tetap bugar dan berenergi dalam aktivitas sehari-hari.',
      icon: <FitnessCenterIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
    },
    {
      title: 'Eksplorasi & Pengalaman Baru',
      description: 'Jelajahi dunia dan temukan pengalaman baru yang memperkaya hidup Anda dengan solusi kami.',
      icon: <TravelExploreIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
    },
  ];

  return (
    <Container maxWidth="ld" sx={{ mt: 10, mb: 10 }}>
          <Heads />
          <Header />
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold', textAlign: 'center', color: theme.palette.primary.main }}>
        Solusi untuk Individu
      </Typography>
      <Typography variant="body1" sx={{ mb: 8, textAlign: 'center', color: theme.palette.text.secondary }}>
        Kami menyediakan solusi untuk pengembangan pribadi, kesehatan, dan pengalaman hidup yang lebih baik, agar Anda dapat meraih kehidupan yang seimbang dan memuaskan.
      </Typography>
      <Grid container spacing={4}>
        {personalSolutions.map((solution, index) => (
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
        <Button variant="contained" color="primary" href="/register" sx={{ px: 4 }}>
          Daftar Sekarang
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

export default SolusiIndividu;
