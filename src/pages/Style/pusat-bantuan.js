// style/pusat-bantuan.js

const styles = (theme) => ({
    container: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(10),
    },
    box: {
      padding: theme.spacing(5),
      borderRadius: theme.shape.borderRadius,
      backgroundColor: '#f9f9f9',
      boxShadow: theme.shadows[3],
    },
    heading: {
      marginBottom: theme.spacing(4),
      textAlign: 'center',
      color: theme.palette.text.primary,
    },
    searchContainer: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: theme.spacing(4),
    },
    searchInput: {
      flex: 1,
    },
    sectionTitle: {
      marginBottom: theme.spacing(3),
      color: theme.palette.text.primary,
    },
    sectionContent: {
      textAlign: 'center',
    },
    faqBox: {
      marginBottom: theme.spacing(2),
    },
    faqButton: {
      textAlign: 'left',
      justifyContent: 'space-between',
      display: 'flex',
    },
    faqAnswer: {
      marginTop: theme.spacing(2),
      padding: theme.spacing(2),
      borderRadius: theme.shape.borderRadius,
      backgroundColor: '#fff',
      boxShadow: theme.shadows[1],
    },
    contactBox: {
      marginTop: theme.spacing(5),
      padding: theme.spacing(5),
      borderRadius: theme.shape.borderRadius,
      backgroundColor: '#e9ecef',
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
    },
  });
  
  export default styles;
  