import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link"; 
import Logos from "Assets/header/logo.png";

const Logo = () => {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        margin: '0 auto', 
        paddingLeft: '17px' 
      }} 
    >
      <Link href="/" passHref>
        <Image 
          src={Logos} 
          width={110} 
          height={48} 
          alt="Logo" 
          style={{ 
            objectFit: 'contain', 
            borderRadius: '0px', 
            cursor: 'pointer',
          }} 
        />
      </Link>
    </Box>
  );
};

export default Logo;
