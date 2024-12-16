import { Container, Grid } from "@mui/material";
import FooterOne from "Components/Footer/FooterOne";
import FooterTwo from "Components/Footer/FooterTwo";
import FooterThree from "Components/Footer/FooterThree";
import FooterFour from "Components/Footer/FooterFour";
import BottomFooter from "Components/Footer/BottomFooter";

const Footer = () => {
    return (
        <Container
            maxWidth={false}
            disableGutters
            as="footer"
            sx={{
                pt: "5em",
                mt: 10,
                backgroundColor: '#E7E9F5',
            }}
        >
            <Grid container spacing={{ xl: 13, lg: 10, md: 5, sm: 10, xxs: 5 }}>
                <Grid item md={3} sm={6} mt={-5}>
                    <FooterOne />
                </Grid>
                <Grid item md={3} sm={6} xxs={12} mt={-4}>
                    <FooterTwo />
                </Grid>
                <Grid item md={3} sm={6} xxs={12} mt={-4}>
                    <FooterFour />
                </Grid>
                <Grid item md={3} sm={6} xxs={12} mt={-4}>
                    <FooterThree />
                </Grid>
            </Grid>
            <BottomFooter />
        </Container>
    );
};

export default Footer;
