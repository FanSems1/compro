const styles = {
  Container: {
    mt: {
      xs: "1em",  
      sm: "2em",
      md: "4em",
      lg: "6em",
    },
    mb: {
      xs: "0.5em", 
      sm: "1em",
      md: "1.5em",
      lg: "2em",
    },
    pb: "2em",
    position: "relative",
    display: "flex",
    flexDirection: {
      xs: "column",
      md: "row",
    },
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0",
    backgroundColor: "#E7E9F5",
    backdropFilter: 'blur(10px)',
    borderRadius: '38px',
  },

  Title: {
    fontWeight: 700,
    position: "relative",
    fontFamily: "Montserrat, sans-serif",
    mb: "1em",
    left: "-3em",
    fontSize: {
      xs: "1.5rem",
      sm: "1.75rem",
      md: "2rem",
      lg: "2.15rem",
    },
    color: '#333', 
    textAlign: {
      xs: "center", 
      md: "left",
    },
  },

  Description: {
    fontFamily: "Montserrat, sans-serif",
    mb: "1em",
    fontSize: '20px',
    lineHeight: '1.5',
    left: "-5em",
    width: "650px",
    position: "relative",
    color: '#555', 
    textAlign: {
      xs: "center", 
      md: "left", 
    },
  },
  Button: {
    color: "blue", 
    p: "0.8em 1em",
    right: 100,
    borderRadius: "24px",
    fontSize: "0.875rem",
    fontWeight: 500,
    transition: "0.3s ease", 
    svg: {
      fontSize: "1rem",
      ml: "0.5em",
      mb: "-0.1em",
    },
    "&:hover": {
      backgroundColor: "#213689",
      color: "background.default",
    },
  },

  Image: {
    width: "460px",
    height: "360px",
    maxWidth: {
      xs: "100%",  
      md: "40%",   
    },
    objectFit: 'cover', 
    display: 'block', 
  },
};

export default styles;
