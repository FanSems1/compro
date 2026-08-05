import React, { useState, useCallback } from 'react';
import { Container, Typography, Grid, Divider, Stack, Button, Box, IconButton } from '@mui/material';
import Header from '../Section/Header';
import Footer from '../Section/Footer';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import ButtonBase from '@mui/material/ButtonBase';
import Heads from 'Utilis/Heads';
import { CalendarToday, Category, Person } from '@mui/icons-material';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';

// Custom styled icons
import { styled } from '@mui/material/styles';
import { Facebook as FacebookIcon, Twitter as TwitterIcon, Instagram as InstagramIcon, WhatsApp as WhatsAppIcon } from '@mui/icons-material';
import FloatingButton from 'Components/FloatingButton';
import Image from 'next/image';
import sanitizeHtml from 'sanitize-html';  

// Styled icon components
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

export async function getStaticPaths() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://3wzg6m6x-5000.asse.devtunnels.ms';
    const res = await fetch(`${baseUrl}/api/blog`);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const blogs = await res.json();

    const paths = blogs.map((post) => ({
      params: { title: post.title.replace(/\s+/g, '-') },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error('Failed to fetch blogs in getStaticPaths:', error);
    return {
      paths: [],
      fallback: false,
    };
  }
}

// Get static props for the specific blog post
export async function getStaticProps({ params }) {
  try {
    const originalTitle = params.title.replace(/-/g, ' ');
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://3wzg6m6x-5000.asse.devtunnels.ms';
    const res = await fetch(`${baseUrl}/api/blog`);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const blogs = await res.json();

    const blog = blogs.find((post) => post.title === originalTitle);
    const currentBlogs = blogs.filter((post) => post.title !== originalTitle);

    if (!blog) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        blog,
        currentBlogs, // Pass the current blogs to the props
      },
    };
  } catch (error) {
    console.error('Failed to fetch blog in getStaticProps:', error);
    return {
      notFound: true,
    };
  }
}

// Main BlogPage component
const BlogPage = ({ blog, currentBlogs }) => {
  const [page, setPage] = useState(1);
  const pageSize = 3;

  const currentBlogsLength = (currentBlogs || []).length;
  const displayedBlogs = (currentBlogs || []).slice((page - 1) * pageSize, page * pageSize);

  return (
    <>
      <Heads />
      <Header />
      <Container maxWidth="xl" sx={{ mt: 15, mb: 8 }}>
        
        {/* Section: Current Blog Post */}
        <Typography variant="h4" sx={{ mb: 4, textAlign: 'left', fontWeight: 'bold' }}>
          {blog.title}
        </Typography>
        <Divider sx={{ mb: 6 }} />

        <Grid container spacing={6}>
          <Grid item md={9} sm={12} xs={12}>
            <Box sx={{ overflow: 'hidden', mt: -2 }}>
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
                  Date: {blog.date}
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
                  Category: {blog.category}
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
                  User: {blog.user.username}
                </Box>
              </Typography>
              </Box>

              {/* Blog image */}
              <div style={{ paddingLeft: '10px' }}>
              <div style={{ marginTop: 40 }}>
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={960}
                  height={450}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>


            <Box sx={{ p: 2 }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                {blog.title}
              </Typography>
              <Stack direction="row" sx={{ mb: "1em", alignItems: 'center', width: '100%' }}>
<Typography
  variant="body2"
  sx={{
    mb: 2,
    whiteSpace: 'pre-wrap',
    overflowWrap: 'break-word',
    textAlign: 'justify',
  }}
>
<span
    dangerouslySetInnerHTML={{
      __html: (parseDescription(blog.description)),
    }}
  />
</Typography>
            </Stack>
            </Box>
          </Grid>

          {/* Section: Sharing Icons */}
          <Grid item md={3} sm={12} xs={12} sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
              <Typography variant="body1" sx={{ mb: 2, fontWeight: 'bold' }}>
                Share it with your friends
              </Typography>
              <IconButton
                component="a"
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(blog.link)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <CustomFacebookIcon />
              </IconButton>
              <IconButton
                component="a"
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(blog.link)}&text=Check%20this%20out!`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <CustomTwitterIcon />
              </IconButton>
              <IconButton
                component="a"
                href={`https://www.instagram.com/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <CustomInstagramIcon />
              </IconButton>
              <IconButton
                component="a"
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(blog.link)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <CustomWhatsAppIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Section: Related Blogs */}
        <Typography variant="h4" sx={{ mt: 18, mb: 4, textAlign: 'left', fontWeight: 'bold' }}>
          Blog Lainnya
        </Typography>
        <Divider sx={{ mb: 6 }} />
        <Grid container spacing={6}>
          {displayedBlogs.map((item, index) => (
            <Grid item md={4} sm={12} xs={12} key={index}>
              <Box sx={{ borderRadius: '8px', overflow: 'hidden', mb: 6 }}>
                <Image
                  src={item.image} 
                  alt={item.title}
                  width={452}
                  height={240}
                  style={{ width: '100%', height: 'auto' }}
                />
                <Box sx={{ padding: '16px 0px' }}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                    {item.title}
                  </Typography>
                  <Stack direction="row" sx={{ mb: "1em", alignItems: 'center', width: '100%' }}>
                  <Typography variant="body2" >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: truncateDescription(parseDescription(blog.description), 20),
                    }}
                  />
                  </Typography>
                </Stack>
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
                    href={`/blog/${item.title.replace(/\s+/g, '-')}`}
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

        {/* Pagination Component */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <PrevButton onClick={() => setPage(page - 1)} enabled={page > 1} />
          <NextButton onClick={() => setPage(page + 1)} enabled={page < Math.ceil(currentBlogsLength / pageSize)} />
        </Box>
      </Container>
      <FloatingButton />
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

export default BlogPage;
