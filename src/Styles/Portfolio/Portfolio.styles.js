const styles = {
    Container: {
        display: 'grid',
        gridTemplateColumns: {
            lg: 'repeat(2, 1fr)',  // 2-column grid for larger screens
            md: 'repeat(2, 1fr)',  // 2-column grid for medium screens
            sm: 'repeat(1, 1fr)',  // 1-column grid for smaller screens
            xs: 'repeat(1, 1fr)',  // 1-column grid for extra small screens
        },
        gap: '2em',
        padding: {
            lg: '4em 6em',  // Larger padding for large screens
            md: '3em 4em',  // Medium padding for medium screens
            sm: '2em 2em',  // Smaller padding for small screens
            xs: '1em',      // Smallest padding for extra small screens
        },
        position: 'relative',  // To position particles correctly
    },
    SectionHeading: {
        gridColumn: '1 / -1',  // Heading spans all columns
        textAlign: 'center',
        marginBottom: '2.5em',
        fontSize: {
            lg: '2em',
            md: '1.8em',
            sm: '1.6em',
            xs: '1.4em',
        },
        fontWeight: 'bold',
        color: '#333',
    },
    Item: {
        gridColumn: {
            lg: 'span 1',
            md: 'span 1',
            sm: 'span 1',
            xs: 'span 1',
        },
        padding: '1.5em',
        boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#ffffff',
        borderRadius: '10px',
        transition: 'all 0.3s ease',
        '&:hover': {
            boxShadow: '0px 8px 25px rgba(0, 0, 0, 0.15)',
            transform: 'translateY(-10px)',  // Lift the card slightly on hover
        },
        textAlign: 'center',
    },
    Button: {
        marginTop: '1.5em',
        padding: '0.8em 2em',
        color: '#fff',
        backgroundColor: '#007BFF',
        borderRadius: '5px',
        textTransform: 'uppercase',
        fontSize: '0.9em',
        '&:hover': {
            backgroundColor: '#0056b3',
        },
        transition: 'background-color 0.3s ease',
    },
    Particle: {
        position: 'absolute',
        bottom: '-20px',
        right: '-20px',
        width: '30%',
        height: 'auto',
        opacity: 0.6,
        zIndex: '-1',
    },
};

export default styles;
