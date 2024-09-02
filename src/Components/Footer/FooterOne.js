import { Box, Stack, ButtonBase, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

//Icons
import { MapIcon, EmailIcon, PhoneIcon, FacebookIcon, TwitterIcon, } from "Utilis/Icons";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

//Logo
import Logo from "Assets/header/logo.png";

//Styles
import styles from "Styles/Footer/FooterOne.styles";

const FooterOne = () => {
    return (
        <Box>
            <Box sx={{ mb: "30px" }}>
                <Image src={Logo} width={287} height={44} alt="Logo" />
            </Box>
            <Stack direction="row" sx={styles.Address}>
                <Box>
                    <MapIcon />
                </Box>
                <Box>
                    <Typography variant="body1" component="p">
                    Jl. H. Baping No.100, RT.6/RW.9, Ciracas, Kec. Ciracas, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13740
                    </Typography>
                </Box>
            </Stack>
            <Stack direction="row" sx={styles.Address}>
                <Box>
                    <EmailIcon />
                </Box>
                <Box>
                    <Link href="mailto:eurekaaja@gmail.com">
                        <a>
                            <Typography variant="body1" component="p">
                             eurekaaja@gmail.com
                            </Typography>
                        </a>
                    </Link>
                </Box>
            </Stack>
            <Stack direction="row" sx={styles.Address}>
                <Box>
                    <PhoneIcon />
                </Box>
                <Box>
                <Link href="https://wa.me/+628852133333">
                        <a>
                            <Typography variant="body1" component="p">
                                +628852133333
                            </Typography>
                        </a>
                    </Link>
                </Box>
            </Stack>
            <Stack direction="row" sx={styles.Social}>
                <Link href="https://github.com/Eureka">
                    <a target="_blank">
                        <ButtonBase>
                            <GitHubIcon />
                        </ButtonBase>
                    </a>
                </Link>
                <Link href="https://www.facebook.com/">
                    <a target="_blank">
                        <ButtonBase>
                            <FacebookIcon />
                        </ButtonBase>
                    </a>
                </Link>
                <Link href="https://twitter.com/">
                    <a target="_blank">
                        <ButtonBase>
                            <TwitterIcon />
                        </ButtonBase>
                    </a>
                </Link>
                <Link href="https://instagram.com/">
                    <a target="_blank">
                        <ButtonBase>
                            <InstagramIcon />
                        </ButtonBase>
                    </a>
                </Link>
            </Stack>
        </Box>
    );
};
export default FooterOne;