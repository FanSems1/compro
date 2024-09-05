import React from 'react';
import { Container, Grid, Typography, ButtonBase } from '@mui/material';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import masdis from 'Assets/portfolio/masterdis.png';
import bookhouse from 'Assets/portfolio/bookhouse.png';
import race from 'Assets/portfolio/EBH.png';
import logistics from 'Assets/portfolio/logistik.png';
import katarasa from 'Assets/portfolio/katarasa1.png';

const styles = {
  Container: {
    padding: '2em 0',
  },
  SectionHeading: {
    textAlign: 'center',
    marginBottom: '2em',
    fontSize: '2em',
    fontWeight: 'bold',
    color: '#333',
  },
  GridContainer: {
    gap: '2em',
  },
  Image: {
    width: '150px',
    height: '150px',
    borderRadius: '10px',
    objectFit: 'cover',
    margin: '0 3em', // Adjust margin to separate image and text
    '@media (max-width: 600px)': {
      marginRight: 0,
      marginBottom: '1em',
    },
  },
  Button: {
    marginTop: '1em',
    padding: '0.8em 2em',
    color: '#fff',
    backgroundColor: '#213689',
    borderRadius: '5px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textTransform: 'uppercase',
    fontSize: '0.9em',
    '&:hover': {
      backgroundColor: '#0056b3',
    },
    transition: 'background-color 0.3s ease',
  },
};

const Portfolio = () => {
  return (
    <Container maxWidth="xl" sx={styles.Container}>
      <Typography variant="h2" sx={styles.SectionHeading}>
        Find your needs here! <br />
        What we have to provide you.
      </Typography>

      <Grid container spacing={4} sx={styles.GridContainer}>
        {/* First Item - Image Left */}
        <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={bookhouse}
            alt="Eureka Bookhouse"
            style={{
              ...styles.Image,
              width: '100%', // Adjust as needed
              maxWidth: '400px', // Ensure image doesn’t get too large
              height: 'auto' // Maintain aspect ratio
            }}
          />
          <div style={{ marginLeft: '1em' }}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Find your favorite book at Eureka Bookhouse.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Lorem ipsum dolor sit amet consectetur. Nam eget orci...
            </Typography>
            <ButtonBase sx={styles.Button}>
              Pelajari Selanjutnya
              <ArrowForwardTwoToneIcon sx={{ marginLeft: '0.5em' }} />
            </ButtonBase>
          </div>
        </Grid>

        {/* Second Item - Image Right */}
        <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'center' }}>
          <img
            src={masdis}
            alt="Master Diskon"
            style={{
              ...styles.Image,
              width: '100%', // Adjust as needed
              maxWidth: '400px', // Ensure image doesn’t get too large
              height: 'auto' // Maintain aspect ratio
            }}
          />
          <div style={{ marginRight: '1em' }}>
            <Typography variant="h5">Let’s Travel with Master Diskon.</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur. Nam eget orci...
            </Typography>
            <ButtonBase sx={styles.Button}>
              Pelajari Selanjutnya
              <ArrowForwardTwoToneIcon sx={{ marginLeft: '0.5em' }} />
            </ButtonBase>
          </div>
        </Grid>

        {/* Third Item - Image Left */}
        <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={race}
            alt="Raja Cepat"
            style={{
              ...styles.Image,
              width: '100%', // Adjust as needed
              maxWidth: '400px', // Ensure image doesn’t get too large
              height: 'auto' // Maintain aspect ratio
            }}
          />
          <div style={{ marginLeft: '1em' }}>
            <Typography variant="h5">Delivery with no worry with Raja Cepat.</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur. Nam eget orci...
            </Typography>
            <ButtonBase sx={styles.Button}>
              Pelajari Selanjutnya
              <ArrowForwardTwoToneIcon sx={{ marginLeft: '0.5em' }} />
            </ButtonBase>
          </div>
        </Grid>

        {/* Fourth Item - Image Right */}
        <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'center' }}>
          <img
            src={katarasa}
            alt="Katarasa"
            style={{
              ...styles.Image,
              width: '100%', // Adjust as needed
              maxWidth: '400px', // Ensure image doesn’t get too large
              height: 'auto' // Maintain aspect ratio
            }}
          />
          <div style={{ marginRight: '1em' }}>
            <Typography variant="h5">Experience Authentic Flavors with Katarasa.</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur. Nam eget orci...
            </Typography>
            <ButtonBase sx={styles.Button}>
              Pelajari Selanjutnya
              <ArrowForwardTwoToneIcon sx={{ marginLeft: '0.5em' }} />
            </ButtonBase>
          </div>
        </Grid>

        {/* Fifth Item - Image Left */}
        <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={masdis}
            alt="Jaja Auto"
            style={{
              ...styles.Image,
              width: '100%', // Adjust as needed
              maxWidth: '400px', // Ensure image doesn’t get too large
              height: 'auto' // Maintain aspect ratio
            }}
          />
          <div style={{ marginLeft: '1em' }}>
            <Typography variant="h5">Find Your Next Ride with Jaja Auto.</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur. Nam eget orci...
            </Typography>
            <ButtonBase sx={styles.Button}>
              Pelajari Selanjutnya
              <ArrowForwardTwoToneIcon sx={{ marginLeft: '0.5em' }} />
            </ButtonBase>
          </div>
        </Grid>

        {/* Sixth Item - Image Right */}
        <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'center' }}>
          <img
            src={logistics}
            alt="Eureka Logistics"
            style={{
              ...styles.Image,
              width: '100%', // Adjust as needed
              maxWidth: '400px', // Ensure image doesn’t get too large
              height: 'auto' // Maintain aspect ratio
            }}
          />
          <div style={{ marginRight: '1em' }}>
            <Typography variant="h5">Seamless Shipping with Eureka Logistik.</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur. Nam eget orci...
            </Typography>
            <ButtonBase sx={styles.Button}>
              Pelajari Selanjutnya
              <ArrowForwardTwoToneIcon sx={{ marginLeft: '0.5em' }} />
            </ButtonBase>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Portfolio;
