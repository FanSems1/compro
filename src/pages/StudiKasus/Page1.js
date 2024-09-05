import React, { useState, useCallback } from 'react';
import { Container, Typography, Grid, Divider, Button, Box, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, WhatsApp } from '@mui/icons-material';
import Header from 'Section/Header';
import Footer from 'Section/Footer';
import Pagination from '@mui/material/Pagination';
import caseStudyData from '../StudiKasus/StudiData'; // Import case study data
import Heads from 'Utilis/Heads';

const StudyCasePage = () => {
  const [page, setPage] = useState(1);
  const pageSize = 3; // Number of case studies per page

  const handleChange = useCallback((event, value) => {
    setPage(value);
  }, []);

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentCaseStudies = caseStudyData.slice(startIndex, endIndex);

  return (
    <>
      <Heads />
      <Header />
      <Container maxWidth="xl" sx={{ mt: 5, mb: 8 }}>

        {/* Section: Featured Case Study */}
        <Typography variant="h4" sx={{ mb: 4, textAlign: 'left', fontWeight: 'bold' }}>
          {caseStudyData[0].title}
        </Typography>
        <Divider sx={{ mb: 6 }} />

        <Grid container spacing={6}>
          <Grid item md={9} sm={12} xs={12}>
            <Box sx={{ boxShadow: 3, borderRadius: '8px', overflow: 'hidden', mb: 6 }}>
              <img
                src={caseStudyData[0]?.image} // Assuming the first case study entry is to be shown here
                alt={caseStudyData[0]?.title}
                style={{ width: '100%', height: 'auto' }}
              />
            </Box>
            <Box sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                {caseStudyData[0]?.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 2,
                  whiteSpace: 'pre-wrap', // Ensures whitespace and line breaks are preserved
                  overflowWrap: 'break-word', // Breaks long words to fit container
                }}
              >
                {caseStudyData[0]?.detail}
              </Typography>
            </Box>
          </Grid>
          <Grid item md={3} sm={12} xs={12} sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
              <IconButton
                component="a"
                href="https://www.facebook.com/sharer/sharer.php?u=your-url"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook />
              </IconButton>
              <IconButton
                component="a"
                href="https://twitter.com/intent/tweet?url=your-url&text=Check%20this%20out!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </IconButton>
              <IconButton
                component="a"
                href="https://api.whatsapp.com/send?text=your-url"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsApp />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Section: Other Case Studies */}
        <Typography variant="h4" sx={{ mt: 8, mb: 4, textAlign: 'left', fontWeight: 'bold' }}>
          Studi Kasus Lainnya
        </Typography>
        <Divider sx={{ mb: 6 }} />

        <Grid container spacing={6}>
          {currentCaseStudies.map((caseStudy, index) => (
            <Grid item md={4} sm={12} xs={12} key={index}>
              <Box sx={{ boxShadow: 3, borderRadius: '8px', overflow: 'hidden', mb: 6 }}>
                <img
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  style={{ width: '100%', height: 'auto' }}
                />
                <Box sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                    {caseStudy.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    {caseStudy.summary}
                  </Typography>
                  <Button
                    variant="text"
                    sx={{ fontWeight: 'bold' }}
                    href={caseStudy.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Selengkapnya
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Pagination
          count={Math.ceil(caseStudyData.length / pageSize)}
          page={page}
          onChange={handleChange}
          sx={{ mt: 6, display: 'flex', justifyContent: 'center' }}
        />
      </Container>
      <Footer />
    </>
  );
};

export default StudyCasePage;
