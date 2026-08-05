import React, { useState, useEffect, useCallback } from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
  ButtonBase,
  Dialog,
  DialogContent,
  IconButton,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';
import Heads from 'Utilis/Heads';
import Header from '../Section/Header';
import Footer from '../Section/Footer';
import Kontak from '../Section/Kontak';
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';
import LanguageIcon from '@mui/icons-material/Language';
import Image from 'next/image';
import axios from 'axios';
import { useRouter } from 'next/router';

const styles = {
  Button: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '15px',
    display: 'inline-flex',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: '1rem',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#213689',
      color: '#fff',
    },
  },
  Navigation: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: '2em',
    paddingRight: '140px',
  },
};

const ITEMS_PER_PAGE = 6;

const Detail = () => {
  const theme = useTheme();
  const router = useRouter();
  const { buName } = router.query;

  const [posts, setPosts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openPopup, setOpenPopup] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(null);
    setPosts([]);
    
    const fetchData = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem('token');
        const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://3wzg6m6x-5000.asse.devtunnels.ms';
        const response = await axios.get(`${baseUrl}/api/bu_detail`, {
          headers: { Authorization: `${token}` },
        });
  
        const data = response.data.map(post => ({
          ...post,
          gallery: JSON.parse(post.gallery),
        }));
  
        const filteredData = data.find(item =>
          item.bu_master.name.replace(/\s+/g, '-').toLowerCase() === buName
        );
  
        if (filteredData) {
          setData(filteredData);
        } else {
          setData(null); 
        }
  
        setPosts(data);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
  
    if (buName) {
      fetchData();
    }
  }, [buName]);

  const scrollPrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(prevIndex => Math.max(prevIndex - ITEMS_PER_PAGE, 0));
    }
  }, [currentIndex]);
  
  const scrollNext = useCallback(() => {
    if (data?.gallery?.length > 0 && currentIndex < data.gallery.length - ITEMS_PER_PAGE) {
      setCurrentIndex(prevIndex => Math.min(prevIndex + ITEMS_PER_PAGE, data.gallery.length - ITEMS_PER_PAGE));
    }
  }, [currentIndex, data?.gallery?.length]);

  const currentImages = posts.length > 0 && data.gallery ? data.gallery.slice(currentIndex, currentIndex + ITEMS_PER_PAGE) : [];

  const handleImageClick = img => {
    setSelectedImage(img);
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
    setSelectedImage('');
  };

  if (loading) return <Typography variant="h6">Loading...</Typography>;
  if (error) return <Typography variant="h6" color="error">{error}</Typography>;

    return (
        <>
        {/* Header Section */}
        <Heads />
        <Header />

    {/* Banner Section */}
    {posts.length > 0 && (
        <Box
        sx={{
        backgroundImage: `url(${data.images_banner})`,
        backgroundSize: 'cover',
        height: '510px',
        width: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mt: '4.7em',
        }}
    >
        <Container maxWidth="xl">
        <Box sx={{ mt: 25, p: 1 }}>
            <Box>
            <Image
                src={data.logo_banner}
                alt="Logo"
                width={197}
                height={87}
            />
            <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'black' }}>
            {data.bu_master.name}
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', color: 'black' }}>
            {data.description_banner}
            </Typography>
            </Box>
        </Box>
        </Container>
    </Box>
    )}

