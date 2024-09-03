import React, { useState } from 'react';
import { Container, Typography, Grid, Divider, Button, useTheme, Pagination } from '@mui/material';
import Header from "../Section/Header";
import Heads from "../Utilis/Heads";
import FooterOne from "Components/Footer/FooterOne";
import FooterTwo from "Components/Footer/FooterTwo";
import FooterThree from "Components/Footer/FooterThree";
import BottomFooter from "Components/Footer/BottomFooter";
import Contact from 'Section/Contact';
import caseStudies from './Data/studi-kasus';

const CaseStudyPage = () => {
  const theme = useTheme();
  const [page, setPage] = useState(1);
  const pageSize = 3; // Number of case studies per page

  const handleChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentStudies = caseStudies.slice(startIndex, endIndex);

  return (
    <>
      <Heads />
      <Header />
      <Container maxWidth="ld" sx={{ mt: 18, mb: 8 }}>
        <Typography
          variant="h4"
          sx={{ mb: 4, textAlign: 'center', color: theme.palette.primary.main, fontWeight: 'bold' }}
        >
          Studi Kasus Kami
        </Typography>
        <Divider sx={{ mb: 6, borderColor: theme.palette.divider }} />

        <Grid container spacing={6}>
          {currentStudies.map((study, index) => (
            <Grid item md={12} sm={12} xs={12} key={index}>
              <Grid container alignItems="center" spacing={4}>
                <Grid item md={5} sm={6} xs={12}>
                  <img
                    src={study.image}
                    alt={study.title}
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '8px',
                      boxShadow: `0 4px 12px ${theme.palette.primary.box_shadow_black}`,
                    }}
                  />
                </Grid>
                <Grid item md={7} sm={6} xs={12}>
                  <Typography
                    variant="h5"
                    sx={{ mb: 2, fontWeight: 'bold', color: theme.palette.primary.main }}
                  >
                    {study.title}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, color: theme.palette.text.secondary }}>
                    {study.description}
                  </Typography>
                  <Button variant="text" color="primary" sx={{ fontWeight: 'bold' }}>
                    Selengkapnya
                  </Button>
                </Grid>
              </Grid>
              <Divider sx={{ mt: 6, borderColor: theme.palette.divider }} />
            </Grid>
          ))}
        </Grid>

        <Pagination
          count={Math.ceil(caseStudies.length / pageSize)}
          page={page}
          onChange={handleChange}
          sx={{ mt: 6, display: 'flex', justifyContent: 'center' }}
        />
      </Container>

      <Contact />
      <Footer />
    </>
  );
};

const Footer = () => {
  return (
    <Container maxWidth={false} disableGutters as="footer" sx={{ pt: '5em' }}>
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

export default CaseStudyPage;
