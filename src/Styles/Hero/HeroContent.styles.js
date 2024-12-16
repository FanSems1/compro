const styles = {
    Container: {
        width: {
            smd: "45vw",
            xxs: "100%"
        },
        position: "relative",
        zIndex: "1"
    },
    Title: {
        fontWeight: 600,
        fontSize: '64px',
        fontFamily: "Montserrat, sans-serif",
        mt: "100px",
        color: 'white',
        textAlign: "left",
        lineHeight: '90px',
    },
    Slogan: {
        textAlign: "left",
        fontWeight: 600,
        fontSize: '64px',
        color: 'white',
        fontFamily: "Montserrat, sans-serif",
        lineHeight: '90px',
    },
    Description: {
        mt: "20px",
        fontSize: "17.5px",
        fontWeight: 400,
        textAlign: "left",
        color: '#9DA4D4',
        fontFamily: "Montserrat, sans-serif",
        position: "relative",
        textAlign: "left", 
        lineHeight: '22px',
        "&:after": {
            width: "3px",
            backgroundColor: "primary.main",
            position: "absolute",
            left: "0",
        }
    },
    ButtonWrapper: {
        display: 'flex',
        justifyContent: 'left',
        gap: '12px' 
    },
    Button: {
        padding: '10px 20px',
        fontSize: '14px',
        borderRadius: '30px',
        fontFamily: "Montserrat, sans-serif",
        textTransform: 'none',
        mt: '40px',
        gap: 8,
    },
    PrimaryButton: {
        backgroundColor: '#0F2296',
        width: '160px',
        height: '41px',
        weight: 500,
        fontSize: '14px',
        fontFamily: "Montserrat, sans-serif",
        color: '#fff',
        '&:hover': {
            backgroundColor: 'transparent',
            border: '1px solid',
            borderColor: 'primary.main',
            color: 'white',
        },
    },
    SecondaryButton: {
        backgroundColor: 'transparent',
        width: '160px',
        height: '41px',
        fontFamily: "Montserrat, sans-serif",
        border: '1px solid',
        borderColor: 'white',
        color: 'white',
        marginLeft: '16px', 
        '&:hover': {
            backgroundColor: 'primary.light',
            color: '#fff',
        },
    },
};

export default styles;
