import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import Image from 'next/image';

import JajaID from '../Assets/blog/jajaicon2.png';
import BookIcon from '../Assets/blog/bookicon2.png';
import MasdisIcon from '../Assets/blog/masdisicon2.png';
import ElogsIcon from '../Assets/blog/elogsicon2.png';
import RaceIcon from '../Assets/blog/raceicon2.png';
import KatarasaIcon from '../Assets/blog/katarasaicon2.png';
import BapakRaja from '../Assets/animasi/karir/bapakRaja.png';
// import Star from '../Assets/animasi/karir/Star 6';
// import Buletan from '../Assets/animasi/karir/buletan';

// Component for the 
const AboutEurekaGroup = () => {
  const smallImages = [
    BookIcon,
    MasdisIcon,
    JajaID,
    RaceIcon,
    ElogsIcon,
    KatarasaIcon,
  ];

  return (
    <Container sx={{ py: 6, position: 'relative' }} maxWidth="xl">
      <Grid container spacing={4} alignItems="center">
        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <div>
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
              Tentang Eureka Group
            </Typography>
            <Typography variant="body1">
              Kami memiliki banyak solusi untuk membantu anda meraih visi dan misi bisnis anda secara professional. Kami memiliki banyak solusi untuk membantu anda meraih visi dan misi bisnis anda secara professional.Kami memiliki banyak solusi untuk membantu anda meraih visi dan misi bisnis anda secara professional.Kami memiliki banyak solusi untuk membantu anda meraih visi dan misi bisnis anda secara professional.
            </Typography>
          </div>
        </Grid>

        {/* Large Image Section */}
        <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
          <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
          }}>
            {/* Large Image */}
            <Image
              src={BapakRaja}
              alt="Large Image"
              width={630}
              height={367}
              style={{ width: '80%', height: 'auto' }}
            />
          </div>
        </Grid>

        {/* Small Images Section */}
        <Grid item xs={12}>
          <Grid container spacing={2} justifyContent="center">
            {smallImages.map((img, index) => (
              <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
                <div style={{
                  width: '100%',
                  padding: '8px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                  {/* Small Images */}
                  <Image
                    src={img}
                    alt={`Small Image ${index + 1}`}
                    width={160}
                    height={83}
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                      objectFit: 'cover'
                    }}
                  />
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutEurekaGroup;
