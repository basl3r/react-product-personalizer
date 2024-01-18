/* eslint-disable no-unused-vars */
import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';
import shortid from 'shortid';

const Product = props => {
  
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const prepareColorName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()]
  }

  const handleClickSize = (newSize, e) => {
    console.log('handleClickSize started', e.target);
    setCurrentSize(newSize);
    console.log('currentSize:', currentSize);
    e.preventDefault();
  }

  const handleClickColor = (newColor, e) => {
    console.log('handleClickColor started');
    setCurrentColor(newColor);
    e.preventDefault();
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log('SUMMARY')
    console.log('==============');
    console.log(`Name: ${props.title}`);
    console.log(`Price: ${getPrice()}$`);
    console.log(`Size: ${currentSize}`);
    console.log(`Color: ${currentColor}`);
  }

  const getPrice = () => {
    console.log('getPrice started', props.basePrice );
    const foundSize = props.sizes.find((element) => element.name === currentSize);
    const totalPrice = props.basePrice + foundSize.additionalPrice;
    return totalPrice;
  }

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={props.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form onSubmit={handleSubmit}>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map(size => <li key={shortid()}><button type="button" className={clsx(size.name === currentSize && styles.active)} onClick={(e) => {handleClickSize(size.name, e)}} >{size.name}</button></li>)};

              {/* <li><button type="button" className={styles.active}>S</button></li>
              <li><button type="button">M</button></li>
              <li><button type="button">L</button></li>
              <li><button type="button">XL</button></li> */}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map(color => <li key={shortid()}><button type="button" className={clsx(color === currentColor && styles.active, prepareColorName(color))} onClick={(e) => handleClickColor(color, e)} /></li>)};
              {/* <li><button type="button" className={clsx(styles.colorBlack, styles.active)} /></li>
              <li><button type="button" className={clsx(styles.colorRed)} /></li>
              <li><button type="button" className={clsx(styles.colorWhite)} /></li> */}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
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