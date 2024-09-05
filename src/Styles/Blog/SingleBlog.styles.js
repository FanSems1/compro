const styles = {
    BoxContainer: {
        backgroundColor: "background.default",
        borderRadius: "30px",
        boxShadow: theme => `12px 6px 40px ${theme.palette.primary.box_show_blog}`,
        overflow: "hidden",  // Ensures content doesn't overflow the box
        height: "100%",  // Makes sure the box stretches to full height
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    Image: {
        borderRadius: "30px 30px 0 0",
        width: "100%",
        height: "200px",  // Consistent image height
        objectFit: "cover",  // Ensures the image covers the entire area without distortion
    },
    Content: {
        p: "2em",
        position: "relative",
        flexGrow: 1,  // Ensures content stretches to fill the space between image and button
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    Category: {
        position: "absolute",
        top: "-3%",
        backgroundColor: "background.default",
        p: "5px 15px",
        borderRadius: "5px",
        transform: "translateY(-50%)",
        boxShadow: theme => `0 0 14px ${theme.palette.primary.box_shadow_blog_2}`,
    },
    Title: {
        fontWeight: 700,
        letterSpacing: "1.2px",
        mb: "15px",
        fontSize: {
            lg: "1.25rem",
            md: "1.2rem",
        },
    },
    Button: {
        backgroundColor: "#213689",
        color: "#ffffff",
        p: "14px 25px",
        mt: "30px",
        borderRadius: "5px",
        fontSize: "14px",
        fontWeight: 500,
        svg: {
            color: "background.default",
            fontSize: "17px",
            ml: "10px",
            mb: "-1px",
        },
        transition: "0.3s ease",
        "&:hover": {
            backgroundColor: "primary.main",
            color: "background.default",
        },
        alignSelf: "flex-start",  // Ensures the button is positioned correctly within the card
    },
};

export default styles;
