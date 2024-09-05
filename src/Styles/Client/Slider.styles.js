const styles = {
    Container: {
        textAlign: "center",
        padding: "0em 0",
    },
    SectionHeading: {
        color: "#ffffff",
        fontWeight: "bold",
        marginTop: "-1em"
    },
    SubHeading: {
        color: "#cccccc",
        marginBottom: "2em",
    },
    Card: {
        backgroundColor: "#ffe5e5",
        borderRadius: "12px",
        padding: "0.5em",
        textAlign: "left",
        transition: "0.3s",
        maxWidth: "300px",
        width: "100%",
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
        marginBottom: "0.5em",
    },
    JobType: {
        color: "#ff3d3d",
        fontSize: "12px",
        background: "#fff0f0",
        borderRadius: "4px",
        padding: "2px 8px",
        display: "inline-block",
        marginBottom: "0.5em",
    },
    DatePosted: {
        color: "#888888",
        marginBottom: "1em",
    },
    Salary: {
        fontWeight: "bold",
        marginBottom: "0.5em",
    },
    Location: {
        color: "#888888",
        marginBottom: "1em",
    },
    ApplyButton: {
        backgroundColor: "#3a00e5", // button color
        color: "#ffffff",
        borderRadius: "8px",
        padding: "0.6em 1.2em",
        display: "block", // Ensures button takes full width if needed
        marginLeft: "auto", // Push button to the right
        "&:hover": {
            backgroundColor: "#2a00c5",
        },
    },
    Navigation: {
        display: "flex",
        justifyContent: "flex-start", // Align the pagination to the left
        alignItems: "center",
        marginTop: "2em",
        paddingLeft: "140px"
    },
    Avatar: {
        marginRight: '180px',
        marginBottom: '-2em',
        marginTop: '1em'
      },
};

export default styles;
