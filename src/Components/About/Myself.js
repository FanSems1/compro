import React from 'react';
import { ButtonBase, Typography } from "@mui/material";
import AboutImage from "Assets/Pict/cewevictory.png"; 
import styles from "Styles/About/Myselft.styles";
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import Image from 'next/image';

const Myself = () => {
    return (
        <div style={styles.Container}>
            <div style={{ maxWidth: '600px', marginTop: '2em', marginBottom: '0em' }}>
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
            <div style={{ marginRight: 60, marginLeft: 30, width: '100%', maxWidth: '460px', height: '360px', display: 'block' }}>
                <Image
                    src={AboutImage}
                    alt="About"
                    width={460}
                    height={360} 
                    style={{
                        width: '100%',
                        height: '100%',
                        marginLeft: 40,
                        objectFit: 'cover',
                    }}
                />
            </div>
            </div>
    );
};

export default Myself;
