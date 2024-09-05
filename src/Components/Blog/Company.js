import { Box, Grid, Typography } from "@mui/material";

// Data
import Companys from "Data/Blog/Company.data";

// Styles
import styles from "Styles/Blog/Company.styles";

const Company = () => {
    return (
        <Box>
            <Typography 
                variant="h4" 
                align="center" 
                sx={{ 
                    mt: 0, 
                    mb: 3, 
                    fontWeight: 'bold'  // Make the text bold
                }}
            >
                Project Eureka
            </Typography>
            <Typography 
                variant="body1" 
                align="center" 
                sx={{ 
                    mb: 2  // Add margin below the body text
                }}
            >
                Partner bisnis yang telah mempercayai Eureka untuk membantu mereka
            </Typography>
            <Grid container spacing={3} sx={{ alignItems: "center" }}>
                {Companys &&
                    Companys.map((company, i) => (
                        <Grid item msm={3} xxs={6} key={i}>
                            <Box sx={{ textAlign: "center" }}>
                                <a href={company.link} target="_blank" rel="noopener noreferrer">
                                    <Box component="img" sx={styles.Image} src={company.logo} />
                                </a>
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    );
};

export default Company;
