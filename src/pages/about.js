import React from 'react';
import { Container, Typography, Grid, Box, Button, IconButton } from '@mui/material';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Heads from 'Utilis/Heads';
import Header from './Section/Header';
import Footer from './Section/Footer';
import Kontak from './Section/Kontak';
import TentangKamiImage from 'Assets/Pict/tentangkami.png';
import AboutEurekaImage from 'Assets/Pict/AbouEureka.png';
import mapsIcon from 'Assets/Pict/mapsicon.png';
import BookhouseLogo from 'Assets/Footer/bookh.png';
import LogisticsLogo from 'Assets/Footer/eulogistik.png';
import RajaCepatLogo from 'Assets/Footer/rajacepat.png';
import MasdisLogo from 'Assets/Footer/masterdis.png';
import Milestone from './milestone';
import Image from 'next/image';

const About = () => {
  const sections = [
    { text: "Kami memiliki banyak solusi untuk membantu anda meraih visi dan misi  bisnis anda secara professional. Kami memiliki banyak solusi untuk membantu anda meraih visi dan misi  bisnis anda secara professional.Kami memiliki banyak solusi untuk membantu anda meraih visi dan misi  bisnis anda secara professional.Kami memiliki banyak solusi untuk membantu anda meraih visi dan misi  bisnis anda secara professional.", image: TentangKamiImage },
  ];

  const milestones = [
    { year: '2007', description: 'PT. Eureka Bookhouse was Founded', logo: BookhouseLogo },
    { year: '2011', description: 'PT. Eureka Logistics was Founded', logo: LogisticsLogo },
    { year: '2017', description: 'PT. Raja Cepat was Founded', logo: RajaCepatLogo },
    { year: '2020', description: 'PT. Master Diskon Was Founded', logo: MasdisLogo },
  ];

  return (
    <>
      <Heads />
      <Header /> 
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: `url(${AboutEurekaImage})`,
          backgroundSize: 'cover',
          height: '720px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          mt: '4.5em',
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ mt: 35, p: 1 }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'white', mb: '1rem' }}>
              Temukan informasi tentang Eureka <br /> Group
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.3rem', color: 'white' }}>
              Mau lebih mengenal Eureka Group? <br /> Yuk simak beberapa informasi yang kami sediakan agar lebih dekat dengan kami.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Milestone />

      {/* About Section */}
      {sections.map((section, index) => (
        <Box key={index} sx={{ backgroundColor: '#E7E9F5', py: 6 }}>
          <Container maxWidth="xl">
            <Grid container spacing={4} alignItems="center" direction={index % 2 === 0 ? 'row' : 'row-reverse'}>
              <Grid item xs={12} md={6}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', color: "#0F2296", mb: 5 }}>
                  Sekilas Tentang Kami
                  </Typography>
                <Typography variant="body1">{section.text}</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Image 
                  src={TentangKamiImage}
                  alt="Tentang Kami" 
                  width={500} 
                  height={300} 
              />
              </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      ))}
      
      {/* Google Maps Embed */}
      <Container sx={{ py: 6 }} maxWidth="xl">
        <Typography variant="h4" sx={{ textAlign: 'center', mb: 2, fontWeight: 'bold', color: '#0F2296' }}>
          Lokasi Kami
        </Typography>
        <Box sx={{ width: '100%', maxWidth: '1280px', borderRadius: '20px', mb: 4, mx: 'auto', overflow: 'hidden' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.560620814668!2d106.86839627499126!3d-6.321296493668156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed0b8c17fc19%3A0x60e73f9f7edbcf83!2sPT%20Eureka%20Logistics!5e0!3m2!1sid!2sid!4v1726126807701!5m2!1sid!2sid"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '20px', px: 3 }}>
            <div style={{ marginBottom: '10px', marginRight: '10px' }}> 
              <Image 
                src={mapsIcon} 
                alt="Maps Icon" 
                width={30} 
                height={30} 
              />
            </div>
            <Typography sx={{ color: '#000', fontWeight: 'bold', textAlign: 'center' }}>
              Jl. Raya Poncol No.36 8 9, RT.8/RW.9, Susukan, Kec. Ciracas, <br /> Kota Jakarta Timur, DKI Jakarta 13750
            </Typography>
            <Button
              variant="contained"
              endIcon={<ArrowForwardTwoToneIcon />}
              sx={{ backgroundColor: '#213689', fontWeight: 'bold', borderRadius: '10px', marginLeft: '10px' }} // Tambahkan marginLeft jika diperlukan
              onClick={() => window.open('https://maps.app.goo.gl/z6SoXRhTuM3e9Qq78', '_blank')}
            >
              Lihat di Maps
            </Button>
          </Box>
      </Container>
      <Kontak />
      <Footer />
    </>
  );
};

export default About;
