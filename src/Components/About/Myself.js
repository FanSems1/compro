import React from 'react';
import { Stack, ButtonBase, Typography } from "@mui/material";
import AboutImage from "Assets/Pict/cewevictory.png"; // Update the path to the image file
import styles from "Styles/About/Myselft.styles";
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';

const Myself = () => {
    return (
        <div style={styles.Container}>
            <div style={{ maxWidth: '600px', marginTop: '3em', marginBottom: '0em' }}>
                <Typography variant="h4" component="h4" sx={styles.Title}>
                    Salam Super Victory!
                </Typography>
                <Typography variant="body1" component="p" sx={styles.Description}>
                    Lorem ipsum dolor sit amet consectetur. Nam eget orci duis in gravida. Dolor tristique ut mauris aliquam. Adipiscing non ut vestibulum vulputate amet lacus nulla volutpat. Curabitur volutpat vitae senectus porttitor sed elementum.
                </Typography>
                <ButtonBase sx={styles.Button}>
                    Lihat Selengkapnya
                    <ArrowForwardTwoToneIcon sx={{ marginLeft: '0.5em' }} />
                </ButtonBase>
            </div>
            <img src={AboutImage} alt="About" style={styles.Image} />
        </div>
    );
};

export default Myself;
