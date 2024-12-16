import React, { useState } from 'react';
import { Box, Typography, Container, Grid, Card, CardContent } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Kontak from './Section/Kontak';
import { solutions, testimonials } from '../Components/dataPage/Data/SolusiIndividu';
import Image from 'next/image';

const SolusiIndividu = () => {
  const theme = useTheme();
  const [page, setPage] = useState(1);
  const itemsPerPage = 2;

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  // Calculate the items to display based on the current page
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTestimonials = testimonials.slice(startIndex, endIndex);

  return (
    <Container maxWidth="xl" sx={{ mt: 25, mb: 10 }}>
      <Typography variant="h5" sx={{ mb: 4, fontWeight: 'bold', textAlign: 'center', color: theme.palette.primary.main }}>
        Cari solusi untuk anda pribadi?
      </Typography>
      
      <Grid container spacing={4} justifyContent="center"> {/* Centering the whole Grid */}
        {solutions.map((solution, index) => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={6} 
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center', 
                '& .MuiCard-root': {
                  width: '100%', 
                  maxWidth: '100%',
                },
                [theme.breakpoints.down('sm')]: {
                  '& .MuiCard-root': {
                    width: '100%', 
                  },
                },
              }}
            >
              <Card
                sx={{
                  textAlign: 'left',
                  p: 3,
                  boxShadow: 0, // Remove shadow
                  border: '1px solid #D8D8D8', // Blue border
                  height: '100%',
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Image
                      src={solution.icon}
                      alt={solution.title}
                      width={40}
                      height={40}
                      style={{
                        display: 'block',
                      }}
                    />
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: theme.palette.primary.main, marginLeft: '15px' }}>
                      {solution.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ color: theme.palette.text.primary }}>
                    {solution.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default SolusiIndividu;
