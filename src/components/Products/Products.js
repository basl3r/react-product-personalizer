import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';
import shortid from 'shortid';

const Products = () => {
  const [products]  = useState(productsData)

  return (
    <section>
      {products.map(product => <Product key={shortid()} {...product} />)}
    </section>
  );
};

export default Products;

// {products.map(product => <Product key={shortid()} id={product.id} name={product.name} title={product.title} colors={product.colors} sizes={product.sizes} basePrice={product.basePrice}/>)}