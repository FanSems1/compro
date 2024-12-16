// pages/style/tahapan.js
import { keyframes } from '@mui/material/styles';

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styles for the box
export const stageBoxStyles = (theme) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  p: 3,
  borderRadius: '10px',
  backgroundColor: '#ffffff',
  border: `1px solid ${theme.palette.grey[300]}`,
  textAlign: 'center',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  transform: 'translateY(30px)',
  opacity: 0,
  animation: `${fadeIn} 1s forwards`,
  width: '100%', 
  maxWidth: '400px', 
  height: '240px', 
  boxSizing: 'border-box', 
  '&:hover': {
    transform: 'translateY(-5px) scale(1.05)',
    boxShadow: `0 8px 16px ${theme.palette.grey[600]}`,
  },
});

// Styles for the container and header
export const containerStyles = (theme) => ({
  p: 6,
  mb: 6,
});

// Styles for the Typography
export const headerTypographyStyles = (theme) => ({
  mb: 4,
  textAlign: 'center',
  color: theme.palette.primary.main,
  fontWeight: 'bold',
});

export const bodyTypographyStyles = (theme) => ({
  mb: 4,
  textAlign: 'center',
  color: theme.palette.text.primary,
});
