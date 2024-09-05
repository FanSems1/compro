import { Box, Typography, ButtonBase } from "@mui/material";
import { Link } from "react-scroll";

// Icons
// import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

//Styles
import styles from "Styles/Hero/HeroContent.styles";

const HeroContent = () => {
    return (
<Box sx={styles.Container}>
    <Typography variant="h6" component="h6" sx={{ ...styles.Title, color: "white" }}>
        Dengan Eureka,
    </Typography>
    <Typography variant="h6" component="h6" sx={{ ...styles.Title, color: "white" }}>
        Semua pasti bisa
    </Typography>
    <Typography variant="body1" component="p" sx={{ ...styles.Description, color: "white" }}>
        We always ready to provide your needs.
    </Typography>
    <Link
        to="portfolio"
        spy={true}
        smooth={true}
        duration={500}
    >
        <ButtonBase sx={{ ...styles.Button, color: "white" }}>
            Pelajari Eureka
            <ArrowDownwardIcon />
        </ButtonBase>
    </Link>
</Box>

    );
};
export default HeroContent;