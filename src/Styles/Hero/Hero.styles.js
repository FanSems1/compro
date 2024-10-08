import HeroPng from "Assets/hero/hero1.png";

const styles = {
    Container: {
        pt: {
            xxl: "25em",
            xl: "0em",
            lg: "15em",
            md: "10em",
            smd: "12em",
            lsm: "10em",
            msm: "9em",
            sm: "8em",
            xs: "7em",
            xxs: "6em"
        },
        pb: {
            xxl: "15em",
            xl: "8.3em",
            lg: "9em",
            md: "6em",
            smd: "3em",
            lsm: "5em",
            msm: "4em",
            sm: "4em",
            xs: "4em",
            xxs: "3.5em"
        },
        position: "relative",
        backgroundImage: `url(${HeroPng})`,
        backgroundSize: 'contain', // Pastikan gambar latar belakang menutupi seluruh elemen
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh',  // Atur tinggi untuk menutupi seluruh viewport
        display: 'flex',
        alignItems: 'center', // Vertikal tengah
        justifyContent: 'center' // Horizontal tengah
    },
    // HeroImage: {
    //     position: "absolute",
    //     right: {
    //         xxl: "5%",
    //         lg: "5%",
    //         md: "10%",
    //         sm: "15%",
    //         xs: "20%",
    //         xxs: "25%"
    //     },
    //     bottom: "0",
    //     top: {
    //         xxl: "10%",
    //         xl: "15%",
    //         lg: "20%",
    //         md: "25%",
    //         sm: "30%",
    //         xs: "35%",
    //         xxs: "40%"
    //     },
    //     width: {
    //         xxl: "30%",
    //         lg: "40%",
    //         md: "50%",
    //         sm: "60%",
    //         xs: "70%",
    //         xxs: "80%"
    //     },
    //     display: {
    //         xxs: "none",
    //         smd: "block"
    //     }
    // },
    // Particle: {
    //     position: "absolute",
    //     left: "0",
    //     bottom: "5%",
    //     width: {
    //         smd: "60%",
    //         xxs: "90%"
    //     },
    //     height: "80%"
    // }
};

export default styles;
