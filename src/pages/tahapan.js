import React from 'react';
import { Box, Typography, Container, Divider, Grid, Button } from '@mui/material';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SendIcon from '@mui/icons-material/Send';
import WorkIcon from '@mui/icons-material/Work';
import LocalOfferIcon from '@mui/icons-material/LocalOffer'; // New icon for "Tawaran Kerja"
import Header from "../Section/Header";
import Heads from "../Utilis/Heads";
import FooterOne from "Components/Footer/FooterOne";
import FooterTwo from "Components/Footer/FooterTwo";
import FooterThree from "Components/Footer/FooterThree";
import BottomFooter from "Components/Footer/BottomFooter";
import { fadeIn, stageBoxStyles, containerStyles, headerTypographyStyles, bodyTypographyStyles } from './Style/tahapan';

const RecruitmentPage = () => {
  const theme = useTheme();

  // Define stages with theme-based styles inside the component
  const stages = [
    {
      title: 'Pendaftaran',
      description: 'Kirimkan lamaran Anda melalui portal kami dan pastikan semua informasi yang diperlukan terisi dengan benar.',
      icon: <AssignmentIcon sx={{ fontSize: 50, color: theme.palette.primary.main, mb: 2 }} />
    },
    {
      title: 'Seleksi',
      description: 'Tim HR kami akan meninjau aplikasi Anda dan memilih kandidat yang memenuhi syarat untuk tahap wawancara.',
      icon: <SendIcon sx={{ fontSize: 50, color: theme.palette.primary.main, mb: 2 }} />
    },
    {
      title: 'Wawancara',
      description: 'Ikuti wawancara dengan tim kami untuk mendiskusikan keterampilan, pengalaman, dan bagaimana Anda cocok dengan perusahaan kami.',
      icon: <WorkIcon sx={{ fontSize: 50, color: theme.palette.primary.main, mb: 2 }} />
    },
    {
      title: 'Test',
      description: 'Lakukan tes yang diperlukan untuk menilai keterampilan dan pengetahuan Anda yang relevan dengan posisi yang dilamar.',
      icon: <AssignmentIcon sx={{ fontSize: 50, color: theme.palette.primary.main, mb: 2 }} />
    },
    {
      title: 'Penawaran Kerja',
      description: 'Jika Anda berhasil, Anda akan menerima tawaran kerja dan detail lebih lanjut tentang langkah berikutnya.',
      icon: <CheckCircleOutlineIcon sx={{ fontSize: 50, color: theme.palette.primary.main, mb: 2 }} />
    },
    {
      title: 'Tawaran Kerja',
      description: 'Setelah tawaran kerja diterima, kami akan mengatur segala sesuatunya untuk memulai perjalanan baru Anda bersama kami.',
      icon: <LocalOfferIcon sx={{ fontSize: 50, color: theme.palette.primary.main, mb: 2 }} /> // New icon
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Heads />
      <Header />
      <Container maxWidth="ld" sx={{ mt: 15 }}>
        <Box sx={containerStyles(theme)}>
          <Typography variant="h3" sx={{ ...headerTypographyStyles(theme), color: 'black' }}>
            Tahapan Rekrutmen Kami
          </Typography>
          <Typography variant="body1" sx={bodyTypographyStyles(theme)}>
            Kami berkomitmen untuk memberikan proses rekrutmen yang jelas dan menyeluruh. Berikut adalah tahapan yang akan Anda lalui.
          </Typography>
          
          {/* Recruitment Stages */}
          <Grid container spacing={4}>
            {stages.map((stage, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box sx={stageBoxStyles(theme)}>
                  {stage.icon}
                  <Typography variant="h6" sx={{ mb: 2, color: theme.palette.primary.main, fontWeight: 'bold' }}>
                    {stage.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.text.primary }}>
                    {stage.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* Call to Action */}
          <Divider sx={{ my: 6, borderColor: theme.palette.divider }} />
          <Typography variant="h4" sx={{ mb: 4, textAlign: 'center', color: 'black', fontWeight: 'bold' }}>
            Temukan Kesempatan Karir Kami
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                sx={{ mr: 1 }}
                href="https://www.linkedin.com/company/pt-eureka-bookhouse"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lowongan di LinkedIn
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                sx={{ mr: 1 }}
                href="https://www.jobstreet.co.id/en/job-search/job-vacancies/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lowongan di JobStreet
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                sx={{ mr: 1 }}
                href="https://glints.com/id/opportunities"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lowongan di Glints
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                sx={{ mr: 1 }}
                href="https://www.instagram.com" // Replace with your URL
                target="_blank"
                rel="noopener noreferrer"
              >
                Lowongan di Instagram
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
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

export default RecruitmentPage;