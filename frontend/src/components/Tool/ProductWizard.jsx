import React, { useState } from 'react';
import { products } from '../data/products';
import { ProductList } from './ProductList';

export const ProductWizard = () => {
  const [step, setStep] = useState(1);
  const [filters, setFilters] = useState({
    usage: "",
    type: "",
    head: ""
  });

  const handleSelect = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
    setStep((prev) => prev + 1);
  };
  

  const getFilteredProducts = () => {
    return products.filter((product) =>
      product.usage === filters.usage &&
      product.type === filters.type &&
      product.head === filters.head
    );
  };
  

  
  

  return (
    <div style={{ padding: "20px" }}>
      {step === 1 && (
        <>
          <h3>1. Where do you use this product?</h3>
          {["commercial", "agriculture", "domestic", "apartment"].map((option) => (
            <button key={option} onClick={() => handleSelect("usage", option)}>{option}</button>
          ))}
        </>
      )}

      {step === 2 && (
        <>
          <h3>2. What type of pump?</h3>
          {["submersible", "open well", "boost pump"].map((option) => (
            <button key={option} onClick={() => handleSelect("type", option)}>{option}</button>
          ))}
        </>
      )} 

      {step === 3 && (
        <>
          <h3>3. Select pump head size:</h3>
          {["100m", "200m", "300m"].map((option) => (
            <button key={option} onClick={() => handleSelect("head", option)}>{option}</button>
          ))}
        </>
      )}

      {step > 3 && (
        <ProductList products={getFilteredProducts()}/>
      )}
    </div>
  );
};
