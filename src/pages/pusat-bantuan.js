import React, { useState } from 'react';
import { Box, Typography, Container, Grid, Button, TextField, Collapse, IconButton, Pagination, Paper } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import ChatIcon from '@mui/icons-material/Chat';
import { faqs } from './Data/pusat-bantuan'; // Correct path to the FAQ data
import styles from './Style/pusat-bantuan'; // Correct path to the styles
import { useTheme } from '@mui/material/styles';
import Header from '../Section/Header';
import Heads from '../Utilis/Heads';
import FooterOne from 'Components/Footer/FooterOne';
import FooterTwo from 'Components/Footer/FooterTwo';
import FooterThree from 'Components/Footer/FooterThree';
import BottomFooter from 'Components/Footer/BottomFooter';
import Contact from 'Section/Contact';

const HelpCenter = () => {
  const theme = useTheme();
  const classes = styles(theme);

  const [searchTerm, setSearchTerm] = useState('');
  const [expanded, setExpanded] = useState(null);
  const [showSearch, setShowSearch] = useState(true);
  const [page, setPage] = useState(1);
  const [isChatOpen, setChatOpen] = useState(false);
  const itemsPerPage = 5;

  const handleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const toggleChat = () => {
    setChatOpen(!isChatOpen);
  };

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedFaqs = filteredFaqs.slice((page - 1) * itemsPerPage, page * itemsPerPage);
  const totalPages = Math.ceil(filteredFaqs.length / itemsPerPage);

  return (
    <Container maxWidth="ld" sx={{ ...classes.container, mt: 13, mb: 4 }}>
      <Heads />
      <Header />
      <Box sx={{ ...classes.box, mt: 4, mb: 4 }}>
        <Typography variant="h4" sx={{ ...classes.heading, mb: 3 }}>
          Pusat Bantuan
        </Typography>

        <Box sx={{ ...classes.searchContainer, mb: 4 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Cari di Pusat Bantuan"
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={classes.searchInput}
            InputProps={{
              endAdornment: (
                <IconButton onClick={() => setShowSearch(!showSearch)}>
                  {showSearch ? <CloseIcon /> : <SearchIcon />}
                </IconButton>
              ),
            }}
          />
        </Box>

        {showSearch && (
          <Box sx={{ mb: 5 }}>
            <Typography variant="h5" sx={{ ...classes.sectionTitle, mb: 3 }}>
              FAQ
            </Typography>
            <Grid container spacing={4}>
              {paginatedFaqs.length > 0 ? (
                paginatedFaqs.map((faq, index) => (
                  <Grid item xs={12} key={index}>
                    <Box sx={{ ...classes.faqBox, mb: 3 }}>
                      <Button
                        fullWidth
                        variant="outlined"
                        color="primary"
                        onClick={() => handleExpand(index)}
                        endIcon={<HelpOutlineIcon />}
                        sx={classes.faqButton}
                      >
                        <Typography variant="body1" sx={{ flex: 1 }}>
                          {faq.question}
                        </Typography>
                        <Typography variant="body2">
                          {expanded === index ? '-' : '+'}
                        </Typography>
                      </Button>
                      <Collapse in={expanded === index}>
                        <Box sx={classes.faqAnswer}>
                          <Typography variant="body2">{faq.answer}</Typography>
                        </Box>
                      </Collapse>
                    </Box>
                  </Grid>
                ))
              ) : (
                <Grid item xs={12}>
                  <Typography variant="body1" sx={{ color: '#777' }}>
                    Tidak ada hasil yang ditemukan.
                  </Typography>
                </Grid>
              )}
            </Grid>
          </Box>
        )}

        {filteredFaqs.length > itemsPerPage && (
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={(event, value) => setPage(value)}
              color="primary"
            />
          </Box>
        )}
      </Box>

      {/* Contact Options */}
      <Box sx={classes.contactBox}>
        <Typography variant="h5" sx={{ mb: 3, textAlign: 'center' }}>
          Hubungi Kami
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={3}>
            <Button
              fullWidth
              variant="contained"
              color="success"
              startIcon={<WhatsAppIcon />}
              href="https://wa.me/0857797994613" // Replace with your WhatsApp link
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              startIcon={<InstagramIcon />}
              href="https://instagram.com/eureka" // Replace with your Instagram link
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              startIcon={<EmailIcon />}
              href="mailto:eurekaid@gmail.com" // Replace with your email address
            >
              Gmail
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button
              fullWidth
              variant="contained"
              color="info"
              startIcon={<ChatIcon />}
              onClick={toggleChat}
            >
              Chat Live
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* Live Chat Bubble and Window */}
      <IconButton
        onClick={toggleChat}
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          backgroundColor: 'info.main',
          color: '#fff',
          '&:hover': {
            backgroundColor: 'info.dark',
          },
        }}
      >
        <ChatIcon />
      </IconButton>

      {isChatOpen && (
        <Paper
          elevation={4}
          sx={{
            position: 'fixed',
            bottom: 70,
            right: 16,
            width: 300,
            maxHeight: 400,
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            overflowY: 'auto',
          }}
        >
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">Live Chat</Typography>
            <IconButton size="small" onClick={toggleChat}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Typography variant="body2">
            Live Chat feature coming soon!
          </Typography>
          {/* Replace with your live chat component */}
        </Paper>
      )}

      <Contact />
      <Footer />
    </Container>
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

export default HelpCenter;
