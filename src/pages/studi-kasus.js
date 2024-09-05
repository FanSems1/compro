import React, { useState, useCallback } from 'react';
import { Container, Typography, Grid, Divider, Button, useTheme, Pagination, Box } from '@mui/material';
import Header from "../Section/Header";
import Heads from "../Utilis/Heads";
import CaseStudies from './StudiKasus/StudiData'; // Import case studies data
import Company from 'Components/Blog/Company';
import About from 'Section/About';
import Contact from 'Section/Kontak';
import Footer from 'Section/Footer';

const CaseStudyPage = () => {
  const theme = useTheme();
  const [page, setPage] = useState(1);
  const [editorPage, setEditorPage] = useState(1); // State for pagination in the "Terbaru" section
  const pageSize = 2; // Number of case studies per page in Paling Populer section
  const editorPageSize = 3; // Number of case studies per page in Terbaru section

  const handleChange = useCallback((event, value) => {
    setPage(value);
  }, []);

  const handleEditorChange = useCallback((event, value) => {
    setEditorPage(value);
  }, []);

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentCaseStudies = CaseStudies.slice(startIndex, endIndex);

  // Sort Case Studies by views in descending order and select the top 6 for Editor's Picks
  const editorPicks = CaseStudies
    .sort((a, b) => b.views - a.views)
    .slice(0, 6);

  // Pagination for Editor's Picks
  const editorStartIndex = (editorPage - 1) * editorPageSize;
  const editorEndIndex = editorStartIndex + editorPageSize;
  const currentEditorPicks = editorPicks.slice(editorStartIndex, editorEndIndex);

  return (
    <>
      <Heads />
      <Header />
      <Container maxWidth="xl" sx={{ mt: 5, mb: 8 }}>
        {/* Banner and Text Section */}
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              sx={{ mb: 2, color: theme.palette.primary.main, fontWeight: 'bold' }}
            >
              Temukan info menarik yang telah kami sajikan untuk anda.
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: theme.palette.text.secondary }}
            >
              Kami memiliki banyak solusi untuk membantu anda meraih visi dan misi bisnis anda secara professional.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '8px',
              boxShadow: 3,
              backgroundImage: 'url(/path/to/banner-image.jpg)', // Replace with your banner image path
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '250px' // Adjust height as needed
            }} />
          </Grid>
        </Grid>

        {/* Section: Paling Populer */}
        <Typography
          variant="h4"
          sx={{ mt: 8, mb: 4, textAlign: 'left', color: theme.palette.primary.main, fontWeight: 'bold' }}
        >
          Paling Populer
        </Typography>
        <Divider sx={{ mb: 6, borderColor: theme.palette.divider }} />

        {/* Paling Populer Section */}
        <Grid container spacing={6}>
          {currentCaseStudies.map((caseStudy, index) => (
            <Grid item md={6} sm={12} xs={12} key={index}> {/* 2 columns for Paling Populer section */}
              <Box sx={{ boxShadow: 3, borderRadius: '8px', overflow: 'hidden', mb: 6 }}>
                <img
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  style={{ width: '100%', height: 'auto' }}
                />
                <Box sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: theme.palette.primary.main }}>
                    {caseStudy.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mb: 2 }}>
                    {caseStudy.description}
                  </Typography>
                  <Button
                    variant="text"
                    color="primary"
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
          count={Math.ceil(CaseStudies.length / pageSize)}
          page={page}
          onChange={handleChange}
          sx={{ mt: 6, display: 'flex', justifyContent: 'center' }}
        />
                    <Company />
        {/* Section: Terbaru */}
        <Typography
          variant="h4"
          sx={{ mt: 8, mb: 4, textAlign: 'left', color: theme.palette.primary.main, fontWeight: 'bold' }}
        >
          Terbaru
        </Typography>
        <Divider sx={{ mb: 6, borderColor: theme.palette.divider }} />

        {/* Terbaru Section */}
        <Grid container spacing={6}>
          {currentEditorPicks.map((caseStudy, index) => (
            <Grid item md={4} sm={12} xs={12} key={index}> {/* 3 columns for Terbaru section */}
              <Box sx={{ boxShadow: 3, borderRadius: '8px', overflow: 'hidden', mb: 6 }}>
                <img
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  style={{ width: '100%', height: 'auto' }}
                />
                <Box sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: theme.palette.primary.main }}>
                    {caseStudy.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mb: 2 }}>
                    {caseStudy.description}
                  </Typography>
                  <Button
                    variant="text"
                    color="primary"
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
          count={Math.ceil(editorPicks.length / editorPageSize)}
          page={editorPage}
          onChange={handleEditorChange}
          sx={{ mt: 6, display: 'flex', justifyContent: 'center' }}
        />
              <About />
              <Contact />
              <Footer />
      </Container>
    </>
  );
};

export default CaseStudyPage;
