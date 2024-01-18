/* eslint-disable no-unused-vars */
import styles from './Product.module.scss';
import ProductImage from './ProductImage/ProductImage';
import ProductForm from './ProductForm/ProductForm';
import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';


const Product = props => {
  
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const price = useMemo(() => {
    console.log('UseMemo started');
    const foundSize = props.sizes.find((element) => element.name === currentSize);
    const totalPrice = props.basePrice + foundSize.additionalPrice;
    return totalPrice;
  }, [currentSize, props.basePrice, props.sizes]);

  return (
    <article className={styles.product}>
      <ProductImage props={props} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {price}$</span>
        </header>
        <ProductForm 
          props={props} 
          currentColor={currentColor} setCurrentColor={setCurrentColor} 
          currentSize={currentSize} 
          setCurrentSize={setCurrentSize} 
          getPrice={price} 
        />
      </div>
    </article>
  )

};

Product.propTypes = {
  basePrice: PropTypes.number,
  name: PropTypes.string,
  sizes: PropTypes.array,
  title: PropTypes.string,
  colors: PropTypes.array,
  id: PropTypes.number
};

export default Product;