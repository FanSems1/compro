import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
    typography: {
        fontFamily: "Inter"
        // 400 Regular
        // 500 Medium
        // 600 Semi-Bold
        // 700 Bold
        // 800 Extra-Bold
    },
    palette: {
        text: {
            primary: "#121315", // Default Text Color
            secondary: "#555657" // Secondary Text Color
        },
        background: {
            default: "#FFFFFF" // Default Background Color
        },
        primary: {
            main: "#213689", // Document Main Primary Color
            light: "#213689", // Document Light Color (Button Background)
            box_shadow_black: "#969799", // Box Shadow Black (Header Sticky)
            success: "#4CAF50", // SuccessMessage Color
            box_shadow_client: "#33a4f5", /// Box Shadow Clinet Slider
            box_show_blog: "#E7E7E7", //Box Shadow Blog Section
            box_shadow_blog_2: "#0000001a", // Box Shadow Blog Category
            divider: "#AEAEAE", // Divider Color (All Section Divider)
            social_bg: "#E7E7E7", // Social Background Color
            social_color: "#415674", // Social Icon Color
            inputBorder: "#4e524f", //For NewsLetter Input Border Color
            HeroGradient: "linear-gradient(90deg, rgba(223,234,233,1) 0%, rgba(45,79,229,1) 100%)", // Gradient (Hero Section)
            WorkGradient: "linear-gradient(90deg, rgba(223,234,233,1) 0%, rgba(255,102,118,1) 100%)", // Gradient (Portfolio Section)
            ContactGradient: "linear-gradient(90deg, rgba(223,234,233,1) 0%, rgba(45,79,229,1) 100%)", // Gradient (Contact Section)
            ContactImage: `url('/images/contact-image.jpg') no-repeat center center`,
        }
    },
    breakpoints: {
        values: {
            xxs: 0, // Double Extra Small Devices
            xs: 360, // Extra Small Devices
            sm: 480, // Small Devices
            msm: 576, // Medium Small Devices
            lsm: 640, // Large Small Devices
            smd: 768, // Small Medium Devices
            md: 992, // Medium Devices
            lg: 1200, // Large Devices
            xl: 1536, // Extra Small Devices
            xxl: 1980 // Double Extra Devices
        },
    },
    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    '@media (min-width: 0px)': {
                        paddingLeft: '3%',
                        paddingRight: '3%',
                    },
                    '@media (min-width: 380px)': {
                        paddingLeft: '3%',
                        paddingRight: '3%',
                    },
                    '@media (min-width: 992px)': {
                        paddingLeft: '3%',
                        paddingRight: '3%',
                    },
                    '@media (min-width: 1200px)': {
                        paddingLeft: '5%',
                        paddingRight: '5%',
                    }
                }
            }
        },
        MuiButtonBase: {
            styleOverrides: {
                root: {
                    fontFamily: "Inter"
                },
            },
        },
    }
});

export default theme;