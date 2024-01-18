import styles from './ProductImage.module.scss';
import PropTypes from 'prop-types';

const ProductImage = ({props, currentColor}) => {

  return( 
    <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={props.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`} />
      </div>
  )
};

ProductImage.propTypes = {
  props: PropTypes.object,
  currentColor: PropTypes.string
};

export default ProductImage;