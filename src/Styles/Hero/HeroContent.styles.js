const styles = {
    Container: {
        width: {
            xxl: "35%",
            xl: "70%",
            lg: "45%",
            md: "50%",
            sm: "60%",
            xs: "80%",
            xxs: "100%"
        },
        position: "absolute",
        ml: "-300px",
        zIndex: "1",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end", // Align content to the bottom
        alignItems: "flex-start", // Align content to the left
        height: "100vh", // Full height to ensure content is at the bottom
        paddingBottom: "10px", // Space from the bottom
        paddingLeft: "0px", // Space from the left
    },
    Title: {
        fontWeight: 500,
        fontSize: {
            xxl: "3rem",
            xl: "2rem",
            lg: "2rem",
            md: "1.5rem",
            sm: "1rem",
            xs: "0.8rem",
            xxs: "0.6rem"
        },
        mb: "-15px", // Margin bottom to space out from the next element
        textAlign: "left" // Align text to the left
    },
    Description: {
        mt: "20px",
        mb: "20px",
        fontSize: {
            xxl: "50px",
            xl: "15px",
            lg: "20px",
            md: "35px",
            sm: "30px",
            xs: "25px",
            xxs: "20px"
        },
        textAlign: "left" // Align text to the left
    },
    Button: {
        border: "2px solid rgba(255, 255, 255, 0.5)", // White border with 50% transparency
        p: "14px 25px",
        mt: "0px",
        borderRadius: "4px",
        fontSize: "14px",
        fontWeight: 500,
        transition: "0.3s ease",
        svg: {
            color: "white", // Icon color
            fontSize: "17px",
            ml: "10px",
            mb: "-1px"
        },
        "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.1)", // Light white background on hover
            borderColor: "rgba(255, 255, 255, 0.8)", // Slightly more opaque border on hover
            color: "white" // Text color on hover
        },
        textAlign: "left" // Align text to the left
    }
};

export default styles;
