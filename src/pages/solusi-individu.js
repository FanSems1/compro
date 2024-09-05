import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Header from '../Section/Header';
import Heads from '../Utilis/Heads';
import Footer from 'Section/Footer';
import Kontak from 'Section/Kontak';
import Skill from 'Section/Skill';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';

const SolusiIndividu = () => {
  const theme = useTheme();

  const solutions = [
    { title: 'Solution 1', description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."', icon: 'icon1.png' },
    { title: 'Solution 2', description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."', icon: 'icon2.png' },
    { title: 'Solution 3', description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."', icon: 'icon3.png' },
    { title: 'Solution 4', description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."', icon: 'icon4.png' },
  ];

  const testimonials = [
    { name: 'Steven Wongso', title: 'Direktur PT. Indo Jaya Abadi Sejahtera', feedback: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."', rating: 4 },
    { name: 'Steven Wongso', title: 'Direktur PT. Indo Jaya Abadi Sejahtera', feedback: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."', rating: 4 },
  ];

  return (
    <Container maxWidth="ld" sx={{ mt: 0, mb: 0 }}>
      <Heads />
      <Header />

      {/* Header Section with Text and Image */}
      <Grid container spacing={4} alignItems="center" sx={{ my: 5 }}>
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: 'left' }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}>
              Mari temukan solusi profesional bisnis, kami siap membantu!
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, mb: 4, color: theme.palette.text.secondary }}>
              Kami memiliki banyak solusi untuk membantu anda meraih visi dan misi bisnis anda secara profesional.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ mr: 2, borderRadius: '15px' }}
              startIcon={<PhoneIcon></PhoneIcon>}
            >
              Hubungi Kami
            </Button>
            <Button
              variant="outlined"
              color="primary"
              sx={{ borderRadius: '12px' }}
              startIcon={<WhatsAppIcon></WhatsAppIcon>}
            >
              Whatsapp Kami
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: 'center' }}>
            {/* Replace with your image source */}
            <img src="your-image-url.png" alt="Business Solutions" style={{ maxWidth: '100%' }} />
          </Box>
        </Grid>
      </Grid>

      <Typography variant="h5" sx={{ mb: 4, fontWeight: 'bold', textAlign: 'center', color: theme.palette.primary.main }}>
        Solusi kami, hanya untuk bisnis anda
      </Typography>

      <Grid container spacing={4}>
        {/* Row 1: Solutions 1 and 2 */}
        <Grid container item spacing={4}>
          <Grid item xs={12} sm={6} md={6}>
            <Card sx={{ textAlign: 'left', p: 3, boxShadow: 3 }}>
              <CardContent>
                {/* Logo or Icon at the top left */}
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <img
                    src={solutions[0].icon}
                    alt={solutions[0].title}
                    style={{ width: '24px', height: '24px', marginRight: '8px' }} // Adjust size as needed
                  />
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}>
                    {solutions[0].title}
                  </Typography>
                </Box>
                {/* Description below the title */}
                <Typography variant="body2" sx={{ color: theme.palette.text.primary }}>
                  {solutions[0].description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Card sx={{ textAlign: 'left', p: 3, boxShadow: 3 }}>
              <CardContent>
                {/* Logo or Icon at the top left */}
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <img
                    src={solutions[1].icon}
                    alt={solutions[1].title}
                    style={{ width: '24px', height: '24px', marginRight: '8px' }} // Adjust size as needed
                  />
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}>
                    {solutions[1].title}
                  </Typography>
                </Box>
                {/* Description below the title */}
                <Typography variant="body2" sx={{ color: theme.palette.text.primary }}>
                  {solutions[1].description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Row 2: Solutions 3 and 4 */}
        <Grid container item spacing={4}>
          <Grid item xs={12} sm={6} md={6}>
            <Card sx={{ textAlign: 'left', p: 3, boxShadow: 3 }}>
              <CardContent>
                {/* Logo or Icon at the top left */}
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <img
                    src={solutions[2].icon}
                    alt={solutions[2].title}
                    style={{ width: '24px', height: '24px', marginRight: '8px' }} // Adjust size as needed
                  />
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}>
                    {solutions[2].title}
                  </Typography>
                </Box>
                {/* Description below the title */}
                <Typography variant="body2" sx={{ color: theme.palette.text.primary }}>
                  {solutions[2].description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Card sx={{ textAlign: 'left', p: 3, boxShadow: 3 }}>
              <CardContent>
                {/* Logo or Icon at the top left */}
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <img
                    src={solutions[3].icon}
                    alt={solutions[3].title}
                    style={{ width: '24px', height: '24px', marginRight: '8px' }} // Adjust size as needed
                  />
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}>
                    {solutions[3].title}
                  </Typography>
                </Box>
                {/* Description below the title */}
                <Typography variant="body2" sx={{ color: theme.palette.text.primary }}>
                  {solutions[3].description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>

      <Box sx={{ textAlign: 'center', mt: 8 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}>
          Apa Kata Mereka?
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, mb: 4, color: theme.palette.text.secondary }}>
          Yuk dengarkan testimoni dari mereka yang percayakan eureka
        </Typography>
      </Box>

      <Grid container spacing={4} sx={{ mb: 8 }}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card sx={{ p: 3, boxShadow: 3 }}>
              <CardContent>
                {/* Name */}
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                  {testimonial.name}
                </Typography>
                {/* Title */}
                <Typography variant="subtitle2" sx={{ color: theme.palette.text.secondary, mb: 2 }}>
                  {testimonial.title}
                </Typography>
                {/* Feedback */}
                <Typography variant="body1" sx={{ mb: 2, fontStyle: 'italic' }}>
                  "{testimonial.feedback}"
                </Typography>
                {/* Star Rating */}
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: i < testimonial.rating ? '#FFD700' : '#E0E0E0', fontSize: '1.5em' }}>★</span> // Adjusts color for filled or empty star
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Adding margin-top to the Company component */}
      <Box sx={{ mt: 8 }}>
        <Skill />
        <Kontak />
      </Box>
      <Footer />
    </Container>
  );
};

export default SolusiIndividu;
