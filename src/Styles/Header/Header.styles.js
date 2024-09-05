const styles = {
  Container: {
      position: "relative",
      top: 0,
      left: 0,
      width: "100%",
      py: {
          xxl: "16px",
          xl: "14px",
          lg: "12px",
          md: "10px",
          sm: "8px",
          xs: "6px",
      },
      zIndex: 999,
      background: "linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)",
      transition: "background-color 0.3s ease, box-shadow 0.3s ease",
      "&.sticky": {
          backgroundColor: "background.default",
          boxShadow: theme => `0 4px 8px ${theme.palette.primary.box_shadow_black}`,
      },
      borderBottom: theme => `1px solid ${theme.palette.divider}`,
      borderRadius: 1,
      backdropFilter: "blur(10px)",
  },
  Nav: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center', // Make sure Nav links align center vertically
      flexGrow: 1, 
  }
};

export default styles;