{/* App Section */}
{posts.length > 0 && (
  <Container sx={{ py: 6, mt: 15 }} maxWidth="xl" key={data.id_bu_master}>
    <Grid container spacing={4} alignItems="center">
      <Grid item xs={12} md={6}>
        <Box>
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', fontSize: '2rem' }}>
          {data.title_app}
          </Typography>
          <Typography variant="body1">
            {data.description_app}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, marginTop: 2 }}>
            <ButtonBase
              sx={{
                ...styles.Button,
                width: '280px',
                borderColor: '#000',
              }}
              onClick={() => window.open(data.images_app, '_blank')}
            >
              <AndroidIcon sx={{ color: '#3DDC84', marginRight: '0.5em' }} />
              Download Play Store
              <ArrowForwardTwoToneIcon sx={{ marginLeft: '0.5em' }} />
            </ButtonBase>
            <ButtonBase
              sx={{
                ...styles.Button,
                width: '280px',
                borderColor: '#000',
              }}
              onClick={() => window.open('https://masterdiskon.com', '_blank')}
            >
              <AppleIcon sx={{ color: '#000', marginRight: '0.5em' }} />
              Download App Store
              <ArrowForwardTwoToneIcon sx={{ marginLeft: '0.5em' }} />
            </ButtonBase>
          </Box>
          <ButtonBase
            sx={{
              ...styles.Button,
              width: '280px',
            }}
            onClick={() => window.open('https://yourwebsite.com', '_blank')}
          >
            <LanguageIcon sx={{ color: '#000', marginRight: '0.5em' }} />
            Buka Website
            <ArrowForwardTwoToneIcon sx={{ marginLeft: '0.5em' }} />
          </ButtonBase>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            width: '100%',
            height: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '8px',
            overflow: 'hidden',
          }}
        >
          <Image src={data.images_app} alt="Special Section"
            width={637}
            height={380}
          />
        </Box>
      </Grid>
    </Grid>
  </Container>
)}

        {/* Product Section */}
        <Container sx={{ py: 4, mt: 15, mb: 15 }} maxWidth="xl">
            {posts.length > 0 && (
            <Typography key={data.id_bu_master} variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', mb: '2em', color: 'black' }}>
                Apa Produk {data.bu_master.name} {/* Use bu_master.name instead of title_banner */}
            </Typography>
            )}
            <Grid container spacing={9} justifyContent="center">
            {posts.length > 0 && [1, 2, 3, 4].map((index) => {
                // Create the keys dynamically
                const titleKey = `title_prod_${index}`;
                const descriptionKey = `description_${index}`;
                const imageKey = `images_${index}`;
                return (
                <Grid item xs={12} sm={4} md={2} key={index}>
                    <Box
                    sx={{
                        width: '100%',
                        height: '280px',
                        backgroundColor: '#ffffff',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        margin: '8px',
                        textAlign: 'center',
                    }}
                    >
                    {data?.[titleKey] && (
                        <>
                        <Image
                            src={data[imageKey]}
                            alt="Product"
                            width={140}
                            height={140}
                        />
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2, color: '#0B1869' }}>
                    {data[titleKey]} {/* Access the title directly */}
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 1, color: '#0B1869' }}>
                        {data[descriptionKey]} 
                        </Typography>
                        </>
                    )}
                    </Box>
                </Grid>
                );
            })}
            </Grid>
        </Container>

        <Box sx={{ backgroundColor: '#E7E9F5', py: 6, width: '100%' }}>
    <Container sx={{ mt: 8, mb: 8 }} maxWidth="xl">
        <Grid container spacing={4} alignItems="center">
        {/* Image on the left */}
        <Grid item xs={12} md={6}>
            <Box sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {/* Ensure the images_sec exists */}
            {posts.length > 0 && (
                <Image 
                src={data.images_sec} 
                alt="Sekilas Tentang Kami" 
                width={630}
                height={320}
                />
            )}
            </Box>
        </Grid>

        {/* Text on the right */}
        <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: 'left' }}>
            {posts.length > 0 && ( // Ensure posts exist before accessing their properties
                <>
                <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {data.title_sec}
                </Typography>
                <Typography variant="body1">
                    {data.description_sec}
                </Typography>
                </>
            )}
            </Box>
        </Grid>
        </Grid>
    </Container>
    </Box>

    {/* Gallery Section */}
    <Container sx={{ py: 4, mb: 10, mt: 25 }} maxWidth="xl">
    <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', mb: '2em' }}>
        Galeri Kami
    </Typography>
    <Grid container spacing={2} justifyContent="center">
        <Grid container item spacing={2} xs={12}>
        {currentImages.map((img, index) => (
            <Grid item xs={12} sm={6} key={index}>
            <Box
                sx={{
                width: '100%',
                height: '300px',
                backgroundColor: '#ffffff',
                display: 'flex',
                marginBottom: '50px',
                justifyContent: 'center',
                alignItems: 'center',
                }}
                onClick={() => handleImageClick(img)}
            >
                <Image src={img} alt={`Gallery Image ${index + 1}`} 
                width={630}
                height={320}
                />
            </Box>
            </Grid>
        ))}
        </Grid>
    </Grid>
        {/* Navigation Buttons */}
        <Box sx={styles.Navigation}>
        <ButtonBase
        sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            backgroundColor: currentIndex > 0 ? '#0F2296' : '#cccccc',
            borderRadius: '0',
            left: '7em',
            width: '35px',
            height: '33px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            cursor: currentIndex > 0 ? 'pointer' : 'not-allowed',
            marginRight: '1em',
            '&:active': {
            color: 'black',
            },
        }}
        onClick={scrollPrev}
        disabled={currentIndex <= 0}
        >
        <ChevronLeft />
        </ButtonBase>
        <ButtonBase
        sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            left: '8em',
            backgroundColor: currentIndex < data?.gallery.length - ITEMS_PER_PAGE ? '#0F2296' : '#cccccc',
            borderRadius: '0',
            width: '35px',
            height: '33px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            cursor: currentIndex < data?.gallery.length - ITEMS_PER_PAGE ? 'pointer' : 'not-allowed',
            '&:active': {
            color: 'black',
            },
        }}
        onClick={scrollNext}
        disabled={currentIndex >= data?.gallery.length - ITEMS_PER_PAGE}
        >
        <ChevronRight />
        </ButtonBase>
    </Box>
    </Container>

        {/* Image Popup */}
        <Dialog open={openPopup} onClose={handleClosePopup} maxWidth="md" fullWidth>
            <DialogContent sx={{ position: 'relative' }}>
            <IconButton
                onClick={handleClosePopup}
                sx={{ position: 'absolute', top: 10, right: 10 }}
            >
                <CloseIcon />
            </IconButton>
            <Image src={selectedImage} alt="Popup Image" width={600} height={400} />
            </DialogContent>
        </Dialog>
        <Kontak />
        <Footer />
        </>
    );
    };

    export default Detail;
