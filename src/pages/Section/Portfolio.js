import React from 'react';
import { Container, Grid, Typography, ButtonBase } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import portfolioData from '../../Components/dataPage/Data/Portfolio/PortfolioData';
import Image from 'next/image';

const styles = {
  Container: {
    mt: 11,
    gap: 40,
    mb: 11,
  },
  SectionHeading: {
    textAlign: 'center',
    marginBottom: '2em',
    fontSize: '2em',
    fontWeight: 'bold',
    color: '#333',
  },
  GridContainer: {
    gap: '1em',
  },
  Button: {
    marginTop: '1em',
    padding: '0.8em 2em',
    color: '#0F2296',
    borderRadius: '22px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textTransform: 'uppercase',
    fontSize: '0.9em',
    '&:hover': {
      backgroundColor: '#0F2296',
      color: '#fff',
    },
    transition: 'background-color 0.3s ease',
  },
  Name: {
    fontWeight: 'bold',
    fontSize: '32px',
    weight: 500,
    marginBottom: '0.5em',
    lineHeight: '45px',
  },
  fadeInUp: {
    opacity: 0,
    transform: 'translateY(50px)',
    animation: 'fadeInUp 1s forwards',
  },
  ImageContainer: {
    maxWidth: '40%', 
  },
};

const PortfolioItem = ({ item, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <Grid
      item
      xs={12}
      ref={ref}
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
        opacity: 0,
        transform: 'translateY(50px)',
        ...(inView && {
          opacity: 1,
          transform: 'translateY(0)',
          transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
        }),
      }}
    >
      <div
        style={{
          margin: index % 2 === 0 ? '0 1em 0 75px' : '0 75px 0 1em',
          textAlign: index % 2 === 0 ? 'left' : 'right',
          ...styles.ImageContainer,
        }}
      >
        <Image
          src={item.image}
          alt={item.name}
          width='522px'
          height='420px'
          style={{
            borderRadius: '10px',
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          }}
        />
      </div>
      <div
  style={{
    margin: '0 1em',
    textAlign: index % 2 === 0 ? 'left' : 'right',
    maxWidth: '40%',
    ...(index % 2 !== 0 
      ? { marginRight: '-20px' }  
      : { marginLeft: '-40px' }  
    ),
  }}
>
        <Typography variant="h5" sx={styles.Name}>
          {item.name}
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          {item.description}
        </Typography>
        <ButtonBase
          sx={styles.Button}
          onClick={() => window.open(item.url, '_blank')}
        >
          {index % 2 === 0 ? (
            <>
              <ArrowBackIcon sx={{ marginRight: '0.5em' }} />
              Pelajari Selanjutnya
            </>
          ) : (
            <>
              Pelajari Selanjutnya
              <ArrowForwardTwoToneIcon sx={{ marginLeft: '0.5em' }} />
            </>
          )}
        </ButtonBase>
      </div>
    </Grid>
  );
};

const Portfolio = () => {
  return (
    <Container maxWidth="xl" sx={styles.Container}>
      <div>
        <Typography variant="h2" sx={styles.SectionHeading}>
          Find your needs here! <br />
          What we have to provide you.
        </Typography>

        <Grid container spacing={4} sx={styles.GridContainer}>
          {portfolioData.map((item, index) => (
            <PortfolioItem key={index} item={item} index={index} />
          ))}
        </Grid>
      </div>
    </Container>
  );
};

export default Portfolio;
