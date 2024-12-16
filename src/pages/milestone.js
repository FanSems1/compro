import React, { useState } from 'react';
import { Box, Container, Typography, ButtonBase } from '@mui/material';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';
import mlbook from 'Assets/header/mlbookhouse.png';
import mllogistics from 'Assets/header/mllogistics.png';
import mlrace from 'Assets/header/mlrace.png';
import mlmasdis from 'Assets/header/mlmasdis.png';
import mlkatarasa from 'Assets/header/mlkatarasa.png';
import mljaja from 'Assets/header/mljaja.png';
import Image from 'next/image';

const milestoneData = [
  {
    year: 2007,
    title: 'Eureka Bookhouse',
    subtitle: 'Eureka Bookhouse Store Didirikan untuk inspirasi anda',
    description: 'Dengan tujuan membantu customer menemukan buku-buku inspiratif, Eureka group mendirikan Eureka Bookhouse Store. Toko buku ini di desain untuk pengguna bisa mencari buku apa yang mereka inginkan dari buku novel, buku pelajaran, buku self-improve, bahkan hingga buku gambar dan alat tulis sekali pun.',
    image: mlbook,
  },
  {
    year: 2011,
    title: 'Eureka Logistics',
    subtitle: 'Eureka Logistics membantu  pemindahan barang anda',
    description: 'Dalam upaya mendukung kelancaran distribusi dan pengiriman, Eureka Group mendirikan Eureka Logistic. Layanan logistik ini dirancang untuk membantu pelanggan mengirimkan barang dengan efisien, cepat, dan aman. Dengan jaringan distribusi yang luas dan teknologi terkini, Eureka Logistic memastikan pengiriman barang ke berbagai daerah berjalan lancar, mulai dari dokumen penting hingga paket besar.',
    image: mllogistics,
  },
  {
    year: 2017,
    title: 'Raja Cepat',
    subtitle: 'Raja Cepat hadir untuk mengirimkan paket anda',
    description: 'Raja Cepat hadir sebagai solusi pengiriman ekspres yang andal dan cepat. Bagian dari Eureka Group, Raja Cepat dirancang untuk memenuhi kebutuhan pengiriman instan dengan layanan yang cepat, aman, dan terjangkau. Dengan jangkauan luas dan armada yang handal, kami memastikan setiap paket sampai tujuan tepat waktu, memberikan pengalaman pengiriman yang bebas dari hambatan.',
    image: mlrace,
  },
  {
    year: 2020,
    title: 'Master Diskon',
    subtitle: 'Master Diskon dibentuk untuk membantu akomodasi anda',
    description: 'Master Diskon merupakan platform yang menawarkan diskon akomodasi bagi pengguna. Dengan beragam pilihan, pengguna bisa mendapatkan layanan penginapan terbaik dengan harga bersaing.',
    image: mlmasdis,
  },
  {
    year: 2020,
    title: 'Kata Rasa',
    subtitle: 'Kata Rasa dibuat untuk menemani kegiatan anda',
    description: 'Kata Rasa adalah produk Eureka Group yang menyajikan pilihan makanan dan minuman dengan cita rasa yang khas. Didesain untuk menemani aktivitas sehari-hari, Kata Rasa memastikan kualitas dan kepuasan pelanggan.',
    image: mlkatarasa,
  },
  {
    year: 2023,
    title: 'Jaja Auto',
    subtitle: 'Jaja Auto diluncurkan untuk mencari mobil favorit anda',
    description: 'Jaja Auto merupakan platform penjualan mobil yang memudahkan pengguna dalam mencari dan menemukan mobil impian. Dengan beragam pilihan mobil, Jaja Auto memberikan pengalaman membeli yang mudah dan terpercaya.',
    image: mljaja,
  },
];

const Milestone = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ITEMS_PER_PAGE = 1;

  const scrollPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const scrollNext = () => {
    if (currentIndex < milestoneData.length - ITEMS_PER_PAGE) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const currentMilestone = milestoneData[currentIndex];

  return (
    <Box sx={{ py: 6, mb: 10, mt: 10 }}>
      <Container maxWidth="xl">
        {/* Title Section */}
        <Typography
          variant="h4"
          sx={{ textAlign: 'center', mb: 6, fontWeight: 'bold', color: '#0F2296' }}
        >
          Milestone Eureka Group
        </Typography>

        {/* Milestone Content */}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          textAlign="left"
          p={4}
          sx={{ position: 'relative', maxWidth: '1200px', margin: '0 auto' }}
        >
          {/* Left Pagination Button */}
          <ButtonBase
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              backgroundColor: currentIndex > 0 ? '#0F2296' : '#cccccc',
              borderRadius: '0',
              width: '35px',
              height: '33px',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
              cursor: currentIndex > 0 ? 'pointer' : 'not-allowed',
              marginRight: '15em', // Shifted left pagination further
              position: 'absolute',
              left: '-50px', // Further adjustment to the left
            }}
            onClick={scrollPrev}
            disabled={currentIndex <= 0}
          >
            <ChevronLeft />
          </ButtonBase>

          {/* Image and Text Section */}
          <Box display="flex" alignItems="center" justifyContent="space-between">
  <Box
    sx={{
      width: '900px', // Increased width
      height: '300px', // Increased height
      overflow: 'hidden', // Hide overflow to ensure cropping
      borderRadius: '10px', // Optional: to give rounded corners
      position: 'relative', // To position the image inside
    }}
  >
    <Image
      src={currentMilestone.image}
      alt={currentMilestone.title}
      layout="fill"
      objectFit="contain" // Use 'cover' for a uniform look
      style={{ borderRadius: '10px' }} // Apply border-radius directly to the image for consistency
    />
  </Box>
  
  <Box ml={4}>
    <Typography variant="h4" sx={{ color: '#0F2296' }}>
      {currentMilestone.title}
    </Typography>
    <Typography variant="h1" sx={{ fontSize: '48px', fontWeight: 'bold', color: '#0F2296' }}>
      {currentMilestone.year}
    </Typography>
    <Typography variant="h6" sx={{ color: 'black', fontWeight: 'bold', mb: 2 }}>
      {currentMilestone.subtitle}
    </Typography>
    <Typography variant="body1" sx={{ color: 'black' }}>
      {currentMilestone.description}
    </Typography>
  </Box>
          </Box>
          {/* Right Pagination Button */}
          <ButtonBase
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              backgroundColor: currentIndex < milestoneData.length - ITEMS_PER_PAGE ? '#0F2296' : '#cccccc',
              borderRadius: '0',
              width: '35px',
              height: '33px',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
              cursor: currentIndex < milestoneData.length - ITEMS_PER_PAGE ? 'pointer' : 'not-allowed',
              position: 'absolute',
              right: '-50px', // Further adjustment to the right
            }}
            onClick={scrollNext}
            disabled={currentIndex >= milestoneData.length - ITEMS_PER_PAGE}
          >
            <ChevronRight />
          </ButtonBase>
        </Box>
      </Container>
    </Box>
  );
};

export default Milestone;
