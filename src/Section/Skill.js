import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';

const data = [
    {
        value: "18",
        label: "Years Services",
    },
    {
        value: "25+",
        label: "Trusted Partners",
    },
    {
        value: "5",
        label: "Unit Business",
    },
    {
        value: "10,000",
        label: "Transaction/years",
    }
];

const Skill = () => {
    return (
        <Container maxWidth="xl" sx={{ textAlign: 'center', mt: 4, mb: 5 }}>
            <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
                Mengapa Eureka?
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
                Alasan mengapa eureka menjadi partner yang baik untuk business anda
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                {data.map((item, index) => (
                    <Grid item xs={6} sm={3} key={index}>
                        <Box sx={{
                            backgroundColor: '#ffffff',
                            borderRadius: '8px',
                            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                            padding: '20px',
                            textAlign: 'center',
                        }}>
                            <Typography variant="h3" sx={{ color: '#213689', fontWeight: 'bold' }}>
                                {item.value}
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#213689' }}>
                                {item.label}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Skill;
