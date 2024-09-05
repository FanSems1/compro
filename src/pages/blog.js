import React, { useState, useCallback } from 'react';
import { Container, Typography, Grid, Divider, Button, useTheme, Pagination, Box } from '@mui/material';
import Header from "../Section/Header";
import Heads from "../Utilis/Heads";
import Blogs from './Blog/blog';

const BlogPage = () => {
  const theme = useTheme();
  const [page, setPage] = useState(1);
  const pageSize = 3; // Number of blogs per page

  const handleChange = useCallback((event, value) => {
    setPage(value);
  }, []);

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentBlogs = Blogs.slice(startIndex, endIndex);

  // Sort Blogs by views in descending order and select the top 3 for Editor's Picks
  const editorPicks = Blogs
    .sort((a, b) => b.views - a.views)
    .slice(0, 3); 

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
            <img sx={{
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

        {/* Section: Latest Blogs */}
        <Typography
          variant="h4"
          sx={{ mt: 8, mb: 4, textAlign: 'left', color: theme.palette.primary.main, fontWeight: 'bold' }}
        >
          Latest
        </Typography>
        <Divider sx={{ mb: 6, borderColor: theme.palette.divider }} />

        {/* Latest Blogs Section */}
        <Grid container spacing={6}>
          {currentBlogs.map((blog, index) => (
            <Grid item md={4} sm={12} xs={12} key={index}> {/* 3 columns for Latest section */}
              <Box sx={{ boxShadow: 3, borderRadius: '8px', overflow: 'hidden', mb: 6 }}>
                <img
                  src={blog.image}
                  alt={blog.title}
                  style={{ width: '100%', height: 'auto' }}
                />
                <Box sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: theme.palette.primary.main }}>
                    {blog.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mb: 2 }}>
                    {blog.content}
                  </Typography>
                  <Button
                    variant="text"
                    color="primary"
                    sx={{ fontWeight: 'bold' }}
                    href={blog.link}
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

        {/* Section: Editor's Picks */}
        <Typography
          variant="h4"
          sx={{ mt: 8, mb: 4, textAlign: 'left', color: theme.palette.primary.main, fontWeight: 'bold' }}
        >
          Pilihan Editor Kami
        </Typography>
        <Divider sx={{ mb: 6, borderColor: theme.palette.divider }} />

        {/* Editor's Picks Section */}
        <Grid container spacing={6}>
          {editorPicks.map((blog, index) => (
            <Grid item md={4} sm={12} xs={12} key={index}> {/* 3 columns for Editor's Picks section */}
              <Box sx={{ boxShadow: 3, borderRadius: '8px', overflow: 'hidden', mb: 6 }}>
                <img
                  src={blog.image}
                  alt={blog.title}
                  style={{ width: '100%', height: 'auto' }}
                />
                <Box sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: theme.palette.primary.main }}>
                    {blog.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mb: 2 }}>
                    {blog.content}
                  </Typography>
                  <Button
                    variant="text"
                    color="primary"
                    sx={{ fontWeight: 'bold' }}
                    href={blog.link}
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
          count={Math.ceil(Blogs.length / pageSize)}
          page={page}
          onChange={handleChange}
          sx={{ mt: 6, display: 'flex', justifyContent: 'center' }}
        />
      </Container>
    </>
  );
};

export default BlogPage;
