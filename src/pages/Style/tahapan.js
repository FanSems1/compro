// pages/style/tahapan.js
import { keyframes } from '@mui/material/styles';

// Keyframes for animations
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

// Styles for the recruitment stages
export const stageBoxStyles = (theme) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  p: 4,
  borderRadius: '10px',
  backgroundColor: theme.palette.background.paper,
  boxShadow: `0 4px 8px ${theme.palette.grey[500]}`,
  textAlign: 'center',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  transform: 'translateY(30px)',
  opacity: 0,
  animation: `${fadeIn} 1s forwards`,
  '&:hover': {
    transform: 'translateY(-5px) scale(1.05)',
    boxShadow: `0 8px 16px ${theme.palette.grey[600]}`,
  },
});

// Styles for the container and header
export const containerStyles = (theme) => ({
  p: 6,
  borderRadius: '10px',
  background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.primary.light} 100%)`,
  boxShadow: `0 4px 8px ${theme.palette.grey[700]}`,
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
