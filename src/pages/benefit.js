import React from 'react';
import { Box, Typography, Container, Grid, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';
import SupportIcon from '@mui/icons-material/Support';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import NatureIcon from '@mui/icons-material/Nature'; 
import benefit1 from '../Assets/galeri/iconbenefit&budaya/bene1.png'
import benefit2 from '../Assets/galeri/iconbenefit&budaya/bene2.png'
import benefit3 from '../Assets/galeri/iconbenefit&budaya/bene3.png'
import benefit4 from '../Assets/galeri/iconbenefit&budaya/bene4.png'
import { benefitCardStyles, sectionContainerStyles, headerTypographyStyles } from '../Components/dataPage/Style/benefit';
import Image from 'next/image';

const BenefitCard = ({ icon, title, description }) => {
  const theme = useTheme();
  return (
    <Box sx={benefitCardStyles(theme)}>
      <Box sx={{ fontSize: 50, mb: 2 }}>
      <Image 
        src={icon} 
        alt={title} 
        width={48}
        height={48}
        style={{ width: '100%' }} 
    />
      </Box>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: 'black' }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ color: 'black', mt: 2}}>
        {description}
      </Typography>
    </Box>
  );
};

const BenefitsSection = () => {
  const theme = useTheme();

  const benefits = [
    {
      title: 'Supportive',
      description: 'Enjoy exclusive discounts and perks for various services and products.',
      icon: benefit1,
    },
    {
      title: 'Benefit  Competitive',
      description: 'Get assistance anytime with our dedicated support team.',
      icon: benefit2,
    },
    {
      title: 'Peluang Karir Luas',
      description: 'Comprehensive health coverage and wellness programs to keep you fit and healthy.',
      icon: benefit3,
    },
    {
      title: 'Tunjangan dan Faslitas',
      description: 'Be part of our sustainability efforts with green initiatives and eco-friendly practices.',
      icon: benefit4,
    },
  ];

  return (
    <>
<Container maxWidth="lg" sx={sectionContainerStyles(theme)}>
<Typography variant="h4" sx={{ ...headerTypographyStyles(theme), mb: 2 }}>
  What you earn with Eureka?
</Typography>
  <Typography
    variant="body1"
    sx={{
      textAlign: 'center',
      mb: 8,
      color: 'black',
      fontWeight: 500,
      fontSize: '18px',
      fontFamily: "Montserrat, sans-serif",
      mx: 'auto',
      lineHeight: 1.6,
    }}
  >
    These are the benefits that you will receive when you join our team!
  </Typography>
  <Grid container spacing={4} justifyContent="center" sx={{ mb: 10 }}>
  {benefits.map((benefit, index) => (
    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
      <BenefitCard {...benefit} />
    </Grid>
  ))}
</Grid>

</Container>

    </>
  );
};

export default BenefitsSection;
