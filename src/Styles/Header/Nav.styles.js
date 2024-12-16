const styles = {
  Navs: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexGrow: 1,
    gap: '16px',
    marginRight: '20px',
  },
  Buttons: {
    fontSize: '16px',
    fontWeight: '500',
    color: '#333',
    padding: '10px 20px',
    borderRadius: '8px',
    textTransform: 'none',
    transition: 'background-color 0.3s, color 0.3s, transform 0.3s',
    '&:hover': {
      backgroundColor: '#3848A8',
      color: '#000',
      transform: 'translateY(-2px)',
    },
    '&:active': {
      transform: 'translateY(1px)',
    },
  },
  ProductMenuContent: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '5px',
  },
  MenuItemGroup: {
    fontWeight: 'bold',
    color: '#007BFF',
  },
  MenuItem: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '8px',
    transition: 'background-color 0.3s, transform 0.3s',
    '&:hover': {
      backgroundColor: '#f5f5f5',
      transform: 'scale(1.02)',
    },
  },
  MenuItemIconWrapper: {
    width: '40px',
    height: '40px',
    marginRight: '12px',
  },
  MenuItemIcon: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  MenuItemTitle: {
    fontSize: '16px',
    fontWeight: '600',
    alignItems: 'center',
    color: '#000',
  },
};

export default styles;

