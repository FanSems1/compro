import { BorderColor } from '@mui/icons-material';
import { keyframes } from '@mui/system';

// Define hover effect animation
export const hoverEffect = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

// Styles for benefit cards
export const benefitCardStyles = (theme) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  p: 1,
  borderRadius: 2,
  borderColor: '#D8D8D8',
  background: `#FFFFFF`,
  textAlign: 'center',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    animation: `${hoverEffect} 1s ease-in-out`,
    transform: 'scale(1.05)',
  },

  height: '100%', 
  maxWidth: 350, 
});

// Styles for the section container
export const sectionContainerStyles = (theme) => ({
  mt: 10,
  background: `linear-gradient(180deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
  borderRadius: 2,
  p: 4,
});

// Styles for header typography
export const headerTypographyStyles = (theme) => ({
  mb: 4,
  textAlign: 'center',
  color: theme.palette.primary.main,
  fontWeight: 'bold',
  fontSize: '2rem',
});
