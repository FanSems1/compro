import React from 'react';
import { Box, Typography, Container, Grid, Button } from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles'; // Import alpha from MUI
import Header from '../Section/Header';
import Heads from '../Utilis/Heads';
import FooterOne from 'Components/Footer/FooterOne';
import FooterTwo from 'Components/Footer/FooterTwo';
import FooterThree from 'Components/Footer/FooterThree';
import BottomFooter from 'Components/Footer/BottomFooter';

const departmentData = [
  {
    name: 'Pengembangan Produk',
    description: 'Tim yang bertanggung jawab untuk merancang dan mengembangkan produk inovatif.',
    image: '/path/to/your/image1.png',
    link: '/products',
  },
  {
    name: 'Pemasaran',
    description: 'Tim pemasaran yang berfokus pada strategi dan kampanye untuk menjangkau pasar.',
    image: '/path/to/your/image2.png',
    link: '/marketing',
  },
  {
    name: 'Sumber Daya Manusia',
    description: 'Tim yang mengelola perekrutan, pelatihan, dan pengembangan karyawan.',
    image: '/path/to/your/image3.png',
    link: '/hr',
  },
  {
    name: 'Keuangan',
    description: 'Tim yang mengelola anggaran, pelaporan keuangan, dan analisis.',
    image: '/path/to/your/image4.png',
    link: '/finance',
  },
  {
    name: 'Teknologi Informasi',
    description: 'Tim yang menangani infrastruktur TI dan dukungan teknis.',
    image: '/path/to/your/image5.png',
    link: '/it',
  },
  {
    name: 'Layanan Pelanggan',
    description: 'Tim yang memberikan dukungan dan layanan kepada pelanggan.',
    image: '/path/to/your/image6.png',
    link: '/customer-service',
  },
];

const departmentStyles = (theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
  },
  box: {
    textAlign: 'center',
    marginBottom: theme.spacing(6),
  },
  heading: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
    color: theme.palette.primary.main,
  },
  subheading: {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(4),
  },
  departmentBox: {
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(3),
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'scale(1.03)',
      boxShadow: `0px 4px 15px ${alpha(theme.palette.primary.main, 0.3)}`,
    },
  },
  imageContainer: {
    overflow: 'hidden',
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(2),
    position: 'relative',
    height: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'cover',
  },
  departmentTitle: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
    color: theme.palette.primary.main,
  },
  departmentDescription: {
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(2),
  },
  departmentButton: {
    marginTop: theme.spacing(2),
  },
});

const DepartmentPage = () => {
  const theme = useTheme();
  const classes = departmentStyles(theme);

  return (
    <Container maxWidth="ld" sx={{ ...classes.container, mt: -10, mb: -2 }}>
      <Heads />
      <Header />
      <Box sx={classes.box}>
        <Typography variant="h3" sx={classes.heading}>
          Departemen Kami
        </Typography>
        <Typography variant="body1" sx={classes.subheading}>
          Temukan lebih banyak tentang setiap departemen di perusahaan kami dan apa yang mereka kerjakan.
        </Typography>

        <Grid container spacing={4}>
          {departmentData.map((dept, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box sx={classes.departmentBox}>
                <Box sx={classes.imageContainer}>
                  <img src={dept.image} alt={dept.name} style={classes.image} />
                </Box>
                <Typography variant="h5" sx={classes.departmentTitle}>
                  {dept.name}
                </Typography>
                <Typography variant="body2" sx={classes.departmentDescription}>
                  {dept.description}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={classes.departmentButton}
                  href={dept.link}
                >
                  Pelajari Lebih Lanjut
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer />
    </Container>
  );
};

const Footer = () => {
  return (
    <Container maxWidth={false} disableGutters as="footer" sx={{ pt: '5em' }}>
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

export default DepartmentPage;
