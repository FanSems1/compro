// components/FloatingButton.js
import React, { useState, useEffect } from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const FloatingButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    showButton && (
      <Box
        sx={{
          position: 'fixed',
          bottom: 140,
          right: 30,
          zIndex: 1000,
        }}
      >
        <IconButton 
          onClick={scrollToTop} 
          aria-label="scroll back to top"
          sx={{
            width: 38, // Set width of the button
            height: 38, // Set height of the button
            backgroundColor: '#213689', // Set background color to red
            '&:hover': {
              backgroundColor: 'green', // Darker shade on hover
            },
          }}
        >
          <ArrowUpwardIcon sx={{ fontSize: 35, color: 'white' }} /> {/* Set the color of the icon */}
        </IconButton>
      </Box>
    )
  );
};

export default FloatingButton;
