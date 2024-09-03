const styles = {
    Container: {
        width: {
            xxl: "35%",
            xl: "40%",
            lg: "45%",
            md: "50%",
            sm: "60%",
            xs: "80%",
            xxs: "100%"
        },
        position: "relative",
        zIndex: "1"
    },
    Title: {
        fontWeight: 700,
        fontSize: {
            xxl: "4rem",
            xl: "3.5rem",
            lg: "3rem",
            md: "2.5rem",
            sm: "2rem",
            xs: "1.8rem",
            xxs: "1.6rem"
        },
        mb: {
            xxl: "20px",
            xs: "15px",
            xxs: "10px"
        }
    },
    Slogan: {
        fontWeight: 500,
        fontSize: {
            xxl: "30px",
            xl: "28px",
            lg: "20px",
            md: "24px",
            sm: "22px",
            xs: "20px",
            xxs: "18px"
        }
    },
    Description: {
        mt: {
            xxl: "40px",
            xs: "30px",
            xxs: "20px"
        },
        mb: {
            xxl: "20px",
            xs: "15px",
            xxs: "10px"
        },
        fontSize: {
            xxl: "50px",
            xl: "35px",
            lg: "40px",
            md: "35px",
            sm: "30px",
            xs: "25px",
            xxs: "20px"
        },
        fontWeight: 500,
        pl: "10px",
        position: "relative",
        "&:after": {
            content: '""',
            width: "4px",
            backgroundColor: "primary.main",
            position: "absolute",
            left: "0",
            top: "5px",
            bottom: "5px"
        }
    },
    Button: {
        backgroundColor: "primary.light",
        p: {
            xxl: "16px 30px",
            xl: "14px 28px",
            lg: "14px 25px",
            md: "12px 20px",
            sm: "10px 18px",
            xs: "8px 15px"
        },
        mt: "4px",
        borderRadius: "4px",
        fontSize: {
            xxl: "16px",
            xl: "15px",
            lg: "14px",
            md: "13px",
            sm: "12px",
            xs: "11px"
        },
        fontWeight: 500,
        transition: "0.3s ease",
        svg: {
            color: "background.default",
            fontSize: {
                xxl: "20px",
                xl: "18px",
                lg: "17px",
                md: "16px",
                sm: "15px",
                xs: "14px"
            },
            ml: "10px",
            mb: "-1px"
        },
        "&:hover": {
            backgroundColor: "primary.main",
            color: "background.default"
        }
    }
};

export default styles;
