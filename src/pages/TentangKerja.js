import React from 'react';
import { Box, Typography, Container, Divider, Grid, Button } from '@mui/material';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import SchoolIcon from '@mui/icons-material/School';
import Header from "../Section/Header";
import Heads from "../Utilis/Heads";
import FooterOne from "Components/Footer/FooterOne";
import FooterTwo from "Components/Footer/FooterTwo";
import FooterThree from "Components/Footer/FooterThree";
import BottomFooter from "Components/Footer/BottomFooter";

const TentangKerja = () => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Heads />
      <Header />
      <Container maxWidth="ld" sx={{ mt: 5, mb:-2 }}>
        <Box
          sx={{
            p: 10,
            borderRadius: 5,
            background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.primary.light} 100%)`,
            boxShadow: `0 4px 8px ${theme.palette.primary.box_shadow_black}`,
            mb: 0,
            mt: 12,
          }}
        >
          <Typography variant="h4" sx={{ mb: 4, textAlign: 'center', color: theme.palette.primary.main }}>
            Tentang Kerja di PT Eureka
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, textAlign: 'justify', color: theme.palette.text.primary }}>
            Di PT Eureka, kami percaya bahwa setiap individu memiliki potensi luar biasa yang dapat dikembangkan dalam lingkungan kerja yang mendukung dan inspiratif. Kami berkomitmen untuk menciptakan tempat kerja yang tidak hanya menantang secara profesional tetapi juga memberikan keseimbangan yang sehat antara pekerjaan dan kehidupan pribadi.
          </Typography>
          <Divider sx={{ mb: 4, borderColor: theme.palette.divider }} />
          <Typography variant="h5" sx={{ mb: 3, color: theme.palette.primary.main }}>
            Kenapa Bergabung Dengan Kami?
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <WorkOutlineIcon sx={{ fontSize: 40, color: theme.palette.primary.main, mr: 2 }} />
                <Typography variant="body1" sx={{ color: theme.palette.text.primary }}>
                  <strong>Inovasi:</strong> Kami mendorong setiap karyawan untuk berinovasi dan mencari cara-cara baru untuk meningkatkan produktivitas dan efisiensi.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <PeopleOutlineIcon sx={{ fontSize: 40, color: theme.palette.primary.main, mr: 2 }} />
                <Typography variant="body1" sx={{ color: theme.palette.text.primary }}>
                  <strong>Kolaborasi:</strong> Kerja sama antar tim dan divisi sangat penting dalam mencapai tujuan bersama.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <SchoolIcon sx={{ fontSize: 40, color: theme.palette.primary.main, mr: 2 }} />
                <Typography variant="body1" sx={{ color: theme.palette.text.primary }}>
                  <strong>Pengembangan Berkelanjutan:</strong> Kami berkomitmen untuk terus meningkatkan kompetensi dan kemampuan karyawan melalui berbagai program pelatihan dan pendidikan.
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Divider sx={{ my: 4, borderColor: theme.palette.divider }} />
          <Typography variant="h5" sx={{ mb: 3, color: theme.palette.primary.main }}>
            Temukan Kesempatan Karir Kami
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, textAlign: 'justify', color: theme.palette.text.primary }}>
            Kami selalu mencari talenta terbaik untuk bergabung dengan tim kami. Temukan peluang karir yang sesuai dengan keterampilan dan minat Anda melalui platform berikut:
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                sx={{ mr: 2 }}
                href="https://glints.com/id/companies/pt-eureka-bookhouse/a98a603b-875b-4ce4-a4fa-2615d3402597"
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
                sx={{ mr: 2 }}
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
                href="https://www.jobstreet.co.id/en/job-search/job-vacancies/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lowongan di JobStreet
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
      <Grid container spacing={{ xl: 13, lg: 10, md: 5, sm: 10, xxs: 5 }}>
        <Grid item md={3} sm={6}>
          <FooterOne />
        </Grid>
        <Grid item md={3} sm={6} xxs={12}>
          <FooterTwo />
        </Grid>
        <Grid item md={3} sm={6} xxs={12}>
          <FooterThree />
        </Grid>
        <Grid item md={3} sm={6} xxs={12}></Grid>
      </Grid>
      <BottomFooter />
    </Container>
  );
};

export default TentangKerja;
