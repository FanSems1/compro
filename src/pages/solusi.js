import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  ButtonBase,
} from '@mui/material';
import Kontak from './Section/Kontak';
import { useTheme } from '@mui/material/styles';
import Header from './Section/Header';
import Heads from '../Utilis/Heads';
import Footer from './Section/Footer';
import Company from 'Components/Blog/Company';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import SoluPeruGambar from '../Assets/Pict/solusi.png';
import Pagination from '@mui/material/Pagination';
import { solutions, testimonials } from '../Components/dataPage/Data/SolusiPerusahaan';
import SolusiIndividu from './solusi-individu';
import FloatingButton from 'Components/FloatingButton';
import WhatsAppButton from 'Components/WhatsAppButton';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';
import Image from 'next/image';

const SolusiPerusahaan = () => {
  const theme = useTheme();
  const itemsPerPage = 2;
  const [page, setPage] = useState(1);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= Math.ceil(testimonials.length / itemsPerPage)) {
      setPage(newPage);
    }
  };

  const startIndex = (page - 1) * itemsPerPage;
  const currentTestimonials = testimonials.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <Container maxWidth="xl" sx={{ mt: 25, mb: 0, }}>
        <Heads />
        <Header />

        {/* Header Section with Text and Image */}
        <Grid container spacing={4} alignItems="center" sx={{ my: 5, ml: 2 }}>
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: 'left' }}>
              <Typography
                variant="h4"
                sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}
              >
                Mari temukan solusi profesional bisnis, kami siap membantu!
              </Typography>
              <Typography
                variant="body1"
                sx={{ mt: 2, mb: 4, color: theme.palette.text.secondary }}
              >
                Kami memiliki banyak solusi untuk membantu anda meraih visi dan misi bisnis
                anda secara profesional.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ mr: 2, borderRadius: '15px' }}
                startIcon={<PhoneIcon />}
              >
                Hubungi Kami
              </Button>
              <Button
                variant="outlined"
                color="primary"
                sx={{ borderRadius: '12px' }}
                startIcon={<WhatsAppIcon />}
              >
                Whatsapp Kami
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: 'center' }}>
            <Image
                src={SoluPeruGambar}
                alt="Business Solutions"
                width={500} 
                height={300} 
                style={{ maxWidth: '100%' }} 
            />
            </Box>
          </Grid>
        </Grid>

        <Typography
          variant="h5"
          sx={{
            mb: 4,
            mt: 35,
            fontWeight: 'bold',
            textAlign: 'center',
            color: theme.palette.primary.main,
          }}
        >
          Solusi kami, hanya untuk bisnis anda
        </Typography>

        <Grid container spacing={4}>
          {solutions.map((solution, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ textAlign: 'left', p: 3, boxShadow: 3, height: '100%' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Image
                      src={solution.icon}
                      alt={solution.title}
                      width={40}
                      height={40}
                      style={{
                        display: 'block',
                      }}
                    />
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: theme.palette.primary.main, marginLeft: '15px' }}>
                      {solution.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ color: theme.palette.text.primary }}>
                    {solution.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Company />

        <SolusiIndividu />

        {/* Testimonials Section */}
        <Box sx={{ textAlign: 'center', mt: 25 }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}
          >
            Apa Kata Mereka?
          </Typography>
          <Typography
            variant="body1"
            sx={{ mt: 2, mb: 4, color: theme.palette.text.secondary }}
          >
            Yuk dengarkan testimoni dari mereka yang percayakan eureka
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 8 }}>
  {currentTestimonials.map((testimonial, index) => (
    <Grid item xs={12} md={6} key={index}>
      <Card 
        sx={{ 
          p: 3, 
          border: '2px solid #0F2296', 
          boxShadow: 'none' 
        }}
      >
        <CardContent>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
            {testimonial.name}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ color: 'text.secondary', mb: 2 }}
          >
            {testimonial.title}
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.primary', mb: 2 }}>
            {testimonial.feedback}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Typography key={i} variant="h6" sx={{ color: '#FFD700' }}>
                ★
              </Typography>
            ))}
          </Box>
        </CardContent>
      </Card>
    </Grid>
  ))}
        </Grid>

        {/* Pagination Controls */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', mt: 1 }}>
        <PrevButton
            onClick={() => handlePageChange(page - 1)}
            enabled={page > 1}
          />
          <NextButton
            onClick={() => handlePageChange(page + 1)}
            enabled={page < Math.ceil(testimonials.length / itemsPerPage)}
          />
        </Box>
        <Kontak />
        <FloatingButton />
        <WhatsAppButton />
      </Container>
      <Footer />
    </div>
  );
};

// Prev and Next Button Components
const PrevButton = ({ enabled, onClick }) => (
  <ButtonBase
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      backgroundColor: enabled ? '#0F2296' : '#cccccc',
      borderRadius: '0',
      width: '35px',
      mt: -4,
      height: '33px',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      cursor: enabled ? 'pointer' : 'not-allowed',
      marginRight: '1em',
      '&:active': {
        color: 'black',
      },
    }}
    onClick={enabled ? onClick : null}
    disabled={!enabled}
  >
    <ChevronLeft sx={{ color: 'white' }} />
  </ButtonBase>
);

const NextButton = ({ enabled, onClick }) => (
  <ButtonBase
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      backgroundColor: enabled ? '#0F2296' : '#cccccc',
      borderRadius: '0',
      mt: -4,
      width: '35px',
      height: '33px',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      cursor: enabled ? 'pointer' : 'not-allowed',
      '&:active': {
        color: 'black',
      },
    }}
    onClick={enabled ? onClick : null}
    disabled={!enabled}
  >
    <ChevronRight sx={{ color: 'white' }} />
  </ButtonBase>
);

export default SolusiPerusahaan;
