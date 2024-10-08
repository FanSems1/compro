import React from 'react';
import { Box, Typography, Container, Card, CardContent, Avatar, Grid } from '@mui/material';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import Slider from 'react-slick';
import Header from "../Section/Header";
import Heads from "../Utilis/Heads";
import FooterOne from "Components/Footer/FooterOne";
import FooterTwo from "Components/Footer/FooterTwo";
import FooterThree from "Components/Footer/FooterThree";
import BottomFooter from "Components/Footer/BottomFooter";
import Contact from 'Section/Contact';

// Importing images
import backgroundImage from "../Assets/contact.png";
import photo1 from "../Assets/footer/footer.png";
import photo2 from "../Assets/footer/footer1.png";
import photo3 from "../Assets/footer/footer2.png";
import photo4 from "../Assets/footer/footer3.png";

// Slider CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Testimonial Data
const testimonials = [
  {
    name: "John Doe",
    position: "CEO at Company",
    testimonial: "PT Eureka’s commitment to innovation and professional growth has been outstanding. Our collaboration has greatly benefited both our companies.",
    photo: photo1
  },
  {
    name: "M. Hasyim Ridwan",
    position: "Manager at Company",
    testimonial: "PT Eureka’s commitment to innovation and professional growth has been outstanding. Our collaboration has greatly benefited both our companies.",
    photo: photo1
  },
  {
    name: "Ridwan Kecil",
    position: "Full Stack Developer at Company",
    testimonial: "PT Eureka’s commitment to innovation and professional growth has been outstanding. Our collaboration has greatly benefited both our companies.",
    photo: photo2
  },
  {
    name: "Viko",
    position: "Staff IT at Company",
    testimonial: "PT Eureka’s commitment to innovation and professional growth has been outstanding. Our collaboration has greatly benefited both our companies.",
    photo: photo1
  },
  {
    name: "Jane Smith",
    position: "Marketing Director",
    testimonial: "Working with PT Eureka has been an incredible experience. Their dedication to excellence and collaboration truly sets them apart.",
    photo: photo2
  },
  {
    name: "Michael Johnson",
    position: "Product Manager",
    testimonial: "PT Eureka’s environment fosters creativity and teamwork. Their support has been crucial in the success of our joint projects.",
    photo: photo3
  },
  {
    name: "Emily Davis",
    position: "Software Engineer",
    testimonial: "The opportunity to work with PT Eureka has enhanced my skills and career. Their focus on development and innovation is impressive.",
    photo: photo4
  }
];

const TestimonialsPage = () => {
  const theme = useTheme();

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true, // Smooth fade transition for slider
  };

  return (
    <ThemeProvider theme={theme}>
      <Heads />
      <Header />
      <Container maxWidth="ld" sx={{ mt: 20, position: 'relative' }}>
        <Box
          sx={{
            p: 5,
            borderRadius: '15px',
            background: `linear-gradient(135deg, ${theme.palette.background.paper} 30%, ${theme.palette.primary.light} 100%)`,
            boxShadow: `0 10px 20px ${theme.palette.grey[800]}`,
            mb: 6,
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Decorative Angular Brackets */}
          <Typography
            sx={{
              position: 'absolute',
              top: -30,
              left: -30,
              fontSize: '100px',
              color: theme.palette.primary.main,
              fontWeight: 700,
              opacity: 0.1,
              transform: 'rotate(-15deg)'
            }}
          >
            &lt;
          </Typography>
          <Typography
            sx={{
              position: 'absolute',
              bottom: -30,
              right: -30,
              fontSize: '100px',
              color: theme.palette.primary.main,
              fontWeight: 700,
              opacity: 0.1,
              transform: 'rotate(15deg)'
            }}
          >
            &gt;
          </Typography>

          <Typography variant="h3" sx={{ mb: 4, color: theme.palette.primary.main, fontWeight: 700 }}>
            What Our Clients Say
          </Typography>

          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: 4,
                  borderRadius: '20px',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                  backgroundColor: theme.palette.background.paper,
                  // Removed hover effect and animation
                }}
              >
                <Avatar
                  src={testimonial.photo}
                  sx={{
                    width: 100,
                    height: 100,
                    mb: 2,
                    border: `4px solid ${theme.palette.primary.main}`,
                    borderRadius: '50%',
                    mx: 'auto'
                  }}
                />
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" sx={{ mb: 1, color: theme.palette.text.primary, fontWeight: 700 }}>
                    {testimonial.name}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ mb: 2, color: theme.palette.text.secondary }}>
                    {testimonial.position}
                  </Typography>
                  <Typography variant="body1" sx={{ color: theme.palette.text.primary, fontStyle: 'italic', lineHeight: 1.6 }}>
                    "{testimonial.testimonial}"
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Slider>
        </Box>
      </Container>
      <Contact />
      <Footer />
    </ThemeProvider>
  );
};

const Footer = () => {
  return (
    <Container maxWidth={false} disableGutters as="footer" sx={{ pt: "5em" }}>
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

export default TestimonialsPage;
