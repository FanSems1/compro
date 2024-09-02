import React from 'react';
import { Box, Typography, Container, Accordion, AccordionSummary, AccordionDetails, Divider, Grid, Button, useTheme } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Header from "../Section/Header";
import Heads from "../Utilis/Heads";
import FooterOne from "Components/Footer/FooterOne";
import FooterTwo from "Components/Footer/FooterTwo";
import FooterThree from "Components/Footer/FooterThree";
import BottomFooter from "Components/Footer/BottomFooter";
import { ThemeProvider } from '@mui/material/styles';

const FAQs = [
  {
    question: "Apa itu PT Eureka?",
    answer: "PT Eureka adalah anak perusahaan dari PT Erlangga yang berlokasi di Ciracas, Jakarta Timur. Kami berfokus pada inovasi, kolaborasi, dan pengembangan berkelanjutan."
  },
  {
    question: "Apa saja nilai-nilai perusahaan PT Eureka?",
    answer: "Nilai-nilai utama kami adalah Inovasi, Kolaborasi, dan Pengembangan Berkelanjutan."
  },
  {
    question: "Bagaimana cara bergabung dengan PT Eureka?",
    answer: "Anda dapat bergabung dengan kami melalui platform perekrutan seperti Glints, LinkedIn, dan JobStreet. Kami selalu mencari individu yang bersemangat dan berbakat."
  },
  {
    question: "Apa yang membedakan PT Eureka dari perusahaan lain?",
    answer: "Kami menciptakan lingkungan kerja yang inklusif dan mendukung pengembangan setiap individu. Kami juga mendorong inovasi dan kolaborasi di setiap level organisasi."
  },
  {
    question: "Apa saja program pelatihan yang ditawarkan di PT Eureka?",
    answer: "Kami menawarkan berbagai program pelatihan yang mencakup keterampilan teknis, kepemimpinan, dan pengembangan pribadi. Program-program ini dirancang untuk membantu karyawan mencapai potensi penuh mereka dan beradaptasi dengan perubahan industri."
  },
  {
    question: "Bagaimana PT Eureka mendukung keseimbangan kerja dan kehidupan pribadi?",
    answer: "PT Eureka berkomitmen untuk mendukung keseimbangan kerja dan kehidupan pribadi melalui kebijakan fleksibilitas kerja, cuti yang memadai, dan berbagai kegiatan perusahaan yang mendukung kesehatan mental dan fisik karyawan."
  }
];

const FAQPage = () => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Heads />
      <Header />
      <Container maxWidth="ld" sx={{ mt: 18, mb: 0 }}>
        <Box
          sx={{
            p: 6,
            borderRadius: 5,
            background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.primary.light} 100%)`,
            boxShadow: `0 8px 16px ${theme.palette.primary.box_shadow_black}`,
            mb: 6,
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              right: 0,
              width: '60%',
              height: '100%',
              backgroundImage: 'url(/images/faq-background-pattern.png)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              opacity: 0.1,
              zIndex: -1,
              transform: 'scale(1.2)',
            }
          }}
        >
          <Typography variant="h4" sx={{ mb: 4, textAlign: 'center', color: theme.palette.primary.main, fontWeight: 'bold' }}>
            Frequently Asked Questions (FAQ)
          </Typography>
          <Divider sx={{ mb: 4, borderColor: theme.palette.divider }} />
          {FAQs.map((faq, index) => (
            <Accordion
              key={index}
              sx={{
                mb: 2,
                borderRadius: 3,
                boxShadow: `0 4px 12px ${theme.palette.primary.box_shadow_black}`,
                '&:before': {
                  display: 'none',
                },
                '& .MuiAccordionSummary-root': {
                  background: theme.palette.background.paper,
                  borderBottom: `1px solid ${theme.palette.divider}`,
                  transition: 'background-color 0.3s ease',
                  '&:hover': {
                    background: theme.palette.action.hover,
                  },
                },
                '& .MuiAccordionSummary-content': {
                  margin: 0,
                },
                '& .MuiAccordionSummary-expandIcon': {
                  color: theme.palette.primary.main,
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                sx={{
                  px: 4,
                  py: 2,
                  borderRadius: 3,
                }}
              >
                <Typography variant="h6" sx={{ color: theme.palette.text.primary, fontWeight: 'bold' }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 4, py: 2, background: theme.palette.background.paper }}>
                <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
          <Box sx={{ mt: 6, textAlign: 'center' }}>
            <Typography variant="h6" sx={{ mb: 2, color: theme.palette.primary.main }}>
              Tidak menemukan jawaban yang Anda cari?
            </Typography>
            <Button variant="contained" color="primary" href="https://wa.me/+628852133333" sx={{ px: 4, py: 1.5 }}>
              Hubungi Kami
            </Button>
          </Box>
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

export default FAQPage;
