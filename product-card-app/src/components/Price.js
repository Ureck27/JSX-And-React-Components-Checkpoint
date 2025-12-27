import React from 'react';
import product from './product';

const Price = () => {
  return (
    <h3 style={{ 
      color: '#27ae60', 
      fontWeight: 'bold',
      fontSize: '2rem',
      marginBottom: '15px'
    }}>
      ${product.price}
    </h3>
  );
};

export default Price;

