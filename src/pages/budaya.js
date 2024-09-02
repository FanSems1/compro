import React from 'react';
import { Box, Typography, Container, Divider, Grid, Link, Button, TextField } from '@mui/material';
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

const Budaya = () => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Heads />
      <Header />
      <Container maxWidth="ld" sx={{ mt: 5 }}>
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
            Budaya Perusahaan PT Eureka
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, textAlign: 'justify', color: theme.palette.text.primary }}>
            PT Eureka, anak perusahaan dari PT Erlangga yang berlokasi di Ciracas, Jakarta Timur, memiliki budaya perusahaan yang
            berorientasi pada inovasi, kolaborasi, dan pengembangan berkelanjutan. Kami percaya bahwa keberhasilan perusahaan
            tidak hanya diukur dari pencapaian finansial, tetapi juga dari bagaimana kami menciptakan lingkungan kerja yang
            mendukung, inklusif, dan berfokus pada pengembangan setiap individu.
          </Typography>
          <Divider sx={{ mb: 4, borderColor: theme.palette.divider }} />
          <Typography variant="h5" sx={{ mb: 3, color: theme.palette.primary.main }}>
            Nilai-Nilai Perusahaan
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
            Lingkungan Kerja
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'justify', color: theme.palette.text.primary }}>
            PT Eureka berusaha menciptakan lingkungan kerja yang sehat dan dinamis, di mana setiap karyawan merasa dihargai dan didukung
            untuk mencapai potensi terbaik mereka. Kami juga memastikan keseimbangan antara pekerjaan dan kehidupan pribadi, yang
            merupakan aspek penting dari budaya perusahaan kami.
          </Typography>
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

export default Budaya;
