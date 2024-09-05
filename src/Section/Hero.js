import { Container, Box } from "@mui/material";

//Components
import HeroContent from "Components/Hero/HeroContent";

//Styles
import styles from "Styles/Hero/Hero.styles";

const Hero = () => {
    return (
        <Container maxWidth="xxl" disableGutters sx={styles.Container} as="section" id="home">
            <HeroContent />
        </Container>
    );
};
export default Hero;