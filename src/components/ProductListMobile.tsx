
import React, { useState } from 'react';
import { Product } from '../types/types';
import FilterBar from './FilterBar';

interface ProductListProps {
  products: Product[];
}

const ProductListMobile: React.FC<ProductListProps> = ({ products }) => {
  const [selectedBodyType, setSelectedBodyType] = useState('');
  const bodyTypes = [...new Set(products.map((product) => product.bodyType))];

  const handleBodyTypeChange = (selectedType: string) => {
    setSelectedBodyType(selectedType);
  };

  const filteredProducts = selectedBodyType
    ? products.filter((product) => product.bodyType === selectedBodyType)
    : products;

  return (
    <div>
      <FilterBar bodyTypes={bodyTypes} selectedBodyType={selectedBodyType} onChange={handleBodyTypeChange} />
      <div className="product-list">
        {filteredProducts.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.imageUrl} alt={product.modelName} />
            <h3>{product.modelName}</h3>
            <p>{product.bodyType}</p>
            <p>{product.modelType}</p>
            <a href={generateLearnLink(product.id)}>Learn more</a>
            <a href={generateShopLink(product.id)}>Shop now</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListMobile;
