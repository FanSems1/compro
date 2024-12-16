import { Box, Typography, ButtonBase, Button } from "@mui/material";
import { Link } from "react-scroll";
// Styles
import styles from "Styles/Hero/HeroContent.styles";

const HeroContent = () => {
    return (
        <Box sx={styles.Container}>
            <Typography variant="h2" component="h2" sx={styles.Title}>
                Bersama Eureka,
                Kamu Pasti Bisa
            </Typography>
            <Typography variant="h6" component="h6" sx={styles.Slogan}>
                VICTORY!
            </Typography>
            <Typography variant="body1" component="p" sx={styles.Description}>
            Kami memiliki beberpa layanan untuk anda dan bisnis anda. Mari kita lihat apa saja yang bisa kami bantu untuk mencapai kemenangan bisnis dan tujuan pribadi anda.
            </Typography>
            
            <Box sx={styles.ButtonWrapper}>
    <Button
        sx={{ ...styles.Button, ...styles.PrimaryButton }}
        href="https://wa.me/6281234567890"
        target="_blank"
    >
        Pelajari Eureka
    </Button>

    <Button
        sx={{ ...styles.Button, ...styles.SecondaryButton }}
        href="tel:+6281234567890" 
    >
        Lihat Produk
    </Button>
</Box>
        </Box>
    );
};

export default HeroContent;
