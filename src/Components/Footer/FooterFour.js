import { Box, Typography } from "@mui/material";

// Define styles and data within the same file
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
    "Kontak Kami",
    "Sitemap",
    "Karir",
    "Blog",
];

const FooterTwo = () => {
    return (
        <Box>
            <Typography variant="h6" component="h6" sx={styles.Title}>
                Perusahaan
            </Typography>
            {services &&
                services.map((service, i) => (
                    <Box key={i} sx={styles.Services}>
                        <Typography variant="body1" component="p">
                            {service}
                        </Typography>
                    </Box>
                ))
            }
        </Box>
    );
};

export default FooterTwo;
