import { useState, useEffect } from "react";
import { Container, Box, Grid, useMediaQuery } from "@mui/material";

// Components
import Logo from "Components/Header/Logo";
import Nav from "Components/Header/Nav";
import Bar from "Components/Header/Bar";    

// Styles
import styles from "Styles/Header/Header.styles";

const Header = () => {
    const [scroll, setScroll] = useState(false);
    const isMobile = useMediaQuery('(max-width:768px)'); // Check if screen width is mobile size

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Box className={scroll ? "sticky" : ""} sx={styles.Container} component="header">
            <Container maxWidth={false} disableGutters>
                <Grid container spacing={2} sx={{ alignItems: "center", height: "100%" }}>
                    <Grid item md={3} xs={6}>
                        <Logo />
                    </Grid>
                    <Grid item md={9} xs={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
                        {isMobile ? <Bar /> : <Nav />}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Header;
