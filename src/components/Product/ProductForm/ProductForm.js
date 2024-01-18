import styles from '../ProductForm/ProductForm.module.scss';
import shortid from 'shortid';
import clsx from 'clsx';
import Button from './Button/Button';

const ProductForm = ({props, currentSize, setCurrentSize, currentColor, setCurrentColor, getPrice}) => {

  console.log('ProductForm', styles.sizes);
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
  
  return (
    <form onSubmit={handleSubmit}>
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        {props.sizes.map(size => <li key={shortid()}><button type="button" className={clsx(size.name === currentSize && styles.active)} onClick={(e) => {handleClickSize(size.name, e)}} >{size.name}</button></li>)};

      </ul>
    </div>
    <div className={styles.colors}>
      <h3 className={styles.optionLabel}>Colors</h3>
      <ul className={styles.choices}>
        {props.colors.map(color => <li key={shortid()}><button type="button" className={clsx(color === currentColor && styles.active, prepareColorName(color))} onClick={(e) => handleClickColor(color, e)} /></li>)};

      </ul>
    </div>
    <Button className={styles.button}>
      <span className="fa fa-shopping-cart" />
    </Button>
    </form>
  )
};

export default ProductForm;