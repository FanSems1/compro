import React, { useState, useCallback } from 'react';
import { Container, Typography, Grid, Divider, IconButton, Box, Button, Pagination } from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  WhatsApp as WhatsAppIcon,
  CalendarToday,
  Category,
  Person,
} from '@mui/icons-material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import ButtonBase from '@mui/material/ButtonBase';
import Header from '../Section/Header';
import Footer from '../Section/Footer';
import Heads from 'Utilis/Heads';
import FloatingButton from 'Components/FloatingButton';
import Image from 'next/image';
import WhatsAppButton from 'Components/WhatsAppButton';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import axios from 'axios';
import sanitizeHtml from 'sanitize-html';  

// Custom styled icons
const CustomFacebookIcon = styled(FacebookIcon)({
  fontSize: 40,
  color: '#4267B2',
});

const CustomTwitterIcon = styled(TwitterIcon)({
  fontSize: 40,
  color: '#1DA1F2',
});

const CustomInstagramIcon = styled(InstagramIcon)({
  fontSize: 40,
  color: '#C13584',
});

const CustomWhatsAppIcon = styled(WhatsAppIcon)({
  fontSize: 40,
  color: '#25D366',
});

const truncateDescription = (description, limit = 20) => {
  if (description.length > limit) {
    return description.substring(0, limit) + '...'; 
  }
  return description;
};

const parseDescription = (html) => {
  const sanitizedHtml = sanitizeHtml(html, {
    allowedTags: ['b', 'strong', 'i', 'em', 'span'], // Allow essential tags
    allowedAttributes: {
      '*': ['style'], // Allow inline styles
    },
  });

  // Gantikan pola dengan elemen yang memiliki gaya
  const styledText = sanitizedHtml
    .replace(/<b>(.*?)<\/b>/g, '<span style="font-weight:bold;">$1</span>')
    .replace(/<strong>(.*?)<\/strong>/g, '<span style="font-weight:bold;">$1</span>')
    .replace(/<i>(.*?)<\/i>/g, '<span style="font-style:italic;">$1</span>')
    .replace(/<em>(.*?)<\/em>/g, '<span style="font-style:italic;">$1</span>');

  return styledText;
};

