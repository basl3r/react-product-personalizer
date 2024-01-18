import styles from '../ProductForm.module.scss'
import shortid from 'shortid';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionColor = ({props, currentColor, setCurrentColor}) => {

  const prepareColorName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()]
  }
  const handleClickColor = (newColor, e) => {
    setCurrentColor(newColor);
    e.preventDefault();
  }

  return(
    <div className={styles.colors}>
    <h3 className={styles.optionLabel}>Colors</h3>
    <ul className={styles.choices}>
      {props.colors.map(color => <li key={shortid()}><button type="button" className={clsx(color === currentColor && styles.active, prepareColorName(color))} onClick={(e) => handleClickColor(color, e)} /></li>)};
    </ul>
  </div>
  )
};

OptionColor.propTypes = {
  props: PropTypes.object,
  currentSize: PropTypes.string
};


export default OptionColor;