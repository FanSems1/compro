import { Box } from "@mui/material";
import Image from "next/image";

// Logos
import Logos from "Assets/header/logo.png";

const Logo = () => {
    return (
        <Box sx={{ mt: "2px" }}>
            <a href="http://localhost:3000/" style={{ display: 'inline-block', cursor: 'pointer' }}>
                <Image src={Logos} width={200} height={30} alt="Logo" />
            </a>
        </Box>
    );
};

export default Logo;
