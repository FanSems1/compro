import { Box, Stack, Typography, ButtonBase } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Link as Scroll } from "react-scroll";

//Icons
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { MapIcon, EmailIcon, PhoneIcon, FacebookIcon, TwitterIcon } from "Utilis/Icons";

//Logo
import Logo from "Assets/header/logo.png";

//Data
import Navs from "Data/Header/Navs.data";

//Styles
import styles from "Styles/Header/Dialogs.styles";

const Drawers = ({ toggleDrawer }) => {
    return (
        <Box>
            <Stack direction="row" sx={{ alignItems: "center" }}>
                <Box sx={{ flex: 1, mt: "5px" }}>
                    <Image src={Logo} width={200} height={30} alt="Logo" />
                </Box>
                <ButtonBase onClick={toggleDrawer(false)} sx={styles.CrossButton}>
                    <CloseRoundedIcon />
                </ButtonBase>
            </Stack>
            <Typography variant="body1" component="p" sx={styles.Description}>
            We are Eureka! <br/>
            Kami memberikan Anda kemudahan untuk membeli segala produk yang berkaitan dengan Buku, ATK, Gaya Hidup, Mainan & Hobi, Olahraga & Outdoor dan Handmade, hanya dengan mengakses ke situs Eurekabookhouse.co.id.

            Dengan fasilitas yang kami sediakan, Anda akan memiliki kemudahan mendapatkan barang- barang terbaru yang Anda inginkan. Dapatkan pula berbagai diskon dengan potongan harga termurah dan penawaran-penawaran yang pastinya menarik untuk Anda. Informasi mengenai segala produk yang Anda inginkan juga bisa Anda dapatkan dengan mudah di website kami untuk kenyamanan Anda berbelanja.
            </Typography>
            <Box sx={styles.Navs}>
                {Navs &&
                    Navs.map((nav, i) => (
                        <Scroll
                            key={i}
                            activeClass='active'
                            to={nav.Id}
                            spy={true}
                            smooth={true}
                            duration={500}
                            onClick={toggleDrawer(false)}
                        >
                            <ButtonBase sx={styles.Buttons}>
                                {nav.name}
                            </ButtonBase>
                        </Scroll>
                    ))
                }
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
                <Link href="https://github.com/">
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
        </Box >
    );
};
export default Drawers;