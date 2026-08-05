import React, { useState, useCallback, useEffect } from 'react';
import { Container, ButtonBase, Stack, Typography, Grid, Divider, Button, useTheme, Box, Select, MenuItem, FormControl } from '@mui/material';
import Header from "./Section/Header";
import Heads from "Utilis/Heads";
import WhatsAppButton from 'Components/WhatsAppButton';
import SoluIndiGambar from '../Assets/Pict/soluindi.png';
import FloatingButton from 'Components/FloatingButton';
import Footer from './Section/Footer';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import Myself from 'Components/About/Myself';
import Image from 'next/image';
import sanitizeHtml from 'sanitize-html';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';

const truncateDescription = (description, limit = 20) => {
  if (description.length > limit) {
    return description.substring(0, limit) + '...'; 
  }
  return description;
};

const parseDescription = (html) => {
  const sanitizedHtml = sanitizeHtml(html, {
    allowedTags: [], // Hapus semua tag
  });

  // Gantikan pola dengan elemen yang memiliki gaya
  const styledText = sanitizedHtml
    .replace(/<b>(.*?)<\/b>/g, '<span style="font-weight:bold;">$1</span>')
    .replace(/<strong>(.*?)<\/strong>/g, '<span style="font-weight:bold;">$1</span>')
    .replace(/<i>(.*?)<\/i>/g, '<span style="font-style:italic;">$1</span>')
    .replace(/<em>(.*?)<\/em>/g, '<span style="font-style:italic;">$1</span>');

  return styledText;
};

