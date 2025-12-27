import React from 'react';
import product from './product';

const Image = () => {
  return (
    <img 
      src={product.image} 
      alt={product.name}
      style={{ 
        width: '100%',
        height: '300px',
        objectFit: 'cover',
        borderRadius: '12px 12px 0 0'
      }}
    />
  );
};

export default Image;
