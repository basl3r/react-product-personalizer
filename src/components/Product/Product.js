/* eslint-disable no-unused-vars */
import styles from './Product.module.scss';
import ProductImage from './ProductImage/ProductImage';
import ProductForm from './ProductForm/ProductForm';
import PropTypes from 'prop-types';
import { useState } from 'react';
import clsx from 'clsx';


const Product = props => {
  
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const getPrice = () => {
    console.log('getPrice started', props.basePrice );
    const foundSize = props.sizes.find((element) => element.name === currentSize);
    const totalPrice = props.basePrice + foundSize.additionalPrice;
    return totalPrice;
  }

  return (
    <article className={styles.product}>
      <ProductImage props={props} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductForm props={props} currentColor={currentColor} setCurrentColor={setCurrentColor} currentSize={currentSize} setCurrentSize={setCurrentSize} getPrice={getPrice} />
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