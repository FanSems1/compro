import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SendIcon from '@mui/icons-material/Send';
import WorkIcon from '@mui/icons-material/Work';
import LocalOfferIcon from '@mui/icons-material/LocalOffer'; // New icon for "Tawaran Kerja"
import { stageBoxStyles, containerStyles, headerTypographyStyles, bodyTypographyStyles } from '../Components/dataPage/Style/tahapan';

const RecruitmentPage = () => {
  const theme = useTheme();

  // Define stages with theme-based styles inside the component
  const stages = [
    {
      title: 'Pendaftaran',
      number: '01',
      description: 'Kirimkan lamaran Anda melalui portal kami dan pastikan semua informasi yang diperlukan terisi dengan benar.',
      icon: <AssignmentIcon sx={{ fontSize: 40, color: theme.palette.primary.main, mb: 1 }} />
    },
    {
      title: 'Seleksi',
      number: '02',
      description: 'Tim HR kami akan meninjau aplikasi Anda dan memilih kandidat yang memenuhi syarat untuk tahap wawancara.',
      icon: <SendIcon sx={{ fontSize: 40, color: theme.palette.primary.main, mb: 1 }} />
    },
    {
      title: 'Wawancara',
      number: '03',
      description: 'Ikuti wawancara dengan tim kami untuk mendiskusikan keterampilan, pengalaman, dan bagaimana Anda cocok dengan perusahaan kami.',
      icon: <WorkIcon sx={{ fontSize: 40, color: theme.palette.primary.main, mb: 1 }} />
    },
    {
      title: 'Test Teknis',
      number: '04',
      description: 'Lakukan tes yang diperlukan untuk menilai keterampilan dan pengetahuan Anda yang relevan dengan posisi yang dilamar.',
      icon: <AssignmentIcon sx={{ fontSize: 40, color: theme.palette.primary.main, mb: 1 }} />
    },
    {
      title: 'Penawaran Kerja',
      number: '05',
      description: 'Jika Anda berhasil, Anda akan menerima tawaran kerja dan detail lebih lanjut tentang langkah berikutnya.',
      icon: <CheckCircleOutlineIcon sx={{ fontSize: 40, color: theme.palette.primary.main, mb: 1 }} />
    },
    {
      title: 'Offering/Rejection Letter',
      number: '06',
      description: 'Setelah tawaran kerja diterima, kami akan mengatur segala sesuatunya untuk memulai perjalanan baru Anda bersama kami.',
      icon: <LocalOfferIcon sx={{ fontSize: 40, color: theme.palette.primary.main, mb: 1 }} /> // New icon
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="ld" sx={{ mt: 15, mb: 15 }}>
        <Box sx={containerStyles(theme)}>
          <Typography variant="h4" sx={{ ...headerTypographyStyles(theme), color: theme.palette.primary.main, mb: 2, fontFamily: "Montserrat, sans-serif", }}>
            Tahap Proses Rekrutmen Kami
          </Typography>
          <Typography variant="body1" sx={bodyTypographyStyles(theme)}>
            Kami berkomitmen untuk memberikan proses rekrutmen yang jelas dan menyeluruh. Berikut adalah tahapan yang akan Anda lalui.
          </Typography>
          
          {/* Recruitment Stages */}
          <Grid container spacing={3} mt={4}>
            {stages.map((stage, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box 
                  sx={{
                    ...stageBoxStyles(theme), 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    textAlign: 'left',
                  }}
                >                  
                  <Typography variant="h3" sx={{ mb: 2, color: theme.palette.primary.main, fontWeight: 'bold', textAlign: 'left', alignSelf: 'flex-start' }}>                    
                    {stage.number}
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 2, color: theme.palette.primary.main, fontWeight: 'bold', textAlign: 'left', alignSelf: 'flex-start' }}>                    
                    {stage.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.text.primary }}>
                    {stage.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default RecruitmentPage;
