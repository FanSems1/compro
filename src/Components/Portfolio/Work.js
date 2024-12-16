import { useState } from "react";
import { Grid, Box, Typography, Dialog, DialogTitle, DialogContent, DialogContentText, ButtonBase } from "@mui/material";
import Link from "next/link";
import { PlusIcon } from "Utilis/Icons";
import styles from "Styles/Portfolio/Work.styles";
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';

const Work = ({ works }) => {
    const [open, setOpen] = useState(null);

    const handleClickOpen = (index) => () => {
        setOpen(index);
        const header = document.querySelector('header');
        const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
        header.style.paddingRight = `${scrollBarWidth}px`;
    };

    const handleClose = () => {
        setOpen(null);
        const header = document.querySelector('header');
        header.style.paddingRight = "0px";
    };

    return (
        <Grid 
            container 
            rowSpacing={6} 
            columnSpacing={{ xxl: 45, md: 22, smd: 10, lsm: 8, msm: 4, sm: 2, xxs: 2 }}
        >
            {works &&
                works.map((work, i) => (
                    <Grid item xs={12} sm={6} key={i}>
                        <Box 
                            sx={{
                                ...styles.ImageContainer,
                                marginLeft: {
                                    lsm: `${i % 2 ? "unset" : "auto"}`,
                                    sm: "unset"
                                }
                            }}
                        >
                            <Link href={work.url} passHref>
                                <ButtonBase 
                                    onClick={handleClickOpen(i)} 
                                    component="a" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    sx={{ display: 'block', textAlign: 'left', width: '100%' }}
                                >
                                    <Box sx={styles.ImageBox}>
                                        <Box component="img" src={work.image} alt={work.name} />
                                        <Box className="css-mui-svg">
                                            <PlusIcon />
                                        </Box>
                                    </Box>
                                    <Typography
                                        variant="h5"
                                        component="h5"
                                        sx={styles.WorkTitle}
                                    >
                                        {work.name}
                                    </Typography>
                                </ButtonBase>
                            </Link>
                        </Box>
                    </Grid>
                ))
            }
        </Grid>
    );
};

export default Work;
