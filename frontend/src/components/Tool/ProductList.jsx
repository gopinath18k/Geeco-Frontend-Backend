import React from 'react';

export const ProductList = ({ products }) => {
  if (products.length === 0) return <p>No products match your selection.</p>;

  return (
    <div>
      <h3>Matching Products</h3>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name} - {product.type} - {product.head}</li>
        ))}
      </ul>
    </div>
  );
};
