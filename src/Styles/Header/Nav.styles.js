const styles = {
    Navs: {
        display: 'flex',
        justifyContent: 'flex-end',
        textAlign: "center",
        a: {
            margin: "0 10px",
            textDecoration: 'none',
            color: 'inherit',
            "&.active": {
                color: "primary.main",
            }
        },
    },
    Buttons: {
        fontSize: "13px",
        borderRadius: "1px",
        padding: "4px 10px",
        fontWeight: 700,
        transition: "0.2s ease",
        '@media (max-width: 768px)': {
            fontSize: "14px",
            padding: "6px 12px",
        },
        '@media (max-width: 480px)': {
            fontSize: "1px",
            padding: "4px 8px",
        }
    }
};

export default styles;
