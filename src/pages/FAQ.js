import React from "react";
import {
  Typography,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  Grid,
  useTheme,
  Paper,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ThemeProvider } from "@mui/material/styles";
import FAQs from "../Components/dataPage/Data/FAQS"; 
import Kontak from './Section/Kontak';

const FAQPage = () => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
        <div
          sx={{
            p: { xs: 3, sm: 5 },
            borderRadius: 4,
            background: "rgba(255, 255, 255, 0.25)",
            backdropFilter: "blur(15px)",
            border: "1px solid rgba(255, 255, 255, 0.18)",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              mb: 4,
              textAlign: "center",
              fontSize: "36px",
              color: theme.palette.primary.main,
              fontWeight: "bold",
              textTransform: "uppercase",
              position: "relative",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Frequently Asked Questions
          </Typography>
          <Divider
            sx={{ mb: 4, borderColor: theme.palette.divider, borderWidth: 2 }}
          />

        <Grid container spacing={4}>
          <Grid item xs={12}>
            {Array.isArray(FAQs) && FAQs.length > 0 ? (
              FAQs.map((faq, index) => (
                <Accordion
                  key={index}
                  sx={{
                    mb: 3,
                    borderRadius: 3,
                    transition: "0.3s ease-in-out",
                    "&:before": {
                      display: "none",
                    },
                    "& .MuiAccordionSummary-root": {
                      borderRadius: 2,
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      transition: "background-color 0.3s ease",
                      "&:hover": {
                        backgroundColor: theme.palette.primary.main,
                        "& .faq-text": {
                          color: "#FFFFFF",
                        },
                        "& .MuiSvgIcon-root": {
                          color: "#FFFFFF",
                        },
                      },
                    },
                    "& .MuiAccordionSummary-content": {
                      color: theme.palette.primary.contrastText,
                      fontWeight: "bold",
                    },
                    "& .MuiAccordionDetails-root": {
                      background: theme.palette.background.default,
                      borderRadius: "0 0 8px 8px",
                      padding: theme.spacing(2, 3),
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        sx={{
                          color: "#0F2296", 
                        }}
                      />
                    }
                    aria-controls={`panel${index}-content`}
                    id={`panel${index}-header`}
                    sx={{
                      padding: theme.spacing(1, 4),
                      backgroundColor: theme.palette.primary.light,
                      "&:hover": {
                        backgroundColor: theme.palette.primary.main,
                        "& .MuiSvgIcon-root": {
                          color: "#FFFFFF", 
                        },
                      },
                    }}
                  >
                    <Typography
                      variant="h6"
                      className="faq-text"
                      sx={{
                        fontWeight: "bold",
                        fontSize: "18px",
                        color: faq.question === "Apa itu Eureka?" ? "#0F2296" : "#0F2296",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      padding: theme.spacing(2, 3),
                      backgroundColor: "rgba(255, 255, 255, 0.25)",
                      borderTop: `1px solid ${theme.palette.divider}`,
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ color: theme.palette.text.secondary }}
                    >
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))
            ) : (
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  textAlign: "center",
                }}
              >
                No FAQs available at the moment.
              </Typography>
            )}
          </Grid>
        </Grid>

        </div>
        <Kontak />
      </Container>
    </ThemeProvider>
  );
};

export default FAQPage;
