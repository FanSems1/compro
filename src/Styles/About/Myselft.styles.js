const styles = {
    Container: {
        mt: {
            msm: "0.5em",  // Margin top
            sm: "6em",
            xxs: "5em"
        },
        mb: {
            lg: "2em",     // Margin bottom untuk ukuran layar besar
            md: "1.5em",   // Margin bottom untuk ukuran layar sedang
            sm: "1em",     // Margin bottom untuk ukuran layar kecil
            xs: "0.5em"    // Margin bottom untuk ukuran layar ekstra kecil
        },
        pb: "51rem",      // Padding bottom
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1.5rem",    // Jarak antara teks dan gambar
    },

    Title: {
        fontWeight: 700,
        mb: "20px",
        fontSize: {
            lg: "2.125rem",
            md: "2rem",
            lsm: "2.125rem",
            msm: "2rem",
            sm: "1.9rem",
            xs: "1.8rem",
            xxs: "1.5rem"
        },
        pl: "1rem"  // Menambahkan padding-left untuk menggeser teks ke samping
    },
    Description: {
        mb: "15px",
        pl: "15px",
        maxWidth: "80%",
        position: "relative",
        // "&:after": {
        //     content: '""',
        //     width: "3px",
        //     top: "7px",
        //     bottom: "5px",
        //     backgroundColor: "primary.main",
        //     position: "absolute",
        //     left: "0"
        // }
    },
    Button: {
        // backgroundColor: "primary.light",
        color: "blue",
        p: "14px 25px",
        ml: "20px",
        mt: "5px",
        borderRadius: "5px",
        fontSize: "14px",
        fontWeight: 500,
        transition: "0.3s ease",
        svg: {
            // color: "background.default",
            fontSize: "17px",
            ml: "10px",
            mb: "-1px"
        },
        "&:hover": {
            backgroundColor: "#213689",
            color: "background.default"
        }
    },
    Image: {
        maxWidth: "25%",
        marginLeft: "auto",
        marginTop: "0px",
        borderRadius: "8px",
        marginRight: "100px", // Shift the image slightly to the left
    }
};

export default styles;