const CaseStudyPage = ({ caseStudy, caseStudyData }) => {
  const [page, setPage] = useState(1);
  const theme = useTheme();
  const pageSize = 3;

  const handleChange = useCallback((event, value) => {
    setPage(value);
  }, []);

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const displayedCaseStudies = (caseStudyData || []).slice((page - 1) * pageSize, page * pageSize);
  const currentCaseStudies = (caseStudyData || []).length;

  const boxStyle = {
    boxShadow: 1,
    borderRadius: '8px',
    overflow: 'hidden',
    mb: 6,
    height: '420px',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
  };

  // Function to get the current URL for sharing
  const getCurrentUrl = () => {
    if (typeof window !== 'undefined') {
      return window.location.href;
    }
    return '';
  };

  return (
    <>
      <Heads />
      <Header />
      <Container maxWidth="xl" sx={{ mt: 15, mb: 8 }}>
        {/* Case Study Details */}
        <Typography
          variant="h4"
          sx={{ mb: 4, textAlign: 'left', fontWeight: 'bold', color: theme.palette.primary.main }}
        >
          {caseStudy.title}
        </Typography>
        <Divider sx={{ mb: 6 }} />
        <Grid container spacing={6}>
          <Grid item md={9} sm={12} xs={12}>
            <div sx={{ borderRadius: '8px', overflow: 'hidden', mt: -2, mb: 3 }}>
              <Typography
                variant="body2"
                sx={{
                  mb: 1,
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'center',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                <Box
                  sx={{
                    padding: '4px 8px',
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 105, 135, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    transition: 'all 0.3s ease-in-out',
                    marginRight: '16px',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 105, 135, 0.2)',
                      borderColor: 'primary.main',
                      cursor: 'pointer',
                    },
                  }}
                >
                  <CalendarToday sx={{ color: 'text.secondary' }} />
                  Date: {new Date(caseStudy.created_at).toLocaleDateString()}
                </Box>

                <Box
                  sx={{
                    padding: '4px 8px',
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(86, 206, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    transition: 'all 0.3s ease-in-out',
                    marginRight: '16px',
                    '&:hover': {
                      backgroundColor: 'rgba(86, 206, 255, 0.2)',
                      borderColor: 'primary.main',
                      cursor: 'pointer',
                    },
                  }}
                >
                  <Category sx={{ color: 'text.secondary' }} />
                  Category: {caseStudy.category}
                </Box>

                <Box
                  sx={{
                    padding: '4px 8px',
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(155, 89, 182, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      backgroundColor: 'rgba(155, 89, 182, 0.2)',
                      borderColor: 'primary.main',
                      cursor: 'pointer',
                    },
                  }}
                >
                  <Person sx={{ color: 'text.secondary' }} />
                  Author: {caseStudy.user?.username || 'Unknown Author'}
                  </Box>
              </Typography>
            </div>
            <div style={{ paddingLeft: '20px' }}>
              <div style={{ marginTop: 40 }}>
                <Image
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  width={960}
                  height={450}
                  style={{ width: '100%', height: 'auto', ...imageStyle }}
                />
              </div>
            </div>
            <Box sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                {caseStudy.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 2,
                  whiteSpace: 'pre-wrap',
                  overflowWrap: 'break-word',
                  textAlign: 'justify'
                }}
              >
                  <span
    dangerouslySetInnerHTML={{
      __html: (parseDescription(caseStudy.description)),
    }}
  />
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            md={3}
            sm={12}
            xs={12}
            sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end' }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
              <Typography variant="body1" sx={{ mb: 2, fontWeight: 'bold' }}>
                Share it to your friends
              </Typography>
              <IconButton
                component="a"
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getCurrentUrl())}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <CustomFacebookIcon />
              </IconButton>
              <IconButton
                component="a"
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                  getCurrentUrl()
                )}&text=Check%20this%20out!`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <CustomTwitterIcon />
              </IconButton>
              <IconButton component="a" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <CustomInstagramIcon />
              </IconButton>
              <IconButton
                component="a"
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(getCurrentUrl())}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <CustomWhatsAppIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Section: Other Case Studies */}
        <Typography variant="h4" sx={{ mt: 18, mb: 4, textAlign: 'left', fontWeight: 'bold' }}>
          Studi Kasus Lainnya
        </Typography>
        <Divider sx={{ mb: 6 }} />
        <Grid container spacing={6}>
          {displayedCaseStudies.map((otherCaseStudy, index) => (
            <Grid otherCaseStudy md={4} sm={12} xs={12} key={index}>
              <Box sx={{ paddingLeft: '50px', borderRadius: '8px', overflow: 'hidden', mt: 9, mb: 6 }}>
                <Image
                  src={otherCaseStudy.image} 
                  alt={otherCaseStudy.title}
                  width={452}
                  height={240}
                  style={{ width: '100%', height: '320px', objectFit: 'cover' }}
                />
                <Box sx={{ padding: '0px' }}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                    {otherCaseStudy.title}
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
                    href={`/studycase/${otherCaseStudy.title.replace(/\s+/g, '-').toLowerCase()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Selengkapnya
                    <ArrowForwardTwoToneIcon sx={{ marginLeft: 0.5, height: '18px' }} /> 
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <PrevButton onClick={() => setPage(page - 1)} enabled={page > 1} />
          <NextButton onClick={() => setPage(page + 1)} enabled={page < Math.ceil(currentCaseStudies / pageSize)} />
        </Box>
      </Container>
      <FloatingButton />
      <WhatsAppButton />
      <Footer />
    </>
  );
};

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

export async function getStaticPaths() {
  try {
    // Fetch data from API
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://3wzg6m6x-5000.asse.devtunnels.ms';
    const res = await axios.get(`${baseUrl}/api/study`);
    const caseStudyData = res.data;

    // Check the data structure
    console.log('caseStudyData:', caseStudyData);

    // Ensure it's an array
    if (!Array.isArray(caseStudyData)) {
      throw new Error('Expected caseStudyData to be an array');
    }

    // Generate paths based on the case study titles
    const paths = caseStudyData.map((caseStudy) => ({
      params: { title: caseStudy.title.replace(/\s+/g, '-').toLowerCase() },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error('Failed to fetch case study data:', error);
    return {
      paths: [],
      fallback: false,
    };
  }
}

export async function getStaticProps({ params }) {
  const { title } = params;

  try {
    // Fetch data from API
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://3wzg6m6x-5000.asse.devtunnels.ms';
    const res = await axios.get(`${baseUrl}/api/study`);
    const caseStudyData = res.data;

    // Find the specific case study by title
    const originalTitle = title.replace(/-/g, ' ').toLowerCase();

    const caseStudy = caseStudyData.find(
      (item) => item.title.toLowerCase() === originalTitle
    );

    if (!caseStudy) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        caseStudy,
        caseStudyData,
      },
    };
  } catch (error) {
    console.error('Failed to fetch case study in getStaticProps:', error);
    return {
      notFound: true,
    };
  }
}

export default CaseStudyPage;