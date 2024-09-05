import { Container, Box, Typography, Button } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';

// Styles
const styles = {
    Container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        py: '4em', // Adjust padding as needed
        backgroundColor: 'background.default', // Set the background color
    },
    Title: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        mb: '1em',
    },
    Subtitle: {
        fontSize: '1rem',
        mb: '2em',
    },
    ButtonWrapper: {
        display: 'flex',
        gap: '1em', // Space between the buttons
    },
    Button: {
        padding: '10px 20px',
        fontSize: '14px',
        borderRadius: '30px',
        textTransform: 'none',
    },
    PrimaryButton: {
        backgroundColor: 'primary.main',
        color: '#fff',
        '&:hover': {
            backgroundColor: 'transparent',
            border: '1px solid',
            borderColor: 'primary.main',
            color: 'primary.main',
        },
    },
    SecondaryButton: {
        backgroundColor: 'transparent',
        border: '1px solid',
        borderColor: 'primary.main',
        color: 'primary.main',
        '&:hover': {
            backgroundColor: 'primary.light',
            color: '#fff',
        },
    },
};

const Contact = () => {
    return (
        <Container maxWidth={false} disableGutters sx={styles.Container}>
            <Typography variant="h4" sx={styles.Title}>
                Tunggu apalagi? Ayo Wujudkan Impianmu bersama Eureka!
            </Typography>
            <Typography variant="body1" sx={styles.Subtitle}>
                Dengan Erueka, kita ciptakan raih goals untuk bisnis maupun personal anda dengan solusi yang profesional untuk anda. #SalamVictory.
            </Typography>
            <Box sx={styles.ButtonWrapper}>
                <Button sx={{ ...styles.Button, ...styles.PrimaryButton }} startIcon={<WhatsAppIcon />}>
                    Whatsapp Kami
                </Button>
                <Button sx={{ ...styles.Button, ...styles.SecondaryButton }} startIcon={<PhoneIcon />}>
                    Hubungi Kami
                </Button>
            </Box>
        </Container>
    );
};

export default Contact;
