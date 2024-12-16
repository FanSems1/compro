import { Box, Typography } from "@mui/material";

const styles = {
    Title: {
        fontWeight: 700,
        mb: "1.8em",
    },
    Services: {
        mb: "12px",
        width: "max-content",
        "& p": {
            cursor: "pointer",
            transition: "0.5s",
            svg: {
                fontSize: "20px",
                mb: "-3px",
                mr: "5px",
            },
        },
        "&:hover": {
            "& p": {
                color: "primary.main",
                letterSpacing: "1.5px",
            },
        },
    },
};

const services = [
    { name: "Klien Kami", url: "/solusi" }, 
    { name: "Pusat Bantuan", url: "/pusat-bantuan" },  
];

const FooterThree = () => {
    return (
        <Box>
            <Typography variant="h6" component="h6" sx={styles.Title}>
                Tentang Eureka
            </Typography>
            {services &&
                services.map((service, i) => (
                    <Box key={i} sx={styles.Services}>
                        <Typography
                            variant="body1"
                            component="a"
                            href={service.url}
                            target={service.url.startsWith("http") ? "_blank" : "_self"}  // Membuka di tab baru jika link eksternal
                            sx={{ textDecoration: 'none', color: 'inherit' }}  // Teks tetap hitam tanpa garis bawah
                        >
                            {service.name}
                        </Typography>
                    </Box>
                ))
            }
        </Box>
    );
};

export default FooterThree;
