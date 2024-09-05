import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Header from '../Section/Header';
import Heads from '../Utilis/Heads';
import Footer from 'Section/Footer'
import Company from 'Components/Blog/Company';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import SoluPeruGambar from 'Assets/Pict/soluperu.png'
import BookhouseIcon from 'Assets/blog/bookicon.png'
import MasdisIcon from 'Assets/blog/masdisicon.png'
import RajaCepatIcon from 'Assets/blog/rajacepaticon.png'
import LogistikIcon from 'Assets/blog/logistikicon.png'
import KatarasaIcon from 'Assets/blog/katarasaicon.png'

const SolusiPerusahaan = () => {
  const theme = useTheme();

  const solutions = [
    { title: 'Reading & Study',
      description: 'Untuk anda yang membutuhkan buku pelajaran, buku anak hingga buku novel, kami memiliki unit bisnis yang beroperasi pada bidang penjualan buku. Eureka Bookhouse melayani pembelian via online maupun offline. Mari percayakan sumber inspirasi pada kami!', 
      icon: BookhouseIcon },
    { title: 'Flight, Hotel & Travel',
      description: 'Butuh perjalanan dinas? atau bahkan outing kantor untuk refreshing? Master Diskon jawabannya! Disini anda bisa memesan tiket pesawat, tiket kereta, hotel menginap hingga event perjalanan untuk acara anda. Dengan penuh hati kami berikan service dalam akomodasi dan perjalanan anda.', 
      icon: MasdisIcon },
    { title: 'Package Delivery',
      description: ' Mau kirim paket bisnis? Tidak perlu ragu untuk percayakan pengiriman paket bisnismu lewat Raja Cepat! Kami berani jamin keamanan paket serta kecepatan pengiriman tepat waktu. Dengan rasa tanggung jawab kami menjalankan tugas pengiriman yang anda inginkan.', 
      icon: RajaCepatIcon },
    { title: 'Moving Goods',
      description: 'Eureka Logistics melayani pemindahan stock barang dari jarak dekat hingga jarak jauh sekalipun. Dengan kendaraan besar, sebanyak apapun stock anda kami bisa atasi. Kami memiliki SOP dan pengecekan rutin karena kami mengutamakan keselamatan dan kepuasan partner kami.', 
      icon: LogistikIcon },
    { title: 'Tea and Coffee',
      description: 'Kopi dan teh memang teman yang baik dalam mencari inspirasi, Kata Rasa siap menemani anda dalam mencari inspirasi atau hanya sekedar menjadi teman meeting anda. Dengan Kata Rasa, rasa kopi yang disajikan tidak perlu diragukan lagi. Yuk pesan kata rasa sekarang!', 
      icon: KatarasaIcon },
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
            <img src={SoluPeruGambar} alt="Business Solutions" style={{ maxWidth: '100%' }} />
          </Box>
        </Grid>
      </Grid>

      <Typography variant="h5" sx={{ mb: 4, fontWeight: 'bold', textAlign: 'center', color: theme.palette.primary.main }}>
        Solusi kami, hanya untuk bisnis anda
      </Typography>

      <Grid container spacing={4}>
  {/* Row 1: Solutions 1, 2, 3 */}
  {solutions.slice(0, 3).map((solution, index) => (
    <Grid item xs={12} sm={6} md={4} key={index}>
      <Card sx={{ textAlign: 'left', p: 3, boxShadow: 3 }}>
        <CardContent>
          {/* Logo or Icon at the top left */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <img
              src={solution.icon}
              alt={solution.title}
              style={{ width: '40px', height: '40px', marginRight: '8px', marginBottom: '2px' }} // Adjust size as needed
            />
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}>
              {solution.title}
            </Typography>
          </Box>
          {/* Description below the title */}
          <Typography variant="body2" sx={{ color: theme.palette.text.primary }}>
            {solution.description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>

{/* Row 2: Solutions 4 and 5 centered */}
<Grid container spacing={4} justifyContent="center" sx={{ mt: 2 }}>
  {solutions.slice(3).map((solution, index) => (
    <Grid item xs={12} sm={6} md={4} key={index}>
      <Card sx={{ textAlign: 'left', p: 3, boxShadow: 3 }}>
        <CardContent>
          {/* Logo or Icon at the top left */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <img
              src={solution.icon}
              alt={solution.title}
              style={{ width: '40px', height: '40px', marginRight: '8px' }} // Adjust size as needed
            />
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}>
              {solution.title}
            </Typography>
          </Box>
          {/* Description below the title */}
          <Typography variant="body2" sx={{ color: theme.palette.text.primary }}>
            {solution.description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>


      <Box sx={{ textAlign: 'center', mt: 8 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}>
          Apa Kata Mereka?
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, mb: 4, color: theme.palette.text.secondary }}>
          Yuk dengarkan testimoni dari mereka yang percayakan eureka
        </Typography>
      </Box>

      <Grid container spacing={4} sx={{ mb: 8 }}> {/* Adding margin-bottom to create space before Company */}
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
              <span key={i} style={{ color: i < testimonial.rating ? '#FFD700' : '#E0E0E0' }}>★</span> // Adjusts color for filled or empty star
            ))}
          </Box>
        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>

{/* Adding margin-top to the Company component */}
<Box sx={{ mt: 8 }}>
  <Company />
</Box>
      <Footer />
    </Container>
  );
};

export default SolusiPerusahaan;
