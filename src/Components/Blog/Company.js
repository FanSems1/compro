import { Box, Grid, Typography } from "@mui/material";
import Companys from "Data/Blog/Company.data";
import styles from "Styles/Blog/Company.styles";

const Company = () => {
    const firstRow = Companys.slice(0, 5); // First 5 images
    const secondRow = Companys.slice(5, 9); // Next 4 images

    return (
        <Box>
            <Typography 
                variant="h4" 
                align="center" 
                sx={{ 
                    mt: 17, 
                    mb: 5, 
                    fontWeight: 'bold'
                }}
            >
                Partner Eureka
            </Typography>
            <Typography 
                variant="body1" 
                align="center" 
                sx={{ 
                    mb: 5
                }}
            >
                Partner bisnis yang telah mempercayai Eureka untuk membantu mereka
            </Typography>

            {/* First Row: 5 images */}
            <Grid container spacing={1} sx={{ justifyContent: "center", mb: 1 }}> {/* Reduced margin-bottom */}
                {firstRow.map((company, i) => (
                    <Grid item xs={2.4} key={i} sx={{ display: "flex", justifyContent: "center" }}>
                        <Box sx={{ textAlign: "center" }}>
                            <a href={company.link} target="_blank" rel="noopener noreferrer">
                                <Box component="img" sx={styles.Image} src={company.logo} />
                            </a>
                        </Box>
                    </Grid>
                ))}
            </Grid>

            {/* Second Row: 4 images */}
            <Grid container spacing={1} sx={{ justifyContent: "center", mt: 3}}> {/* Added negative margin-top */}
                {secondRow.map((company, i) => (
                    <Grid item xs={3} key={i} sx={{ display: "flex", justifyContent: "center" }}>
                        <Box sx={{ textAlign: "center" }}>
                            <a href={company.link} target="_blank" rel="noopener noreferrer">
                                <Box component="img" sx={styles.Image} src={company.logo} />
                            </a>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Company;
