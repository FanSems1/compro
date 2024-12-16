import { Box, Stack, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

// Icons
import { Map as MapIcon, Email as EmailIcon, Phone as PhoneIcon } from '@mui/icons-material';
import { YouTube as YouTubeIcon, Facebook as FacebookIcon, LinkedIn as LinkedInIcon, Instagram as InstagramIcon, WhatsApp as WhatsAppIcon } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

// Logo
import Logo from "Assets/header/logo.png";

// Styles
import styles from "Styles/Footer/FooterOne.styles";

const CustomFacebookIcon = styled(FacebookIcon)({
  fontSize: 40,
  color: '#4267B2', 
});

const CustomYouTubeIcon = styled(YouTubeIcon)({
    fontSize: 40,
    color: '#FF0000', 
  });

const CustomInstagramIcon = styled(InstagramIcon)({
  fontSize: 40,
  color: '#C13584', 
});

const CustomLinkedInIcon = styled(LinkedInIcon)({
    fontSize: 40,
    color: '#0077B5', 
  });

const FooterOne = () => {
    return (
        <Box>
            <Box sx={{ mb: "5px" }}>
                <Image 
                src={Logo}
                width={160} 
                height={56}  
                alt="Logo" 
                />
            </Box>
            <Stack
                direction="row"
                sx={{
                    ...styles.Address,
                    textDecoration: 'none',
                    color: 'inherit',
                    '&:hover': {
                        color: 'inherit',
                    },
                }}
                component="a"
                href="https://www.google.com/maps/place/Jl.+H.+Baping+No.100,+RT.6%2FRW.9,+Ciracas,+Kec.+Ciracas,+Kota+Jakarta+Timur,+Daerah+Khusus+Ibukota+Jakarta+13740"
                target="_blank"
            >
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
            <IconButton
                    component="a"
                    href="https://www.linkedin.com/company/eureka"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <CustomLinkedInIcon />
                </IconButton>
                <IconButton
                    component="a"
                    href="https://www.facebook.com/Eureka"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <CustomFacebookIcon />
                </IconButton>
                <IconButton
                    component="a"
                    href="https://www.youtube.com/channel/UC1"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <CustomYouTubeIcon />
                </IconButton>
                <IconButton
                    component="a"
                    href="https://instagram.com/Eureka"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {/* <CustomInstagramIcon /> */}
                </IconButton>
            </Stack>
        </Box>
    );
};

export default FooterOne;
