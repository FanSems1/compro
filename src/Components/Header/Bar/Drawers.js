import { Box, Stack, Typography, ButtonBase, IconButton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Icons
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Map as MapIcon, Email as EmailIcon, Phone as PhoneIcon } from '@mui/icons-material';
import { Instagram as InstagramIcon, YouTube as YouTubeIcon, Facebook as FacebookIcon, Twitter as TwitterIcon } from '@mui/icons-material';
import BlogIcon from '@mui/icons-material/Article';
import CaseStudyIcon from '@mui/icons-material/Assignment';
import HelpCenterIcon from '@mui/icons-material/Help';
import BookIcon from "Assets/blog/bookicon2.png";
import JajaIcon from "Assets/blog/jajaicon.png";
import JajaID from "Assets/blog/jajaicon2.png";
import KatarasaIcon from "Assets/blog/katarasaicon.png";
import MasdisIcon from "Assets/blog/masdisicon.png";
import raceicon from "Assets/blog/raceicon2.png";
import LogisticIcon from "Assets/blog/logistikicon.png";
import { styled } from '@mui/material/styles';

// Logo
import Logo from "Assets/header/logo.png";

// Data
import Navs from "Data/Header/Navs.data";

// Styles
import styles from "Styles/Header/Dialogs.styles";

// Custom Styled Icons
const CustomIcon = styled('div')(({ color }) => ({
  fontSize: 32,
  color: color,
  '&:hover': {
    color: 'primary.main',
  },
}));

// Map of Icons
const iconMap = {
  BookIcon: <Image src={BookIcon} width={24} height={24} alt="Book Icon" />,
  JajaIcon: <Image src={JajaIcon} width={24} height={24} alt="Jaja Icon" />,
  KatarasaIcon: <Image src={KatarasaIcon} width={24} height={24} alt="Katarasa Icon" />,
  MasdisIcon: <Image src={MasdisIcon} width={24} height={24} alt="Masdis Icon" />,
  raceicon: <Image src={raceicon} width={24} height={24} alt="Race Icon" />,
  LogisticIcon: <Image src={LogisticIcon} width={24} height={24} alt="Logistic Icon" />,
  BlogIcon: <BlogIcon />,
  CaseStudyIcon: <CaseStudyIcon />,
  HelpCenterIcon: <HelpCenterIcon />
};

const Drawers = ({ toggleDrawer }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleToggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <Box sx={{ p: 3, maxWidth: 400, mx: 'auto'}}>
      <Stack direction="row" alignItems="left" spacing={2} sx={{ mb: 3 }}>
        <Box sx={{ flex: 1 }}>
          <Image src={Logo} width={120} height={32} alt="Logo" />
        </Box>
        <IconButton onClick={toggleDrawer(false)} sx={{ color: 'text.primary' }}>
          <CloseRoundedIcon />
        </IconButton>
      </Stack>

      <Typography variant="body2" sx={{ mb: 3, lineHeight: 1.6, color: 'text.secondary' }}>
        #SALAM SUPER VICTORY! <br/>
        Lorem ipsum dolor sit amet consectetur. Nam eget orci duis in gravida. Dolor tristique ut mauris aliquam.
      </Typography>

      <Box sx={{ mb: 3 }}>
  {Navs && Navs.map((nav, i) => (
    <Box key={i}>
      <ButtonBase
        onClick={() => handleToggleDropdown(i)}
        sx={{ display: 'block', width: '100%', py: 1.5, px: 2, borderRadius: 1, backgroundColor: 'grey.100', mb: 1, textAlign: 'left', '&:hover': { backgroundColor: 'grey.200' } }}
      >
        <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary', textAlign: 'left' }}>{nav.name}</Typography>
      </ButtonBase>
      {nav.dropdown && openDropdown === i && (
        <Box sx={{ pl: 2 }}>
          {nav.dropdown.map((item, index) => (
            <Link href={item.link} key={index} passHref>
              <ButtonBase sx={{ display: 'flex', alignItems: 'center', py: 1, px: 2, borderRadius: 1, backgroundColor: 'grey.50', mb: 1, textAlign: 'left', justifyContent: 'flex-start', '&:hover': { backgroundColor: 'grey.100' } }}>
                <Box sx={{ mr: 1 }}>
                  {iconMap[item.icon]}
                </Box>
                <Typography variant="body2" sx={{ color: 'text.primary', textAlign: 'left' }}>{item.name}</Typography>
              </ButtonBase>
            </Link>
          ))}
        </Box>
      )}
    </Box>
  ))}
      </Box>

      <Stack direction="row" spacing={2} sx={{ mb: 2, alignItems: 'center', color: 'text.secondary' }}>
        <MapIcon />
        <Typography variant="body2" sx={{ flex: 1 }}>
          Jl. H. Baping No.100, RT.6/RW.9, Ciracas, Kec. Ciracas, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13740
        </Typography>
      </Stack>
      <Stack direction="row" spacing={2} sx={{ mb: 2, alignItems: 'center', color: 'text.secondary' }}>
        <EmailIcon />
        <Link href="mailto:eurekaaja@gmail.com" passHref>
          <Typography variant="body2" sx={{ color: 'primary.main', textDecoration: 'none' }}>
            eurekaaja@gmail.com
          </Typography>
        </Link>
      </Stack>
      <Stack direction="row" spacing={2} sx={{ mb: 4, alignItems: 'center', color: 'text.secondary' }}>
        <PhoneIcon />
        <Link href="https://wa.me/+628852133333" passHref>
          <Typography variant="body2" sx={{ color: 'primary.main', textDecoration: 'none' }}>
            +628852133333
          </Typography>
        </Link>
      </Stack>

      <Stack direction="row" spacing={2}>
        <IconButton component="a" href="https://www.facebook.com/Eureka" target="_blank" rel="noopener noreferrer">
          <CustomIcon color='#4267B2'><FacebookIcon /></CustomIcon>
        </IconButton>
        <IconButton component="a" href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <CustomIcon color='#1DA1F2'><TwitterIcon /></CustomIcon>
        </IconButton>
        <IconButton component="a" href="https://instagram.com/Eureka" target="_blank" rel="noopener noreferrer">
          <CustomIcon color='#C13584'><InstagramIcon /></CustomIcon>
        </IconButton>
        <IconButton component="a" href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
          <CustomIcon color='#FF0000'><YouTubeIcon /></CustomIcon>
        </IconButton>
      </Stack>
    </Box>
  );
};

export default Drawers;
