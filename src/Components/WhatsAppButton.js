// components/WhatsAppButton.js
import React from 'react';
import { Box, IconButton } from '@mui/material';
import Image from 'next/image';
import whatsappIcon from '../Assets/footer/whatsappicon.png'; 

const WhatsAppButton = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/1234567890', '_blank'); 
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 60,
        right: 16, 
        zIndex: 1000,
      }}
    >
      <IconButton onClick={openWhatsApp} aria-label="chat with us on WhatsApp">
        <Image src={whatsappIcon} alt="WhatsApp Icon" width={50} height={50} />
      </IconButton>
    </Box>
  );
};

export default WhatsAppButton;
