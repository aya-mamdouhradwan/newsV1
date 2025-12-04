'use client';
import Image from 'next/image';
import { useProduct } from './ProductContext';

export default function Window(){
  const { isOpen, productData, closeProductWindow } = useProduct();

  if (!isOpen || !productData) return null;

  return(
    <div id="product-window-overlay" onClick={closeProductWindow}>
      <div id="product-window" onClick={(e) => e.stopPropagation()}>
        <button id="close-window-btn" onClick={closeProductWindow}>×</button>
        <div id="product-window-content">
          <div id="product-image-container">
            <Image 
              src={productData.image} 
              alt={productData.title} 
              width={400} 
              height={500}
              id="product-window-image"
            />
          </div>
          <div id="product-details">
            <h2 id="product-window-title">{productData.title}</h2>
            <p id="product-window-description">{productData.description}</p>
            <div id="product-price">السعر: <span>{productData.price}</span></div>
            <div id="product-sizes">
              <h4>المقاسات المتوفرة:</h4>
              <div id="sizes-list">
                {productData.sizes?.map((size, index) => (
                  <span key={index} className="size-option">{size}</span>
                ))}
              </div>
            </div>
            <div id="product-colors">
              <h4>الألوان المتوفرة:</h4>
              <div id="colors-list">
                {productData.colors?.map((color, index) => (
                  <span key={index} className="color-option">{color}</span>
                ))}
              </div>
            </div>
            <button id="add-to-cart-btn">إضافة للسلة</button>
          </div>
        </div>
      </div>
    </div>
  )
}