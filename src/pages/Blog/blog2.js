import React, { useState, useCallback } from 'react';
import { Container, Typography, Grid, Divider, Button, Box, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, WhatsApp } from '@mui/icons-material';
import Header from 'Section/Header';
import Footer from 'Section/Footer';
import Pagination from '@mui/material/Pagination';
import blogData from '../Blog/blog'; // Updated import for blog data
import Heads from 'Utilis/Heads';

const BlogPage = () => {
  const [page, setPage] = useState(1);
  const pageSize = 3; // Number of blogs per page

  const handleChange = useCallback((event, value) => {
    setPage(value);
  }, []);

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentBlogs = blogData.slice(startIndex, endIndex);

  return (
    <>
      <Heads />
      <Header />
      <Container maxWidth="xl" sx={{ mt: 5, mb: 8 }}>

        {/* Section: Launching Apps Master Diskon 2.0 */}
        <Typography variant="h4" sx={{ mb: 4, textAlign: 'left', fontWeight: 'bold' }}>
          {blogData[1].title}
        </Typography>
        <Divider sx={{ mb: 6 }} />

        <Grid container spacing={6}>
          <Grid item md={9} sm={12} xs={12}>
            <Box sx={{ boxShadow: 3, borderRadius: '8px', overflow: 'hidden', mb: 6 }}>
              <img
                src={blogData[1]?.image} // Assuming the first blog entry is to be shown here
                alt={blogData[1]?.title}
                style={{ width: '100%', height: 'auto' }}
              />
            </Box>
            <Box sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                {blogData[1]?.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 2,
                  whiteSpace: 'pre-wrap', // Ensures whitespace and line breaks are preserved
                  overflowWrap: 'break-word', // Breaks long words to fit container
                }}
              >
                {blogData[1]?.detail}
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

        {/* Section: Editor's Picks */}
        <Typography variant="h4" sx={{ mt: 8, mb: 4, textAlign: 'left', fontWeight: 'bold' }}>
          Pilihan Editor Kami
        </Typography>
        <Divider sx={{ mb: 6 }} />

        <Grid container spacing={6}>
          {currentBlogs.map((blog, index) => (
            <Grid item md={4} sm={12} xs={12} key={index}>
              <Box sx={{ boxShadow: 3, borderRadius: '8px', overflow: 'hidden', mb: 6 }}>
                <img
                  src={blog.image}
                  alt={blog.title}
                  style={{ width: '100%', height: 'auto' }}
                />
                <Box sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                    {blog.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    {blog.content}
                  </Typography>
                  <Button
                    variant="text"
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
          count={Math.ceil(blogData.length / pageSize)}
          page={page}
          onChange={handleChange}
          sx={{ mt: 6, display: 'flex', justifyContent: 'center' }}
        />
      </Container>
      <Footer />
    </>
  );
};

export default BlogPage;
