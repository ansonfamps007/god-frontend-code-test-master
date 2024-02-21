import React from 'react';
import ProductListDesktop from '../src/components/ProductListDesktop';
import ProductListMobile from '../src/components/ProductListMobile';
import { Product } from '../src/types/types';
import carData from '../public/api/cars.json';

const Home: React.FC<{ products: Product[] }> = ({ products }) => {
  return (
    <div className="container">
      <h1>Latest Recharge Cars</h1>
      <div className="desktop">
        <ProductListDesktop products={products} />
      </div>
      <div className="mobile">
        <ProductListMobile products={products} />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  
  const products: Product[] = carData;

  return {
    props: {
      products,
    },
  };
}

export default Home;
