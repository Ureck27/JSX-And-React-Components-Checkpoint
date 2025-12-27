import React from 'react';
import product from './product';

const Name = () => {
  return (
    <h2 style={{ 
      color: '#2c3e50', 
      fontWeight: 'bold',
      marginBottom: '10px',
      fontSize: '1.8rem'
    }}>
      {product.name}
    </h2>
  );
};

export default Name;

