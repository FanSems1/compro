import { useState, useEffect, useCallback } from "react";
import { Box, Button, ButtonBase, Typography, Card, CardContent, Grid } from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "Utilis/Icons";

// Styles
import styles from "Styles/Client/Slider.styles";

// Mock data
import Careers from "Data/Client/Client.data";

const Sliders = () => {
    const [viewportRef, embla] = useEmblaCarousel({ 
        dragFree: true, 
        containScroll: "trimSnaps", 
        loop: false, 
        align: "start" 
    });
    const [currentIndex, setCurrentIndex] = useState(0);
    const slidesToShow = 3;

    const scrollPrev = useCallback(() => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    }, [currentIndex]);

    const scrollNext = useCallback(() => {
        if (currentIndex < Careers.length - slidesToShow) {
            setCurrentIndex(currentIndex + 1);
        }
    }, [currentIndex, slidesToShow]);

    useEffect(() => {
        if (!embla) return;
        embla.on("select", () => setCurrentIndex(embla.selectedScrollSnap()));
    }, [embla]);

    const visibleCareers = Careers.slice(currentIndex, currentIndex + slidesToShow);

    return (
        <Box sx={styles.Container}>
            <Typography variant="h4" sx={styles.SectionHeading}>
                Peluang Karir Bersama Eureka
            </Typography>
            <Typography variant="subtitle1" sx={styles.SubHeading}>
                Tunjukkan potensi terbaik anda pada dunia, kami dengan senantiasa menantikan kehadiran anda untuk bergabung bersama Eureka Team!
            </Typography>

            <Box ref={viewportRef} sx={styles.SliderViewport}>
                <Grid container spacing={2}>
                    {visibleCareers.map((career, i) => (
                        <Grid item xs={12} sm={6} md={4} key={i}>
                            <Card sx={styles.Card}>
                                <Box sx={styles.IconBox}>
                                    <img src={career.avatar} alt={`${career.title} icon`} style={styles.Avatar} />
                                </Box>
                                <CardContent sx={styles.CardContent}>
                                    <Typography variant="h6" sx={styles.JobTitle}>
                                        {career.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" sx={styles.JobType}>
                                        {career.type || "Full-Time"}
                                    </Typography>
                                    <Typography variant="caption" display="block" sx={styles.DatePosted}>
                                        {career.datePosted || "24/08/2024"}
                                    </Typography>
                                    <Typography variant="body1" sx={styles.Salary}>
                                        {career.salary}
                                    </Typography>
                                    <Typography variant="caption" display="block" sx={styles.Location}>
                                        {career.location || "Jakarta, Indonesia"}
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        sx={styles.ApplyButton}
                                        onClick={() => window.open(career.link)}
                                    >
                                        Apply now
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <Box sx={styles.Navigation}>
                <PrevButton onClick={scrollPrev} enabled={currentIndex > 0} />
                <NextButton onClick={scrollNext} enabled={currentIndex < Careers.length - slidesToShow} />
            </Box>
        </Box>
    );
};

// Button components
const PrevButton = ({ enabled, onClick }) => (
    <ButtonBase
        style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: enabled ? "#ffffff" : "#cccccc",
            borderRadius: "0",
            width: "35px",
            height: "33px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            cursor: enabled ? "pointer" : "not-allowed",
            marginRight: "1em",
        }}
        onClick={onClick}
        disabled={!enabled}
    >
        <ChevronLeft />
    </ButtonBase>
);

const NextButton = ({ enabled, onClick }) => (
    <ButtonBase
        style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: enabled ? "#ffffff" : "#cccccc",
            borderRadius: "0",
            width: "35px",
            height: "33px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            cursor: enabled ? "pointer" : "not-allowed",
        }}
        onClick={onClick}
        disabled={!enabled}
    >
        <ChevronRight />
    </ButtonBase>
);

export default Sliders;
