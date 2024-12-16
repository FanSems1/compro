const styles = {
  Container: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    py: {
      xs: "6px", 
      sm: "8px",
      md: "10px",
      lg: "12px",
      xl: "14px",
      xxl: "16px",
    },
    zIndex: 999,
    backgroundColor: "white",  
    transition: "background-color 0.3s ease, box-shadow 0.3s ease", 

    "&.sticky": {
      backgroundColor: "background.default", 
    },
  },
  
  Nav: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center', 
    flexGrow: 1, 
  }
};

export default styles;
