import React, { useState } from 'react';
import { Box, Grid, Stack, Typography, ButtonBase, Dialog, Pagination } from '@mui/material';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';

// Icons
import { ClendarIcon } from 'Utilis/Icons';

// Components
import Dialogs from './SingleBlog/Dialogs';

// Data
import Blogs from 'Data/Blog/Blogs.data';

// Styles
import styles from 'Styles/Blog/SingleBlog.styles';

const SingleBlog = () => {
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3; // Number of blogs per page

  const handleClickOpen = (index) => () => {
    setOpen(index);
    const header = document.querySelector('header');
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    header.style.paddingRight = `${scrollBarWidth}px`;
  };

  const handleClose = () => {
    setOpen(false);
  };

  const removePadding = () => {
    const header = document.querySelector('header');
    header.style.paddingRight = '0px';
  };

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = Blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Box sx={{ mt: '4rem', mb: '5.5em' }}>
      <Grid container spacing={4}>
        {currentBlogs.map((blog, i) => (
          <Grid item md={4} sm={6} xs={12} key={i}>
            <Box sx={styles.BoxContainer}>
              <Box component="img" src={blog.image} alt={blog.title} sx={styles.Image} />
              <Box sx={styles.Content}>
                <Typography variant="body1" component="p" sx={styles.Category}>
                  {blog.category}
                </Typography>
                <Typography variant="h6" component="h6" sx={styles.Title}>
                  {blog.title}
                </Typography>
                <Stack direction="row" sx={{ alignItems: 'center' }}>
                  <Box sx={styles.TimeIcon}>
                  </Box>
                  <Typography variant="body1" component="p" sx={styles.TimeText}>
                    {blog.isi}
                  </Typography>
                </Stack>
                <ButtonBase sx={styles.Button} onClick={handleClickOpen(i)}>
                  Read More
                  <ArrowForwardTwoToneIcon />
                </ButtonBase>
                <Dialog
                  open={open === i}
                  onClose={handleClose}
                  scroll="paper"
                  maxWidth="md"
                  TransitionProps={{
                    onExited: () => {
                      removePadding();
                    },
                  }}
                >
                  <Dialogs blog={blog} handleClose={handleClose} />
                </Dialog>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Pagination
          count={Math.ceil(Blogs.length / blogsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>
    </Box>
  );
};

export default SingleBlog;
