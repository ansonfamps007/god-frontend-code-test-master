import React from 'react';
import { Product } from '../types/types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { modelName, bodyType, modelType, imageUrl } = product;

  return (
    <div className="product-card">
      <img src={imageUrl} alt={modelName} />
      <h3>{modelName}</h3>
      <p>Body Type: {bodyType}</p>
      <p>Model Type: {modelType}</p>
      <a href={`/learn/${product.id}`}>Learn more</a>
      <a href={`/shop/${product.id}`}>Shop now</a>
    </div>
  );
};

export default ProductCard;
