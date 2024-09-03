import React, { useState, useCallback } from 'react';
import { Container, Typography, Grid, Divider, Button, useTheme, Pagination } from '@mui/material';
import Header from "../Section/Header";
import Heads from "../Utilis/Heads";
import FooterOne from "Components/Footer/FooterOne";
import FooterTwo from "Components/Footer/FooterTwo";
import FooterThree from "Components/Footer/FooterThree";
import BottomFooter from "Components/Footer/BottomFooter";
import Blogs from './Data/blog'; // Import blog data

const BlogPage = () => {
  const theme = useTheme();
  const [page, setPage] = useState(1);
  const pageSize = 3; // Number of blogs per page

  // Memoized handler to avoid unnecessary re-renders
  const handleChange = useCallback((event, value) => {
    setPage(value);
  }, []);

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentBlogs = Blogs.slice(startIndex, endIndex);

  return (
    <>
      <Heads />
      <Header />
      <Container maxWidth="ld" sx={{ mt: 18, mb: 8 }}>
        <Typography
          variant="h4"
          sx={{ mb: 4, textAlign: 'center', color: theme.palette.primary.main, fontWeight: 'bold' }}
        >
          Don’t miss every news about us!
        </Typography>
        <Divider sx={{ mb: 6, borderColor: theme.palette.divider }} />

        <Grid container spacing={6}>
          {currentBlogs.map((blog, index) => (
            <Grid item md={12} sm={12} xs={12} key={index}>
              <Grid container alignItems="center" spacing={4}>
                <Grid item md={5} sm={6} xs={12}>
                  <img
                    src={blog.image}
                    alt={blog.title}
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '8px',
                      boxShadow: `0 4px 12px ${theme.palette.primary.box_shadow_black}`,
                      transition: 'transform 0.3s',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
                    }}
                  />
                </Grid>
                <Grid item md={7} sm={6} xs={12}>
                  <Typography
                    variant="h5"
                    sx={{ mb: 2, fontWeight: 'bold', color: theme.palette.primary.main }}
                  >
                    {blog.title}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, color: theme.palette.text.secondary }}>
                    {blog.content}
                  </Typography>
                  <Button
                    variant="text"
                    color="primary"
                    sx={{ fontWeight: 'bold' }}
                    href={blog.link} // Link to detailed blog post
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Selengkapnya
                  </Button>
                </Grid>
              </Grid>
              <Divider sx={{ mt: 6, borderColor: theme.palette.divider }} />
            </Grid>
          ))}
        </Grid>

        <Pagination
          count={Math.ceil(Blogs.length / pageSize)}
          page={page}
          onChange={handleChange}
          sx={{ mt: 6, display: 'flex', justifyContent: 'center' }}
        />
      </Container>
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

export default BlogPage;
