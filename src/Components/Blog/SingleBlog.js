import React, { useState, useEffect } from 'react';
import { Box, Grid, Stack, Typography, ButtonBase, Dialog, IconButton } from '@mui/material';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Dialogs from './SingleBlog/Dialogs'; 
import axios from 'axios';
import sanitizeHtml from 'sanitize-html';  
import styles from 'Styles/Blog/SingleBlog.styles';

const SingleBlog = () => {
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);
  const blogsPerPage = 3;

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.get('https://3wzg6m6x-5000.asse.devtunnels.ms/api/blog');
        setBlogData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blog data:', error);
        setLoading(false);
      }
    };
    fetchBlogData();
  }, []);

  const handleClickOpen = (index) => () => {
    setOpen(index);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogData.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(blogData.length / blogsPerPage);

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

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box sx={{ mt: { xs: '2rem', md: '4rem' }, mb: { xs: '3rem', md: '0em' }, mx: { xs: '0.5rem', md: '1rem' } }}>
      <Grid container spacing={1}>
        {currentBlogs.map((blog, i) => (
          <Grid item md={4} sm={6} xs={12} key={i}>
            <Box sx={{ ...styles.BoxContainer, mx: { xs: '0.25rem', md: '0.5rem' } }}>
              <Box component="img" src={blog.image} alt={blog.title} sx={styles.Image} />
              <Box sx={{ ...styles.Content, py: 1, px: 2 }}>
                <Typography variant="body2" component="p" sx={{ ...styles.Category }}>
                  {blog.bu_master?.name || 'Unknown Bisnis'}
                </Typography>
                <Typography variant="h7" component="h7" sx={{ ...styles.Title, mb: 1 }}>
                  {blog.title}
                </Typography>
                <Stack direction="row" sx={{ mb: "1em", alignItems: 'center', width: '100%' }}>
                <Typography variant="body2" sx={styles.TimeText}>
  <span
    dangerouslySetInnerHTML={{
      __html: truncateDescription(parseDescription(blog.description), 20),
    }}
  />
</Typography>
                </Stack>
                <ButtonBase sx={{ ...styles.Button }} onClick={handleClickOpen(i)}>
                  Read More
                  <ArrowForwardTwoToneIcon />
                </ButtonBase>
                <Dialog
                  open={open === i}
                  onClose={handleClose}
                  scroll="paper"
                  maxWidth="md"
                >
                  <Dialogs blog={blog} handleClose={handleClose} />
                </Dialog>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'right', mt: 3, mx: { xs: '0.5rem', md: '1rem' } }}>
        <Stack direction="row" spacing={1} alignItems="center">
          <IconButton
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            sx={{
              border: '1px solid #0F2296',
              color: '#fff',
              bgcolor: '#0F2296',
              borderRadius: 3,
              '&:hover': {
                bgcolor: '#0D1F8E',
              },
              mr: 1,
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          <IconButton
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            sx={{
              border: '1px solid #0F2296',
              color: '#fff',
              bgcolor: '#0F2296',
              borderRadius: 3,
              '&:hover': {
                bgcolor: '#0D1F8E',
              },
              ml: 1,
            }}
          >
            <ArrowForwardTwoToneIcon />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
};

export default SingleBlog;