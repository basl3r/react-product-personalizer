import styles from '../ProductForm/ProductForm.module.scss';
import Button from './Button/Button';
import OptionSize from './OptionSize/OptionSize';
import OptionColor from './OptionColor/OptionColor';
import PropTypes from 'prop-types';

const ProductForm = ({props, currentSize, setCurrentSize, currentColor, setCurrentColor, price}) => {

  const handleSubmit = e => {
    e.preventDefault();
    console.log('SUMMARY')
    console.log('==============');
    console.log(`Name: ${props.title}`);
    console.log(`Price: ${price}$`);
    console.log(`Size: ${currentSize}`);
    console.log(`Color: ${currentColor}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <OptionSize 
        props={props}
        currentSize={currentSize}
        setCurrentSize={setCurrentSize}
      />
      <OptionColor 
        props={props}
        currentColor={currentColor}
        setCurrentColor={setCurrentColor}
      />
      <Button className={styles.button}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  )
};

ProductForm.propTypes = {
  props: PropTypes.object,
  currentColor: PropTypes.string,
  currentSize: PropTypes.string
};

export default ProductForm;