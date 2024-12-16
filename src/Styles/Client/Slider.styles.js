const styles = {
    Container: {
        textAlign: "center",
        padding: "1em ",
        marginBottom: '-70px',
        marginTop: '-40px',
        marginLeft: '80px',
        marginRight: '80px',
    },
    SectionHeading: {
        color: "#ffffff",
        fontFamily: "Montserrat, sans-serif",
        fontWeight: "bold",
        marginTop: "-1em",
        marginBottom: "0.5em",
    },
    SubHeading: {
        color: "#E3E3E3",
        fontFamily: "Montserrat, sans-serif",
        marginBottom: "3em",
        fontSize: "20px",
        fontWeight: "500",
        gap: "12px",
        textItems: "center"
    },
    Card: {
        backgroundColor: "#FFFFFF",
        borderRadius: "10px",
        padding: "1em",
        textAlign: "left",
        transition: "0.3s",
        maxWidth: "440px",
        height: "302px",
        width: "420px",
        margin: "0 auto",
        "&:hover": {
            transform: "translateY(-10px)",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        },
    },
    IconBox: {
        display: "flex",
        justifyContent: "center",
        marginBottom: "2em",
    },
    JobTitle: {
        fontWeight: "bold",
        marginBottom: "1.5em",
        fontSize: '24px',
    },
    JobType: {
        color: "#3848A8",
        fontSize: "16px",
        background: "##FFFFFF",
        borderRadius: "12px",
        padding: "6px 8px",
        display: "inline-block",
        marginBottom: "2em",
        border: '2px solid #3848A8',
    },
    Deadline: {
        color: "#888888",
        marginBottom: "1em",
        fontSize: '16px'
    },
    Salary: {
        fontWeight: "bold",
        marginBottom: "0.5em",
    },
    Location: {
        color: "#888888",
        marginBottom: "2.5em",
        fontSize: '16px'
    },
    ApplyButton: {
        backgroundColor: "#0F2296",
        color: "#ffffff",
        width: "130px",
        fontSize: "13.5px",
        fontFamily: "Montserrat, sans-serif",
        height: "41px",
        borderRadius: "8px",
        padding: "12px 8px",
        display: "block", 
        bottom: "3.6em",
        marginLeft: "auto",
        "&:hover": {
            backgroundColor: "#2a00c5",
        },
    },
    Navigation: {
        display: "flex",
        justifyContent: "flex-start", 
        alignItems: "center",
        marginTop: "2em",
        paddingLeft: "20px",
    },
    Avatar: {
        marginRight: '180px',
        marginBottom: '-2em',
        marginTop: '1em'
      },
};

export default styles;
