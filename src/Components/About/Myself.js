import { Box, Stack, ButtonBase, Typography } from "@mui/material";
import { Link } from "react-scroll";

//Icons
import DoneIcon from '@mui/icons-material/Done';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';

//Images
import AboutImage from "Assets/about/about.png";

//Styles
import styles from "Styles/About/Myselft.styles";

const Myself = () => {
    return (
        <Box sx={styles.Container}>
            <Box sx={{ width: { md: "35%", xxs: "100%" } }}>
                <Typography variant="h4" component="h4" sx={styles.Title}>
                Explore the Greatness We Bring!
                </Typography>
                <Typography variant="body1" component="p" className="sdjh" sx={styles.Description}>
                Eureka adalah perusahaan yang berdedikasi untuk menyediakan solusi inovatif dan berkualitas tinggi di berbagai sektor industri. Terletak di kawasan Ciracas, Jakarta Timur, Eureka Indonesia memiliki komitmen kuat untuk memberikan layanan terbaik kepada kliennya dengan mengutamakan profesionalisme dan integritas.
                <br/>
                Eureka Indonesia tidak hanya fokus pada kualitas produk, tetapi juga pada kepuasan pelanggan dan keberlanjutan. Kami percaya bahwa inovasi dan layanan yang luar biasa adalah kunci untuk membangun hubungan jangka panjang yang sukses dengan pelanggan dan mitra kami.
                </Typography>
                <Box sx={{ my: "28px" }}>
                    <Stack direction="row" sx={styles.Features}>
                        <DoneIcon />
                        <Typography variant="body1" component="p">
                            100% client satisfaction
                        </Typography>
                    </Stack>
                    <Stack direction="row" sx={styles.Features}>
                        <DoneIcon />
                        <Typography variant="body1" component="p">
                            Quality Service
                        </Typography>
                    </Stack>
                    <Stack direction="row" sx={styles.Features}>
                        <DoneIcon />
                        <Typography variant="body1" component="p">
                            Lifetime aftersales supports
                        </Typography>
                    </Stack>
                </Box>
                <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    <ButtonBase sx={styles.Button}>
                        Contact Us
                        <ArrowForwardTwoToneIcon />
                    </ButtonBase>
                </Link>
            </Box>
            <Box component="img" src={AboutImage} alt="About" sx={styles.Image} />
        </Box>
    );
};
export default Myself;