const BlogPage = () => {
  const theme = useTheme();
  const [page, setPage] = useState(1);
  const [editorPage, setEditorPage] = useState(1);
  const [blogs, setBlogs] = useState([]);
  const [selectedBisnisUnit, setSelectedBisnisUnit] = useState('All'); // State untuk kategori yang dipilih
  const pageSize = 3;

  const handleChange = useCallback((event, value) => {
    setPage(value);
  }, []);

  const handleEditorChange = useCallback((event, value) => {
    setEditorPage(value);
  }, []);

  const handleBisnisUnitChange = (event) => {
    setSelectedBisnisUnit(event.target.value);
    setPage(1);
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://3wzg6m6x-5000.asse.devtunnels.ms';
        const response = await fetch(`${baseUrl}/api/blog`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const filteredData = data.filter(blog => blog.id_bu_master );
        setBlogs(filteredData);
      } catch (error) {
        console.error('Failed to fetch blogs:', error);
        setBlogs([]);
      }
    };
    fetchBlogs();
  }, []);

  const styles = {
    TimeText: {
      fontSize: "0.875rem", // Adjust size as needed
      color: "black",       // Replace with your desired color
      lineHeight: 1.5,
    },
  };

  // Sort blogs by date in descending order to get the most recent ones
  const sortedBlogs = blogs.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

  // Filter blogs based on selected BisnisUnit
  const filteredBlogs = selectedBisnisUnit === 'All' 
    ? sortedBlogs 
    : sortedBlogs.filter(blog => blog.bu_master.name === selectedBisnisUnit);

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentBlogs = filteredBlogs.slice(startIndex, endIndex);

  // Filter blogs marked as 'editor'
  const editorBlogs = sortedBlogs.filter(blog => blog.editor);

  // Sort editorBlogs by views in descending order and select the editor 3 for each page
  const editorStartIndex = (editorPage - 1) * pageSize;
  const editorEndIndex = editorStartIndex + pageSize;
  const editorPicks = editorBlogs
    .sort((a, b) => b.views - a.views)
    .slice(editorStartIndex, editorEndIndex);

  return (
    <>
      <Heads />
      <Header />
      <Container maxWidth="xl" sx={{ mt: 15 }}>
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
            <Image
              src={SoluIndiGambar}
              alt="Banner"
              width={630} // Replace with actual width
              height={367} // Replace with actual height
              style={{
                borderRadius: '8px',
                objectFit: 'cover',
              }}
            />
          </Grid>
        </Grid>

        {/* Section: Latest Blogs */}
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={12} md={8}>
            <Typography
              variant="h4"
              sx={{ mt: 18, mb: 4, textAlign: 'left', color: theme.palette.primary.main, fontWeight: 'bold' }}
            >
              Latest
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl variant="outlined" sx={{ minWidth: '100%', mt: 18 }}>
            <Select
                value={selectedBisnisUnit}
                onChange={handleBisnisUnitChange}
                displayEmpty
                inputProps={{ 'aria-label': 'BisnisUnit' }}
              >
                <MenuItem value="All">All Categories</MenuItem>
                {/* Menambahkan kategori */}
                {[...new Set(blogs.map(blog => blog.id_bu_master))].map((id_bu_master, index) => (
                  <MenuItem key={index} value={id_bu_master}>
                    {blogs.find(blog => blog.id_bu_master === id_bu_master)?.bu_master?.name || 'Unknown'}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Divider sx={{ mb: 6, borderColor: theme.palette.divider }} />

        {/* Latest Blogs Section */}
        <Grid container spacing={6}>
  {currentBlogs.map((blog, index) => (
    <Grid item md={4} sm={12} xs={12} key={index}>
      <Box sx={{ borderRadius: '8px', overflow: 'hidden', mb: 6, mt: 4, display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Image
          src={blog.image}
          alt={blog.title}
          width={452}
          height={240}
          style={{ width: '100%', height: 'auto' }}
        />
        <Box sx={{ padding: '16px 0px', flexGrow: 1 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: theme.palette.primary.main }}>
            {blog.title}
          </Typography>
          <Stack direction="row" sx={{ mb: "1em", alignItems: 'center', width: '100%' }}>
            <Typography variant="body2" sx={styles.TimeText}>
              {/* Sanitize and apply custom CSS styles */}
              <span
                dangerouslySetInnerHTML={{
                  __html: truncateDescription(parseDescription(blog.description), 20),
                }}
              />
            </Typography>
          </Stack>
          <Button
            sx={{
              fontWeight: 'bold',
              color: theme.palette.primary.main,
              alignSelf: 'flex-start',
              '&:hover': {
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.common.white,
              },
            }}
            href={`/blog/${blog.title.replace(/\s+/g, '-').toLowerCase()}`}
          >
            Read More
            <ArrowForwardTwoToneIcon sx={{ marginLeft: 0.5, height: '18px' }} />
          </Button>
        </Box>
      </Box>
    </Grid>
  ))}
</Grid>


        {/* Pagination */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', mt: 1, mb: 12 }}>
          <PrevButton onClick={() => setPage(page - 1)} enabled={page > 1} />
          <NextButton onClick={() => setPage(page + 1)} enabled={page < Math.ceil(filteredBlogs.length / pageSize)} />
        </Box>        
        <Myself />
        {/* Editor's Picks Section */}
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={12} md={8}>
            <Typography
              variant="h4"
              sx={{ mt: 18, mb: 4, textAlign: 'left', color: theme.palette.primary.main, fontWeight: 'bold' }}
            >
              <p>Editor&apos;s Picks</p>
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={6}>
          {editorPicks.map((blog, index) => (
            <Grid item md={4} sm={12} xs={12} key={index}>
              <Box sx={{ borderRadius: '8px', overflow: 'hidden', mb: 6 }}>
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={452}
                  height={240}
                  style={{ width: '100%', height: 'auto' }}
                />
                <Box sx={{ padding: '16px 0px' }}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: theme.palette.primary.main }}>
                    {blog.title}
                  </Typography>
                  <Stack direction="row" sx={{ mb: "1em", alignItems: 'center', width: '100%' }}>
                  {/* Sanitize description to remove unwanted HTML tags and truncate */}
                  <Typography variant="body2" sx={styles.TimeText}>
                    {/* Truncate the description to 20 words */}
                    <span
                      dangerouslySetInnerHTML={{
                        __html: truncateDescription(parseDescription(blog.description), 20),
                      }}
                    />
                  </Typography>
                </Stack>
                  <Button
                    sx={{
                      fontWeight: 'bold',
                      color: theme.palette.primary.main,
                      '&:hover': {
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.common.white,
                      },
                    }}
                    href={`/blog/${blog.title.replace(/\s+/g, '-').toLowerCase()}`}
                  >
                    Read More
                    <ArrowForwardTwoToneIcon sx={{ marginLeft: 0.5, height: '18px' }} /> 
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Editor's Picks Pagination */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', mt: 1 }}>
          <PrevButton onClick={() => setPage(page - 1)} enabled={page > 1} />
          <NextButton onClick={() => setPage(page + 1)} enabled={page < Math.ceil(filteredBlogs.length / pageSize)} />
        </Box>

        <WhatsAppButton />
      </Container>
      <Footer />
      <FloatingButton />
    </>
  );
};

// Button components for custom navigation
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
