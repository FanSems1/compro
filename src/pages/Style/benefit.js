import { keyframes } from '@mui/system';

// // Define bounce animation
// export const bounce = keyframes`
//   0%, 20%, 50%, 80%, 100% {
//     transform: translateY(0);
//   }
//   40% {
//     transform: translateY(-15px);
//   }
//   60% {
//     transform: translateY(-7px);
//   }
// `;

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
  p: 4,
  borderRadius: 2,
  boxShadow: 3,
  background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
  textAlign: 'center',
  color: theme.palette.common.white,
  // animation: `${bounce} 2s infinite`,
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    animation: `${hoverEffect} 1s ease-in-out`,
    transform: 'scale(1.05)',
  },
});

// Styles for the section container
export const sectionContainerStyles = (theme) => ({
  mt: 15,
  background: `linear-gradient(180deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
  borderRadius: 2,
  boxShadow: 1,
  p: 4,
});

// Styles for header typography
export const headerTypographyStyles = (theme) => ({
  mb: 4,
  textAlign: 'center',
  color: theme.palette.primary.main,
  fontWeight: 'bold',
});
