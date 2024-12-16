import { Container, Box } from "@mui/material";

//Components
import HeroContent from "Components/Hero/HeroContent";

// Images
import HeroPng from "Assets/hero/haero1.png";

//Styles
import styles from "Styles/Hero/Hero.styles";

const Hero = () => {
    return (
        <div style={{backgroundColor:''}}>
        <Container maxWidth={false} disableGutters sx={styles.Container} as="section" id="home">
            <div style={{ display:'flex'}}>

            <HeroContent />
            <Box
  sx={{
    backgroundImage: `url('/_next/static/media/haero1.265a3e2b.png')`, // Correct path from the public folder
    ...styles.HeroImage,
  }}
/>
            </div>
        </Container>
        </div>
    );
};
export default Hero;