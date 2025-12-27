import React from 'react';
import product from './product';

const Description = () => {
  return (
    <p style={{ 
      color: '#555',
      lineHeight: '1.6',
      fontSize: '1rem',
      marginBottom: '20px'
    }}>
      {product.description}
    </p>
  );
};

export default Description;

