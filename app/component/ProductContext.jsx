'use client';
import { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [productData, setProductData] = useState(null);

  const openProductWindow = (product) => {
    setProductData(product);
    setIsOpen(true);
  };

  const closeProductWindow = () => {
    setIsOpen(false);
    setProductData(null);
  };

  return (
    <ProductContext.Provider value={{ isOpen, productData, openProductWindow, closeProductWindow }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProduct() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProduct must be used within ProductProvider');
  }
  return context;
}

