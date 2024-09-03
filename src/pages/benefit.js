import React from 'react';
import { Box, Typography, Container, Grid, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';
import SupportIcon from '@mui/icons-material/Support';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import NatureIcon from '@mui/icons-material/Nature'; // Updated icon
import TrendingUpIcon from '@mui/icons-material/TrendingUp'; // New icon for Career Growth
import AccessTimeIcon from '@mui/icons-material/AccessTime'; // New icon for Flexible Hours
import Header from '../Section/Header';
import Heads from '../Utilis/Heads';
import FooterOne from 'Components/Footer/FooterOne';
import FooterTwo from 'Components/Footer/FooterTwo';
import FooterThree from 'Components/Footer/FooterThree';
import BottomFooter from 'Components/Footer/BottomFooter';
import { benefitCardStyles, sectionContainerStyles, headerTypographyStyles } from './Style/benefit';

const BenefitCard = ({ icon, title, description }) => {
  const theme = useTheme();
  return (
    <Box sx={benefitCardStyles(theme)}>
      <Box sx={{ fontSize: 50, mb: 2 }}>
        {icon}
      </Box>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
        {title}
      </Typography>
      <Typography variant="body2">
        {description}
      </Typography>
    </Box>
  );
};

const BenefitsSection = () => {
  const theme = useTheme();

  const benefits = [
    {
      title: 'Amazing Perks',
      description: 'Enjoy exclusive discounts and perks for various services and products.',
      icon: <StarIcon />,
    },
    {
      title: '24/7 Support',
      description: 'Get assistance anytime with our dedicated support team.',
      icon: <SupportIcon />,
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health coverage and wellness programs to keep you fit and healthy.',
      icon: <HealthAndSafetyIcon />,
    },
    {
      title: 'Eco-Friendly Initiatives',
      description: 'Be part of our sustainability efforts with green initiatives and eco-friendly practices.',
      icon: <NatureIcon />,
    },
    {
      title: 'Career Growth Opportunities',
      description: 'Access to training programs and career advancement opportunities.',
      icon: <TrendingUpIcon />,
    },
    {
      title: 'Flexible Working Hours',
      description: 'Enjoy flexible working hours to balance work and personal life.',
      icon: <AccessTimeIcon />,
    },
  ];

  return (
    <>
      <Heads />
      <Header />
      <Container maxWidth="ld" sx={sectionContainerStyles(theme)}>
        <Typography variant="h4" sx={headerTypographyStyles(theme)}>
          Benefits of Working with Us
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {benefits.map((benefit, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <BenefitCard {...benefit} />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
          <Button
            variant="contained"
            color="primary"
            href="/tahapan"
            sx={{ px: 4, py: 1.5 }}
          >
            Explore Our Process
          </Button>
        </Box>
      </Container>
      <Footer />
    </>
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

export default BenefitsSection;
