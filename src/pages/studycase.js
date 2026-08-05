import React, { useState, useEffect, useCallback } from 'react';
import { Container, Typography, Grid, Divider, Button, useTheme, Box, ButtonBase, FormControl, Select, MenuItem } from '@mui/material';
import Header from "./Section/Header";
import Heads from "../Utilis/Heads";
import Footer from './Section/Footer';
import SoluIndiGambar from '../Assets/Pict/soluindi.png';
import FloatingButton from 'Components/FloatingButton';
import WhatsAppButton from 'Components/WhatsAppButton';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import Skill from './Section/Skill';
import Image from 'next/image';
import axios from 'axios'; 
import sanitizeHtml from 'sanitize-html';  

const truncateDescription = (description, limit = 20) => {
  if (description.length > limit) {
    return description.substring(0, limit) + '...'; 
  }
  return description;
};

const parseDescription = (html) => {
  const sanitizedHtml = sanitizeHtml(html, {
    allowedTags: [], // Hapus semua tag
  });

  // Gantikan pola dengan elemen yang memiliki gaya
  const styledText = sanitizedHtml
    .replace(/<b>(.*?)<\/b>/g, '<span style="font-weight:bold;">$1</span>')
    .replace(/<strong>(.*?)<\/strong>/g, '<span style="font-weight:bold;">$1</span>')
    .replace(/<i>(.*?)<\/i>/g, '<span style="font-style:italic;">$1</span>')
    .replace(/<em>(.*?)<\/em>/g, '<span style="font-style:italic;">$1</span>');

  return styledText;
};

const CaseStudyPage = () => {
  const theme = useTheme();
  const [page, setPage] = useState(1);
  const [selectedBisnisUnit, setSelectedBisnisUnit] = useState('All');
  const [caseStudyData, setCaseStudyData] = useState([]); // State for case study data
  const pageSize = 6; // Number of case studies per page

  // Fetch job data from API
  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://3wzg6m6x-5000.asse.devtunnels.ms';
        const response = await axios.get(`${baseUrl}/api/study`);
        setCaseStudyData(response.data); // Set the fetched data
      } catch (error) {
        console.error('Error fetching case study data:', error);
        setCaseStudyData([]);
      }
    };

    fetchJobData();
  }, []);

  const handleChange = useCallback((event, value) => {
    setPage(value);
  }, []);

  const handleBisnisUnitChange = (event) => {
    setSelectedBisnisUnit(event.target.value);
    setPage(1); // Reset to first page when BisnisUnit changes
  };

  // Filter case studies by BisnisUnit
  const filteredCaseStudies = selectedBisnisUnit === 'All' 
    ? caseStudyData 
    : caseStudyData.filter(caseStudy => caseStudy.bu_master.name === selectedBisnisUnit); // Filter by bu_master.name

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentCaseStudies = filteredCaseStudies.slice(startIndex, endIndex);

  return (
    <>
      <Heads />
      <Header />
      <Container maxWidth="xl" sx={{ mt: 15, mb: 8 }}>
        {/* Banner and Text Section */}
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              sx={{ mb: 2, color: theme.palette.primary.main, fontWeight: 'bold' }}
            >
              Temukan info menarik yang telah kami sajikan untuk anda.
            </Typography>
            <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
              Kami memiliki banyak solusi untuk membantu anda meraih visi dan misi bisnis anda secara professional.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Image
              src={SoluIndiGambar}
              alt="Banner"
              width={630}
              height={367}
              style={{
                borderRadius: '8px',
                objectFit: 'cover',
              }}
            />
          </Grid>
        </Grid>
        <Skill />
        <Grid container alignItems="center" justifyContent="space-between">
          <Typography
            variant="h4"
            sx={{ mt: 8, mb: 4, textAlign: 'left', color: theme.palette.primary.main, fontWeight: 'bold' }}
          >
            Studi Kasus
          </Typography>
          <FormControl variant="outlined" sx={{ minWidth: 350, mt: 8 }}>
            <Select
              value={selectedBisnisUnit}
              onChange={handleBisnisUnitChange}
              displayEmpty
              inputProps={{ 'aria-label': 'BisnisUnit' }}
            >
              <MenuItem value="All">All Bisnis Unit</MenuItem>
              {[...new Set(caseStudyData.map(caseStudy => caseStudy.bu_master.name))].map((bisnisUnit, index) => (
                <MenuItem key={index} value={bisnisUnit}>
                  {bisnisUnit}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Divider sx={{ mb: 6, borderColor: theme.palette.divider }} />

        <Grid container spacing={6}>
  {currentCaseStudies.map((caseStudy, index) => (
    <Grid item md={6} sm={12} xs={12} key={index}> 
      <div sx={{ boxShadow: 1, borderRadius: '8px', overflow: 'hidden', mb: 8 }}>
        <Image
          src={caseStudy.image}
          alt={caseStudy.title}
          width={650} 
          height={380} 
          style={{ width: '100%', height: '320px', objectFit: 'cover' }}
        />
        <Box>
          <Typography variant="h6" sx={{ mt: 2, mb: 2, fontWeight: 'bold', color: 'black' }}>
            {caseStudy.title}
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
          <span
    dangerouslySetInnerHTML={{
      __html: truncateDescription(parseDescription(caseStudy.description), 20),
    }}
  />          
  </Typography>
          <Button
            variant="text"
            color="primary"
            width="194"
            height="41"
            sx={{
              fontWeight: 'bold',
              '&:hover': {
                borderRadius: '12px',
                backgroundColor: '#0F2296', 
                color: 'white', 
              },
            }}
            href={`/studycase/${caseStudy.title.replace(/\s+/g, '-').toLowerCase()}`}
            rel="noopener noreferrer"
          > 
            Selengkapnya
            <ArrowForwardTwoToneIcon sx={{ marginLeft: 0.5, height: '18px' }} /> 
          </Button>
        </Box>
      </div>
    </Grid>
  ))}
</Grid>

        {/* Custom Pagination */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', mt: 6 }}>
          <PrevButton onClick={() => setPage(page - 1)} enabled={page > 1} />
          <NextButton onClick={() => setPage(page + 1)} enabled={page < Math.ceil(filteredCaseStudies.length / pageSize)} />
        </Box>
      </Container>

      <Footer />
      <FloatingButton />
      <WhatsAppButton />
    </>
  );
};

// Button components for custom navigation
const PrevButton = ({ enabled, onClick }) => (
  <ButtonBase
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      backgroundColor: enabled ? '#0F2296' : '#cccccc',
      borderRadius: '0',
      width: '35px',
      height: '33px',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      cursor: enabled ? 'pointer' : 'not-allowed',
      marginRight: '1em',
      '&:active': {
        color: 'black',
      },
    }}
    onClick={enabled ? onClick : null}
    disabled={!enabled}
  >
    <ChevronLeft />
  </ButtonBase>
);

const NextButton = ({ enabled, onClick }) => (
  <ButtonBase
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      backgroundColor: enabled ? '#0F2296' : '#cccccc',
      borderRadius: '0',
      width: '35px',
      height: '33px',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      cursor: enabled ? 'pointer' : 'not-allowed',
      '&:active': {
        color: 'black',
      },
    }}
    onClick={enabled ? onClick : null}
    disabled={!enabled}
  >
    <ChevronRight />
  </ButtonBase>
);

export default CaseStudyPage;
