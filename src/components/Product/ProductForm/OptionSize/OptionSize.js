import styles from '../ProductForm.module.scss'
import shortid from 'shortid';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionSize = ({props, currentSize, setCurrentSize }) => {

  const handleClickSize = (newSize, e) => {
    setCurrentSize(newSize);
    e.preventDefault();
  }

  return(
    <div className={styles.sizes}>
    <h3 className={styles.optionLabel}>Sizes</h3>
    <ul className={styles.choices}>
      {props.sizes.map(size => <li key={shortid()}><button type="button" className={clsx(size.name === currentSize && styles.active)} onClick={(e) => {handleClickSize(size.name, e)}} >{size.name}</button></li>)};
    </ul>
    </div>
  )
};

OptionSize.propTypes = {
  props: PropTypes.object,
  currentSize: PropTypes.string
};

export default OptionSize;